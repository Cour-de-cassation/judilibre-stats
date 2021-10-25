<script>
  import { createEventDispatcher } from "svelte";
  import cloud from "d3-cloud";
  import { select } from "d3-selection";
  import { scaleOrdinal } from "d3-scale";
  import * as CS from "d3-scale-chromatic";
  // event dispatcher
  const dispatch = createEventDispatcher();
  // color scheme
  const color_scheme = {
    schemeCategory10: CS.schemeCategory10,
    schemeAccent: CS.schemeAccent,
    schemeDark2: CS.schemeDark2,
    schemePaired: CS.schemePaired,
    schemePastel1: CS.schemePastel1,
    schemePastel2: CS.schemePastel2,
    schemeSet1: CS.schemeSet1,
    schemeSet2: CS.schemeSet2,
    schemeSet3: CS.schemeSet3,
    schemeTableau10: CS.schemeTableau10,
  };
  // props
  export let words;
  export let height = 900;
  export let width = 1600;
  export let font = '"Marianne"';
  export let maxFontSize = 250;
  export let scheme = "schemeTableau10";
  export let padding = 4;
  let inactive = false;
  let maxSize = 1;
  let prevWords = "";
  // count max word occurence
  let maxWordCount;
  // text color scheme
  const fill = scaleOrdinal(color_scheme[scheme]);
  // events
  const onWordClick = (d) => dispatch("click", d);
  const onWordMouserOver = (d) => dispatch("mouseover", d);
  const onWordMouseOut = (d) => dispatch("mouseout", d);
  const onWordMouseMove = (d) => dispatch("mousemove", d);
  let layout;

  const draw = (words) => {
    select("#wordcloud")
        .append("svg")
        // Responsive SVG needs these 2 attributes and no width and height attr.
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("width", "100%")
        .attr("height", "100%")
        // Class to make it responsive.
        .classed("svg-content-responsive", true)
        .append("g")
        .attr(
        "transform",
        "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")"
        )
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", (d) => d.size + "px")
        .style("font-weight", (d) => (Math.min(800, d.size * 800 / maxSize)))
        .style("font-family", font)
        .style("fill", (_d, i) => fill(i))
        .attr("text-anchor", "middle")
        .attr(
        "transform",
        (d) => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"
        )
        .text((d) => d.text)
        .on("click", onWordClick)
        .on("mouseover", onWordMouserOver)
        .on("mouseout", onWordMouseOut)
        .on("mousemove", onWordMouseMove);
  }

  $: if (words && (JSON.stringify(words) !== prevWords)) {
    if (words.length) {
        console.log(words);
        inactive = false;
        if (layout) {
            select("#wordcloud").select("svg").remove();
        }
        prevWords = JSON.stringify(words);
        maxWordCount = Math.max(...words.map(d => d.count),0);
        layout = cloud()
            .size([width, height])
            .words(words)
            .padding(padding)
            .rotate(() => ~~(Math.random() * 2) * 90)
            .font(font)
            .fontSize(
                (d) =>  {
                    const size = Math.floor((d.count / maxWordCount) * maxFontSize) + 1;
                    maxSize = Math.max(maxSize, size);
                    return size;
                }
            )
            .on("end", draw);
        layout.start();
    } else {
        prevWords = JSON.stringify(words);
        inactive = true;
    }
  }
</script>

<div id="wordcloud" class:inactive={inactive} style="height: 100%;max-height: 250px;display: block; margin: auto;">
    {#if (words && words.length === 0)}
        (pas de requête)
    {/if}
</div>

<style>
    div#wordcloud {
        width: fit-content;
        height: fit-content;
    }

    .inactive {
        -webkit-filter: grayscale(70%) blur(2px) brightness(120%);
        -moz-filter: grayscale(70%) blur(2px) brightness(120%);
        -ms-filter: grayscale(70%) blur(2px) brightness(120%);
        -o-filter: grayscale(70%) blur(2px) brightness(120%);
        filter: grayscale(70%) blur(2px) brightness(120%);
    }
</style>