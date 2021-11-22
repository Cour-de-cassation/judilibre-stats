<script>
    import Tile from '$lib/dsfr/Tile.svelte';
    import Chart from '$lib/Chart.svelte';
    import WordCloud from '$lib/WordCloud.svelte';
    import CellsChart from '$lib/CellsChart.svelte';
    import Loader from '$lib/Loader.svelte';
    import { DEFAULT_ENV, DEFAULT_SINCE } from '$lib/const.js'

    export let since = DEFAULT_SINCE;
	export let env = DEFAULT_ENV;

	const dateOptions = {
        "24h": { label: "Dernier jour", start: "now-1d", end: "now", step: "1h"},
        "1h": { label: "Dernière heure", start: "now-1h", end: "now", step: "1m"},
        "7j": { label: "Dernière semaine", start: "now-7d", end: "now", step: "4h"},
        "30j": { label: "Dernier mois", start: "now-30d", end: "now", step: "1d"},
        "j0": { label: "Depuis le début", start: "2021-10-01", end: "now", step: "1d"}
    };

    const envOptions = [ "production", "secours", "recette" ];

    const uptimeURLs = {
        production: {
            "Piste production": "api-piste-gouv-fr",
            "Scaleway production": "search-judilibre-io",
            "Scaleway primaire": "search-prod-par2-judilibre-io",
            "Scaleway secondaire": "search-prod-par1-judilibre-io"
        },
        recette: {
            "Piste sandbox": "sandbox-api-piste-gouv-fr",
            "Scaleway recette": "search-dev-judilibre-io"
        }
    };

    uptimeURLs.secours = uptimeURLs.production;

	const statsTypes = [
		{ query: "total_docs", type: "number" },
		{ query: "last_decision_date", type: "date" },
		{ query: "api_requests_number", type: "number" },
		{ query: "decision_uniq_number", type: "number" },
        { query: "uptime", type: "percentage" },
		// { query: "pods_number", type: "number" },
		{ query: "api_requests_date_histogram", type: "line", legend: true},
		{ query: "top_words", type: "wordCloud", height: "400px", col: 12, legend: false },
		{ query: "requests_ip_source", type: "pie", legend: true },
		{ query: "piste", type: "bar", legend: false },
        { query: "uptime_details", type: "cells" },
		{ query: "errors_histogram", type: "bar", indexAxis: 'y', legend: false },
		{ query: "latencty_date_histogram", type: "line", fill: true, legend: true },
		{ query: "bandwidth_date_histogram", type: "line", legend: false},
		{ query: "cpu_date_histogram", type: "line", fill: true, legend: true },
		{ query: "mem_date_histogram", type: "line", fill: true, legend: true },
	];

    const label = {
        total_docs: "Décisions indexées",
        last_decision_date: "Date de la dernière décision",
        api_requests_number: "Appels API",
        api_requests_date_histogram: "Requêtes",
        decision_uniq_number: "Décisions consultées",
        errors_histogram: "Erreurs http",
        requests_ip_source: "Canal d'appel",
        piste: "Utilisateurs Piste",
        latencty_date_histogram: "Latence",
        cpu_date_histogram: "CPU %",
        mem_date_histogram: "Mémoire",
        bandwidth_date_histogram: "Réseau (octets)",
        top_words: "Recherches",
        pods_number: "Conteneurs",
        uptime: "Disponibilité"
    }

    let stats = {};

    let isLoading = {};

    let size = 50;

    $: if (since || env) {
        fetchData();
    }

    const toMS = {
        d: 1000 * 24 * 60 * 60,
        h: 1000 * 3600,
        m: 1000 * 24 * 60 * 60 * 30,
        w: 1000 * 24 * 60 * 60 * 7,
        y: 1000 * 24 * 60 * 60 * 365,
        M: 1000 * 24 * 60
    };

    const generateTimeseries = () => {
        let timeSeries = [];
        let date = convertESdate(dateOptions[since].start);
        const dateEnd = convertESdate(dateOptions[since].end);
        const dateInterval = convertESinterval(dateOptions[since].step);
        while (date < dateEnd) {
            let dateTo = new Date(date.getTime() + dateInterval);
            timeSeries.push({dateFrom: date, dateTo: dateTo });
            date = dateTo;
        }
        return timeSeries;
    }

    const convertESdate = (dateString) => {
        const match = dateString.match(/^now(-(\d+)(m|h|d|y|w|M))?$/);
        if (match) {
            if (dateString === "now") {
            return (new Date(Date.now()));
            } else {
            const n = match[2];
            const i = toMS[match[3]];
            return (new Date(Date.now() - n*i));
            }
        } else {
            return new Date(dateString);
        }
    };

    const convertESinterval =  (dateInterval) => {
        const match = dateInterval.match(/^(\d+)(m|h|d|y|w|M)$/);
        if (match) {
            const n = match[1];
            const i = toMS[match[2]];
            return (n*i);
        } else {
            return 60 * 1000;
        }
    }

    const fetchData = () => {
        statsTypes.filter(s => s.query !== "uptime_details").forEach( async (statsType) => {
            isLoading[statsType.query] = true;
            if (statsType.query !== "uptime" ) {
                const res = await fetch(`https://monitor.judilibre.io/stats?query=${statsType.query}&date_start=${dateOptions[since].start}&date_end=${dateOptions[since].end}&date_interval=${dateOptions[since].step}&env=${env}&size=${size}`);
                if (res.ok) {
                    const json = await res.json();
                    stats[statsType.query] = await json[statsType.query];
                    isLoading[statsType.query] = false;
                }
            } else {
                const urls = uptimeURLs[env];
                const response = {};
                await Promise.all(Object.keys(urls).map(async (envLabel, i) => {
                    const res = await fetch(
                        `https://api.github.com/repos/Cour-de-cassation/judilibre-uptime/issues?state=closed&filter=all&sort=created&direction=desc&labels=status%2C${urls[envLabel]}-healthcheck`
                    );
                    if (res.ok) {
                        response[envLabel] = await res.json();
                    }
                }));
                const dateInterval = convertESinterval(dateOptions[since].step);
                isLoading["uptime_details"] = true;
                stats["uptime_details"] = {
                    type: "time_series",
                    data: generateTimeseries().map((data) => {
                            const uptime = { date: data.dateFrom.toISOString(), dateInterval: dateInterval };
                            Object.keys(urls).forEach((envLabel) => {
                                uptime[envLabel] = Math.round((Number.EPSILON + 1 - 1 / dateInterval * response[envLabel].map((issue) => {
                                        const issueStart = new Date(issue.created_at);
                                        const issueEnd = issue.closed_at && new Date(issue.closed_at) || new Date(Date.now());
                                        if ((data.dateTo < issueStart) || (data.dateFrom > issueEnd)) {
                                            return 0
                                        } else {
                                            return (data.dateTo > issueEnd ? issueEnd : data.dateTo).getTime()
                                                - (data.dateFrom > issueStart ? data.dateFrom : issueStart).getTime()
                                        }
                                    }).reduce((a, b) => a + b, 0) ) * 10000)/100;
                            });
                            return uptime;
                        })
                };
                stats["uptime"] = {
                    type: "number",
                    data: Math.round(100 * (Number.EPSILON + stats["uptime_details"].data.map(d => d[Object.keys(uptimeURLs[env])[0]])
                        .reduce((a, b) => a + b, 0)/stats["uptime_details"].data.length))/100
                };
                isLoading[statsType.query] = false;
                isLoading["uptime_details"] = false;
            }
        });
    }

    const toChartjsData = (data, name, type, chartType, fill) => {
        if (type === "time_series") {
            let c = 0;
            let series = {};
            data.forEach(d => {
                Object.keys(d).forEach(k => {
                    if (k !== "date") { series[k] = true }
                });
            });
            series = Object.keys(series);
            if (series.includes('Mem.total')) {
                // hack order of series
                series = ['Mem.used.min', 'Mem.used.mean', 'Mem.used.max', 'Mem.total']
            }
            const chartjsData = {
                datasets: series.map(k => {
                    return {
                        data: data.map(d => {
                            if (d[k]) {
                                return {
                                    x: new Date(d.date),
                                    y: d[k]
                                }
                            }
                        }),
                        label: k,
                        borderColor: colorSet[c++],
                        borderWidth: (fill || chartType === "bar") ? 0 : undefined,
                        fill: fill ? 'origin' : undefined,
                        stack: k,
                        backgroundColor: fill ?
                            `#000091${9-2*c}${9-2*c}`
                            : ((chartType === "bar") ? "#000091" : undefined)
                    }
                }),
            };
            if (chartType === "bar") {
                series.forEach(k => {
                    chartjsData.datasets.push({
                        data: data.map(d => {
                            return {
                                x: new Date(d.date),
                                y: 100-d[k]
                            }
                        }),
                        label: `${k} (down)`,
                        borderWidth: 0,
                        stack: k,
                        backgroundColor: "#e1000f"
                    })
                });
            }
            return chartjsData;
        } else {
            let sortedKeys = Object.keys(data).sort((a,b) => { return data[b] - data[a] })
            return {
                datasets: [{
                    data: sortedKeys.map(k => data[k]),
                    backgroundColor: colorSet,
                    borderWidth: 0,
                    label: label[name]
                }],
                labels: sortedKeys.map(k => labelize(k))
            }
        }
    }

    const toD3words = (data) => {
        return Object.keys(data)
            .filter(word => ((word.length>1)&&(! ["chien","téléphonie"].includes(word))))
            .map(word => {
                return {
                    "text": word,
                    "count": data[word]
                }
            })
    }

    const labelDic = {
        '80.87.226.10': 'courdecassation.fr',
        '185.24.185.49': 'piste.gouv.fr'
    }

    const labelize = (s) => {
        return labelDic[s] || s;
    }

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 0
        },
        interaction: {
            mode: 'index'
        },
        hover: {
            intersect: false
        },
        elements: {
            point:{
                radius: 0
            },
            line: {
                tension: 0.15,
            }
        }
    }

  const hexToRgb = (hex) => hexToRgba(hex,255);

  const hexToRgba = (hex, alpha) => 'rgba(' + hex.match(/^\s*\#?([\da-f]{2})([\da-f]{2})([\da-f]{2})\s*$/)
        .slice(1).map(e => parseInt(e, 16)).join(',') + `,${alpha})`;

  const colorDic = {
    "F-blue-soft": "#5770BE",
    "N-orange-dark": "#E18863",
    "E-green-soft": "#00AC8C",
    "L-yellow-dark": "#FDCF41",
    "Q-brown": "#A26859",
    "J-pink-light": "#FFC29E",
    "$blue-france": "#000091",
    "$red-marianne": "#E1000F",
    "A-green-warm": "#958B62",
    "B-green-light": "#91AE4F",
    "C-green-warm": "#169B62",
    "G-blue-dark": "#484D7A",
    "H-pink-soft": "#FF8D7E",
    "I-pink-dark": "#D08A77",
    "K-yellow-medium": "#FFE800",
    "M-orange-medium": "#FF9940",
    "O-orange-soft": "#FF6F4C",
    "P-purple": "#7D4E5B",
  };

  const colorSet = Object.keys(colorDic).map(k => colorDic[k]);

</script>

<div class="fr-container fr-container--fluid">
    <div class="fr-grid-row fr-grid-row--gutters">
        <div class="fr-col-12">
            <div class="fr-container fr-container--fluid">
                <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
                    <div class="fr-col-12">
                        <div class="fr-container fr-container--fluid">
                            <div class="fr-grid-row fr-grid-row--gutters">
                                <div class="fr-col-6">
                                    <label class="fr-label" for="date">
                                        Plage de dates
                                    </label>
                                    <select id="date" class="fr-select" bind:value={since}>
                                        {#each Object.keys(dateOptions) as d}
                                            <option value={d}>
                                                {dateOptions[d].label}
                                            </option>
                                        {/each}
                                    </select>
                                </div>
                                <div class="fr-col-6">
                                    <label class="fr-label" for="env">
                                        Environnement
                                    </label>
                                    <select id="env" class="fr-select" bind:value={env}>
                                        {#each envOptions as e}
                                            <option value={e}>
                                                {e.slice(0, 1).toUpperCase() + e.slice(1)}
                                            </option>
                                        {/each}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fr-col-12">
                        <div class="fr-container fr-container--fluid">
                            <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
                                {#each statsTypes.filter(s => ['number','percentage','date'].includes(s.type)) as statsType, i}
                                    <div class="fr-col loader-parent">
                                        <Tile>
                                            <span slot="title">
                                                {#if (stats[statsType.query] && !isLoading[statsType.query])}
                                                    {statsType.type === "date" ?
                                                        stats[statsType.query].data.replace(/(....)-(..)-(..)/,'$3/$2/$1')
                                                        :
                                                        stats[statsType.query].data
                                                    }{#if statsType.type === "percentage"}%{/if}
                                                {:else}
                                                    <Loader show={isLoading[statsType.query]} fulldiv={false}/>
                                                {/if}
                                            </span>
                                            <span slot="desc">
                                                {label[statsType.query]}
                                            </span>
                                        </Tile>
                                    </div>
                                {/each}
                            </div>
                        </div>
                    </div>
                    <div class="fr-col-12">
                        <div class="fr-container fr-container--fluid">
                            <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
                                {#each statsTypes.filter(s => !['number','percentage','date'].includes(s.type)) as statsType, i}
                                        <div class="fr-col-12 fr-col-md-6 loader-parent">
                                            <Loader show={isLoading[statsType.query] && stats[statsType.query]}/>
                                            {#if ["bar","line","pie"].includes(statsType.type) }
                                                <Chart
                                                    height={statsType.height}
                                                    type={statsType.type}
                                                    data={stats[statsType.query] && toChartjsData(stats[statsType.query].data, statsType.query, stats[statsType.query].type, statsType.type, statsType.fill)}
                                                    options={{
                                                        plugins: {
                                                            datalabels: {
                                                                color: '#ffffff'
                                                            },
                                                            title: {
                                                                display: true,
                                                                text: label[statsType.query]
                                                            },
                                                            legend: {
                                                                display: statsType.legend
                                                            }
                                                        },
                                                        ...(stats[statsType.query] && stats[statsType.query].type === "time_series"
                                                            ? {...chartOptions, scales: { x: { type: "time", stacked: true}, y: { stacked: true, beginAtZero: statsType.type === "bar" } } }
                                                            : {...chartOptions, indexAxis: statsType.indexAxis || 'x' })
                                                    }}
                                                />
                                            {:else if (statsType.type === "wordCloud") }
                                                <WordCloud words={stats[statsType.query] && toD3words(stats[statsType.query].data)}/>
                                            {:else if (statsType.type === "cells") }
                                                <CellsChart data={stats[statsType.query] && stats[statsType.query].data}/>
                                            {/if}
                                        </div>
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
