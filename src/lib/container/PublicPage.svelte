<script>
	import FooterPage from '$lib/component/FooterPage.svelte';
	import HeaderPublic from '$lib/component/HeaderPublic.svelte';
	import { fly } from 'svelte/transition';
</script>

<div id="app">
	<div id="main" class="" in:fly={{ x: -100, duration: 200 }} out:fly={{ x: 100, duration: 200 }}>
		<HeaderPublic />
		<div class="w-full">
			<slot />
		</div>
		<FooterPage />
	</div>
</div>

<style>
	/* Add your styles here */
</style>
