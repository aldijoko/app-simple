<script>
	import { onMount } from 'svelte';
	onMount(() => {
		console.log('The layout component has been mounted');
	});
</script>

<nav class="bg-gray-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
			<div class="flex items-center">
				<div class="flex-shrink-0">
					<img class="h-8 w-8" src="logo.svg" alt="Logo" />
				</div>
				<div class="hidden md:block">
					<div class="ml-10 flex items-baseline space-x-4">
						<a
							href=""
							class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
							>Home</a
						>
						<a
							href=""
							class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
							>Dashboard</a
						>
						<a
							href=""
							class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
							>Profile</a
						>
						<a
							href=""
							class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
							>Settings</a
						>
						<a
							href="/"
							class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
							>Logout</a
						>
					</div>
				</div>
			</div>
		</div>
		<div class="hidden md:block">
			<div class="ml-4 flex items-center md:ml-6">
				<!-- Add your user avatar or other elements here -->
			</div>
		</div>
	</div>
</nav>
