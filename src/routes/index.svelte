<script context="module">
	export const prerender = false;
	import { DEFAULT_ENV, DEFAULT_SINCE } from '$lib/const.js'
	export async function load({ page }) {
		const props = {};
		props.since = page.query.get("since") || DEFAULT_SINCE;
		props.env = page.query.get("env") || DEFAULT_ENV;
		return { props };
	}

</script>

<script>
	import Stats from '$lib/Stats.svelte';
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";

	export let since;
	export let env;

	$: if (since) {
		if (since !== DEFAULT_SINCE) {
			$page.query.set("since", since);
		} else {
			$page.query.delete("since");
		}
		goto($page.query.toString() ? `${$page.path}?${$page.query.toString()}` : `${$page.path}`);
	};
	$: if (env) {
		if (env !== DEFAULT_ENV) {
			$page.query.set("env", env);
		} else {
			$page.query.delete("env");
		}
		goto($page.query.toString() ? `${$page.path}?${$page.query.toString()}` : `${$page.path}`);
	};

</script>

<svelte:head>
	<title>API Judilibre - statistiques</title>
</svelte:head>

<section>
	<div class="fr-container">
		<div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
			<div class="fr-col-12 fr-mt-2w">
				<Stats bind:since={since} bind:env={env} />
			</div>
		</div>
	</div>
</section>

<style>

</style>
