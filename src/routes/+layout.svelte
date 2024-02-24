<script>
	import PrivatePage from '$lib/container/PrivatePage.svelte';
	import PublicPage from '$lib/container/PublicPage.svelte';
	import '../app.css';

	export let data;

	console.log(data);
</script>

{#if data.key === 'private'}
	<PrivatePage>
		<slot />
	</PrivatePage>
{:else}
	<PublicPage>
		<slot />
	</PublicPage>
{/if}
