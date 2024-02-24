<script>
	import { onMount } from 'svelte';

	let profile = {
		name: 'John Doe',
		email: 'johndoe@example.com',
		avatar: 'https://example.com/avatar.jpg',
		followers: 1000,
		following: 500,
		posts: 50
	};

	onMount(() => {
		// Fetch profile data from API or perform any other initialization logic
	});
</script>

<svelte:head>
	<title>Dashboard</title>
	<meta name="description" content="User dashboard with profile information." />
</svelte:head>

<main class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
	<div class="max-w-3xl mx-auto px-4 py-8">
		<div class="bg-white rounded-lg shadow-lg p-6 mb-8">
			<div class="flex items-center">
				<img class="w-12 h-12 rounded-full mr-4" src={profile.avatar} alt="Profile Avatar" />
				<div>
					<h2 class="text-xl font-semibold">{profile.name}</h2>
					<p class="text-gray-500">{profile.email}</p>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
			<div class="bg-white rounded-lg shadow-lg p-6">
				<h3 class="text-lg font-semibold mb-4">Followers</h3>
				<p class="text-2xl font-bold">{profile.followers}</p>
			</div>

			<div class="bg-white rounded-lg shadow-lg p-6">
				<h3 class="text-lg font-semibold mb-4">Following</h3>
				<p class="text-2xl font-bold">{profile.following}</p>
			</div>

			<div class="bg-white rounded-lg shadow-lg p-6">
				<h3 class="text-lg font-semibold mb-4">Posts</h3>
				<p class="text-2xl font-bold">{profile.posts}</p>
			</div>
		</div>
	</div>
</main>

<style>
	/* Add your custom styles here */
</style>
