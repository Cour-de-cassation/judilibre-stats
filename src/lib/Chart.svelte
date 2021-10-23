<script>
    import { Chart, registerables } from 'chart.js';

    import * as Adapter from "chartjs-adapter-date-fns";

    export let type = "line";
    export let data;
    export let height;
    export let options = {};

    Chart.register(...registerables);
    Chart.register(Adapter);
    Chart.defaults.font.family = '"Marianne"';

	let canvas;
	let chart;
	let ctx;

	function updateChart() {
		ctx = canvas.getContext("2d");
        if (chart) {
            chart.data = data;
            chart.update();
        } else {
            chart = new Chart(ctx, {
                type: type,
                data: data,
                options: options
            });
        }
	}

    $: if (data) {
        updateChart();
    }
</script>

<canvas style="height: {height || "250px"}" bind:this={canvas}></canvas>