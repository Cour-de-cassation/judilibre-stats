<script>
    import Tile from '$lib/dsfr/Tile.svelte';
    import Chart from '$lib/Chart.svelte';

	const statsTypes = [
		{ query: "api_requests_number", type: "number" },
		{ query: "decision_uniq_number", type: "number" },
		{ query: "pods_number", type: "number" },
		{ query: "api_requests_date_histogram", type: "line", legend: true},
		{ query: "errors_histogram", type: "bar", legend: false },
		{ query: "requests_ip_source", type: "pie", legend: true },
		{ query: "latencty_date_histogram", type: "line", fill: true, legend: true },
		{ query: "cpu_date_histogram", type: "line", fill: true, legend: true },
		{ query: "mem_date_histogram", type: "line", fill: true, legend: true },
		{ query: "bandwidth_date_histogram", type: "line", legend: false},
		{ query: "top_words", type: "bar", height: "400px", col: 12, legend: false }
	];

    const label = {
        api_requests_number: "Appels API",
        api_requests_date_histogram: "Requêtes",
        decision_uniq_number: "Décisions consultées",
        errors_histogram: "Erreurs http",
        requests_ip_source: "Canal d'appel",
        latencty_date_histogram: "Latence",
        cpu_date_histogram: "CPU %",
        mem_date_histogram: "Mémoire",
        bandwidth_date_histogram: "Réseau (octets)",
        top_words: "Recherches",
        pods_number: "Conteneurs"
    }

	const dateOptions = [
		{ label: "Dernier jour", start: "now-1d", end: "now", step: "30m"},
		{ label: "Dernière heure", start: "now-1h", end: "now", step: "2m"},
		{ label: "Dernière semaine", start: "now-7d", end: "now", step: "12h"},
		{ label: "Dernier mois", start: "now-30d", end: "now", step: "1d"},
		{ label: "Depuis le début", start: "2020-01-01T00:00:00", end: "now", step: "1d"},
	]

    let dateSelected = dateOptions[0];

    const clusterOptions = [
        { label: "Production", name: "judilibre-scw-prod-par2" },
        { label: "Secours", name: "judilibre-scw-prod-par1" },
        { label: "Recette", name: "judilibre-scw-dev-par1" },
    ]

	let clusterSelected = clusterOptions[0];

    let stats = {};

    let size = 50;

    $: if (dateSelected || clusterSelected) {
        statsTypes.forEach( (statsType) => {
    		fetch(
                new Request(
                    `https://monitor.judilibre.io/stats?query=${statsType.query}&date_start=${dateSelected.start}&date_end=${dateSelected.end}&date_interval=${dateSelected.step}&cluster=${clusterSelected.name}&size=${size}`,
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
            return {
                datasets: [{
                    data: Object.keys(data).map(k => data[k]),
                    backgroundColor: colorSet,
                    borderWidth: 0,
                    label: label[name]
                }],
                labels: Object.keys(data).map(k => labelize(k))
            }
        }
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
        tooltips: {
          mode: 'nearest',
          intersect: false,
        },
        elements: {
            point:{
                radius: 0
            },
            line: {
                tension: 0,
            }
        }
    }

  const hexToRgb = (hex) => hexToRgba(hex,255);

  const hexToRgba = (hex, alpha) => 'rgba(' + hex.match(/^\s*\#?([\da-f]{2})([\da-f]{2})([\da-f]{2})\s*$/)
        .slice(1).map(e => parseInt(e, 16)).join(',') + `,${alpha})`;

  const colorSet = [
    '#4dc9f6',
    '#f67019',
    '#f53794',
    '#537bc4',
    '#acc236',
    '#166a8f',
    '#00a950',
    '#58595b',
    '#8549ba'
   ]

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
                                    <label class="fr-label" for="cluster">
                                        Environnement
                                    </label>
                                    <select id="cluster" class="fr-select" bind:value={clusterSelected}>
                                        {#each clusterOptions as clusterOption}
                                            <option value={clusterOption}>
                                                {clusterOption.label}
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
                                {#each statsTypes.filter(s => s.type === "number").map(s => s.query) as query}
                                    <div class="fr-col">
                                        {#if stats[query]}
                                            <Tile>
                                                <span slot="title">
                                                    {stats[query].data}
                                                </span>
                                                <span slot="desc">
                                                    {label[query]}
                                                </span>
                                            </Tile>
                                        {/if}
                                    </div>
                                {/each}
                            </div>
                        </div>
                    </div>
                    <div class="fr-col-12">
                        <div class="fr-container fr-container--fluid">
                            <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
                                {#each statsTypes.filter(s => s.type !== "number") as statsType, i}
                                    <div class="fr-col-12 fr-col-md-{statsType.col || 6}">
                                        <Chart
                                            height={statsType.height}
                                            type={statsType.type}
                                            data={stats[statsType.query] && {...toChartjsData(stats[statsType.query].data, statsType.query, stats[statsType.query].type, statsType.chartType, statsType.fill)}}
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
                                                    ? {...chartOptions, scales: { x: { type: "time"} } }
                                                    : chartOptions)
                                            }}
                                        />
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

