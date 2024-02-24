<script>
	export let error;
</script>

<svelte:head>
	<title>Error Page</title>
</svelte:head>

<main class="flex items-center justify-center h-screen bg-gray-100">
	<div class="bg-white p-8 rounded shadow">
		<h1 class="text-2xl font-bold mb-4">Error</h1>
		<p class="text-red-500 mb-4">Error nih</p>
		<button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
			Go Back
		</button>
	</div>
</main>

<style>
	.bg-gray-100 {
		background-color: #f7fafc;
	}

	.bg-white {
		background-color: #ffffff;
	}

	.text-red-500 {
		color: #ef4444;
	}

	.bg-blue-500 {
		background-color: #3b82f6;
	}

	.hover\:bg-blue-600:hover {
		background-color: #2563eb;
	}

	.text-white {
		color: #ffffff;
	}

	.font-bold {
		font-weight: 700;
	}

	.py-2 {
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}

	.px-4 {
		padding-left: 1rem;
		padding-right: 1rem;
	}

	.rounded {
		border-radius: 0.25rem;
	}
</style>
