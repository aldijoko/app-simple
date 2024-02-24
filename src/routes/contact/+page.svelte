<script>
	import { onMount } from 'svelte';

	let name = '';
	let email = '';
	let message = '';

	function handleSubmit() {
		// Handle form submission here
		console.log('Form submitted');
		console.log('Name:', name);
		console.log('Email:', email);
		console.log('Message:', message);
	}

	onMount(() => {
		// Code to run when the component is mounted
	});
</script>

<svelte:head>
	<title>Contact Us</title>
	<meta name="description" content="Contact us for any queries or feedback." />
</svelte:head>

<main class="container mx-auto p-4 min-h-screen">
	<h1 class="text-2xl font-bold mb-4">Contact Us</h1>

	<form on:submit={handleSubmit}>
		<div class="mb-4">
			<label for="name" class="block mb-2">Name</label>
			<input
				type="text"
				id="name"
				bind:value={name}
				class="w-full px-4 py-2 border border-gray-300 rounded"
			/>
		</div>

		<div class="mb-4">
			<label for="email" class="block mb-2">Email</label>
			<input
				type="email"
				id="email"
				bind:value={email}
				class="w-full px-4 py-2 border border-gray-300 rounded"
			/>
		</div>

		<div class="mb-4">
			<label for="message" class="block mb-2">Message</label>
			<textarea
				id="message"
				bind:value={message}
				class="w-full px-4 py-2 border border-gray-300 rounded"
			></textarea>
		</div>

		<button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
	</form>
</main>

<style>
	/* Add custom styles here */
</style>
