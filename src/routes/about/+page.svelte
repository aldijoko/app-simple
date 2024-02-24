<script>
	export let name = 'SvelteKit Learn New';
</script>

<svelte:head>
	<title>About Us</title>
	<meta name="description" content="Welcome to {name}! We are a team of passionate developers." />
</svelte:head>

<main class="bg-gray-100 min-h-screen">
	<div class="container mx-auto py-8">
		<h1 class="text-3xl font-bold mb-4">About Us</h1>
		<p class="text-gray-700 mb-4">Welcome to {name}! We are a team of passionate developers.</p>
		<p class="text-gray-700 mb-4">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquet
			ultricies, elit nunc tincidunt urna, nec efficitur nisl nunc vel nunc. Sed auctor, nisl nec
			lacinia lacinia, nunc nunc tincidunt urna, nec efficitur nisl nunc vel nunc.
		</p>
		<p class="text-gray-700 mb-4">
			Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam
			auctor, nunc id aliquet ultricies, elit nunc tincidunt urna, nec efficitur nisl nunc vel nunc.
		</p>
	</div>
</main>

<style>
	.container {
		max-width: 800px;
	}
</style>
