<script>
export let data;
export let height=250;
export let viewboxHeight=900;
export let viewboxWidth=1600;

let rectHeight = 160;
let rectWidth;

const rectMargin = 0.2;

const fontHeight = 40;

$: rectHeight = (data && data.length ? Math.min(160, viewboxHeight * 0.7 / (Object.keys(data[0]).length - 1)) : 160) - fontHeight;

$: rectWidth = data && data.length ? viewboxWidth / data.length : 90;

let yTop;


$: yTop = 140 + (data && data.length ?
    ((viewboxHeight) - (fontHeight+rectHeight)*(Object.keys(data[0]).length - 1) )/2 : 0);

</script>

<div style="height: 100%;width: 100%;max-height: {height}px;display: flex; justify-content: center">
    {#if data && data.length }
        <svg {height} viewBox="0 0 {viewboxWidth} {viewboxHeight}">
            <text
                x="800"
                y={70}
                font-family="'Marianne'"
                font-weight="800"
                font-size="45"
                text-anchor="middle"
                fill="#6a6a6a"
            >
                Disponibilité
            </text>
            {#each data as event, i}
                {#each Object.keys(event).filter(k => !["date","dateInterval"].includes(k)) as k, j}
                    {#if i === 0}
                        <text
                            x="0"
                            y={yTop+j*(fontHeight+rectHeight)}
                            font-family="'Marianne'"
                            font-size="45"
                            fill="#6a6a6a"
                        >
                            {k} ({Math.round((Number.EPSILON + data.map(d => d[k]).reduce((a, b) => a + b, 0))/data.length * 100)/100 } %)
                        </text>
                    {/if}
                        <rect
                            width={rectWidth*(1-rectMargin)}
                            height={rectHeight*(1-rectMargin)}
                            fill={event[k] === 100 ? "#000091" : "#e1000f"}
                            rx="10"
                            ry="10"
                            x={i*rectWidth+rectWidth*rectMargin/2} y={yTop+j*(fontHeight+rectHeight)+rectHeight*rectMargin/2}
                        >
                            <title>
{new Date(event.date).toLocaleDateString('fr-FR', { timeZone: 'Europe/Paris', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minutes: 'numeric' })} :
{event[k]}%
{#if event[k] < 100}
{Math.round(Number.EPSILON + (100 - event[k]) * event.dateInterval / (100 * 1000 * 60)) } minutes d'indisponibilité

{/if}
                            </title>
                        </rect>
                {/each}
            {/each}
        </svg>
    {/if}
</div>