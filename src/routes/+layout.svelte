<script>
	import PrivatePage from '$lib/container/PrivatePage.svelte';
	import PublicPage from '$lib/container/PublicPage.svelte';
	import '../app.css';
	import { goto } from '$app/navigation';

	export let data;

	console.log(data);
	async function handleLogOut(event) {
		const status = event.detail.logout;
		console.log(status);
		await goto(`/?logout=${status}`);
	}
</script>

{#if data.key === 'private'}
	<PrivatePage on:dispatchLogout={handleLogOut}>
		<slot />
	</PrivatePage>
{:else}
	<PublicPage>
		<slot />
	</PublicPage>
{/if}
