<script>
	import Header from '$lib/dsfr/Header.svelte';
	import Footer from '$lib/dsfr/Footer.svelte';
	import '../app.css';
</script>

<Header>
	<main>
		<slot />
	</main>
</Header>
<slot />

<Footer/>
