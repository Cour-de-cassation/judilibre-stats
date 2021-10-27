<script>
    import Tile from '$lib/dsfr/Tile.svelte';
    import Chart from '$lib/Chart.svelte';
    import WordCloud from '$lib/WordCloud.svelte';
    import Loader from '$lib/Loader.svelte';

	const statsTypes = [
		{ query: "total_docs", type: "number" },
		{ query: "last_decision_date", type: "date" },
		{ query: "api_requests_number", type: "number" },
		{ query: "decision_uniq_number", type: "number" },
		{ query: "pods_number", type: "number" },
		{ query: "api_requests_date_histogram", type: "line", legend: true},
		{ query: "top_words", type: "wordCloud", height: "400px", col: 12, legend: false },
		{ query: "requests_ip_source", type: "pie", legend: true },
		{ query: "piste", type: "bar", legend: false },
		{ query: "errors_histogram", type: "bar", indexAxis: 'y', legend: false },
		{ query: "latencty_date_histogram", type: "line", fill: true, legend: true },
		{ query: "cpu_date_histogram", type: "line", fill: true, legend: true },
		{ query: "mem_date_histogram", type: "line", fill: true, legend: true },
		{ query: "bandwidth_date_histogram", type: "line", legend: false}
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
        pods_number: "Conteneurs"
    }

	const dateOptions = [
		{ label: "Dernier jour", start: "now-1d", end: "now", step: "1h"},
		{ label: "Dernière heure", start: "now-1h", end: "now", step: "1m"},
		{ label: "Dernière semaine", start: "now-7d", end: "now", step: "4h"},
		{ label: "Dernier mois", start: "now-30d", end: "now", step: "1d"},
		{ label: "Depuis le début", start: "2020-01-01T00:00:00", end: "now", step: "1d"},
	]


    const envOptions = [
        { label: "Production", name: "production" },
        { label: "Secours", name: "secours" },
        { label: "Recette", name: "recette" },
    ]

    let dateSelected = dateOptions[0];
	let envSelected = envOptions[0];

    let stats = {};

    let isLoading = {};

    let size = 50;

    $: if (dateSelected || envSelected) {
        fetchData();
    }

    const fetchData = () => {
        statsTypes.forEach( (statsType) => {
            isLoading[statsType.query] = true;
    		fetch(
                new Request(
                    `https://monitor.judilibre.io/stats?query=${statsType.query}&date_start=${dateSelected.start}&date_end=${dateSelected.end}&date_interval=${dateSelected.step}&env=${envSelected.name}&size=${size}`,
                    {
                        method: 'GET',
                        referer: 'https://stats.judilibre.io',
                        mode: 'cors'
                    }
                )
            ).then(
                (res) => {
                    if (res.ok) {
                        return res.json().then( (json) => {
                            stats[statsType.query] = json[statsType.query];
                            isLoading[statsType.query] = false;
                        })
                    }
                })
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
                        borderWidth: fill ? 0 : undefined,
                        fill: fill ? 'origin' : undefined,
                        backgroundColor: fill ? `#000091${9-2*c}${9-2*c}` : undefined
                    }
                })
            };
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
            .filter(word => ((word.length>1)&&(word !== "chien")))
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
                                    <select id="date" class="fr-select" bind:value={dateSelected}>
                                        {#each dateOptions as dateOption}
                                            <option value={dateOption}>
                                                {dateOption.label}
                                            </option>
                                        {/each}
                                    </select>
                                </div>
                                <div class="fr-col-6">
                                    <label class="fr-label" for="env">
                                        Environnement
                                    </label>
                                    <select id="env" class="fr-select" bind:value={envSelected}>
                                        {#each envOptions as envOption}
                                            <option value={envOption}>
                                                {envOption.label}
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
                                {#each statsTypes.filter(s => ['number','date'].includes(s.type)) as statsType, i}
                                    <div class="fr-col loader-parent">
                                        <Tile>
                                            <span slot="title">
                                                {#if (stats[statsType.query] && !isLoading[statsType.query])}
                                                    {statsType.type === "number" ?
                                                        stats[statsType.query].data
                                                        : stats[statsType.query].data.replace(/(....)-(..)-(..)/,'$3/$2/$1')}
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
                                {#each statsTypes.filter(s => !['number','date'].includes(s.type)) as statsType, i}
                                        <div class="fr-col-12 fr-col-md-6 loader-parent">
                                            <Loader show={isLoading[statsType.query] && stats[statsType.query]}/>
                                            {#if statsType.type !== "wordCloud" }
                                                <Chart
                                                    height={statsType.height}
                                                    type={statsType.type}
                                                    data={stats[statsType.query] && toChartjsData(stats[statsType.query].data, statsType.query, stats[statsType.query].type, statsType.chartType, statsType.fill)}
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
                                                            ? {...chartOptions, scales: { x: { type: "time"} } }
                                                            : {...chartOptions, indexAxis: statsType.indexAxis || 'x' })
                                                    }}
                                                />
                                            {:else}
                                                <WordCloud words={stats[statsType.query] && toD3words(stats[statsType.query].data)}/>
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
