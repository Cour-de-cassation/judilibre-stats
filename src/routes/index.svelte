<script context="module">
	export const prerender = false;
	import { DEFAULT_ENV, DEFAULT_SINCE } from '$lib/const.js'
	export async function load({ url, params }) {
		const props = {};
		props.since = params["since"] || DEFAULT_SINCE;
		props.env = params["env"] || DEFAULT_ENV;
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
			$page.url.searchParams.set("since", since);
		} else {
			$page.url.searchParams.delete("since");
		}
		goto($page.url.searchParams.toString() ? `${$page.url.pathname}?${$page.url.searchParams.toString()}` : `${$page.url.pathname}`);
	};
	$: if (env) {
		if (env !== DEFAULT_ENV) {
			$page.url.searchParams.set("env", env);
		} else {
			$page.url.searchParams.delete("env");
		}
		goto($page.url.searchParams.toString() ? `${$page.url.pathname}?${$page.url.searchParams.toString()}` : `${$page.url.pathname}`);
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
