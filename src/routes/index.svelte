<script context="module">
	export const prerender = true;
</script>

<script>
	import Stats from '$lib/Stats.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="fr-container">
		<div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
			<div class="fr-col-12 fr-mt-2w">
				<Stats/>
			</div>
		</div>
	</div>
</section>

<style>

</style>
