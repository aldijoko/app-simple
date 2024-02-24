<script>
	let user = {
		name: 'John Doe',
		email: 'johndoe@example.com',
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl id aliquet ultrices, nunc nunc lacinia nunc, vitae tincidunt dolor nunc nec nunc.'
	};
</script>

<svelte:head>
	<title>Profile</title>
	<meta name="description" content="User profile with name, email, and bio." />
</svelte:head>

<main class="bg-gray-100 min-h-screen flex items-center justify-center container mx-auto px-4 py-8">
	<div class="bg-white shadow-lg rounded-lg p-8">
		<div class="flex items-center justify-center"></div>
		<h2 class="text-2xl font-bold mt-4">{user.name}</h2>
		<p class="text-gray-500 mt-2">{user.email}</p>
		<p class="text-gray-700 mt-4">{user.bio}</p>
	</div>
</main>
