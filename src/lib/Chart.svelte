<script>
    import { Chart, registerables } from 'chart.js';

    import { WordCloudController, WordElement } from 'chartjs-chart-wordcloud';

    import * as Adapter from "chartjs-adapter-date-fns";

    export let type = "line";
    export let data;
    export let height = "150px";
    export let options = {};

    Chart.register(...registerables);
    Chart.register(
        WordElement,
        WordCloudController
    );
    Chart.register(Adapter);
    Chart.defaults.font.family = '"Marianne"';

	let canvas;
	let chart;
	let ctx;

	function initChart() {
		ctx = canvas.getContext("2d");
        if (chart) {
            chart.destroy()
        }
		chart = new Chart(ctx, {
			type: type,
			data: data,
			options: options
		});
	}

    $: if (data) {
        initChart();
    }
</script>

<canvas style="height: {height}" bind:this={canvas}></canvas>