<script lang="ts">
	import { enhance } from '$app/forms';

	let open = $state({
		news: false,
		solutions: false,
		products: false,
		company: false
	});

	let scrollY = $state(0);

    import { Button } from "$lib/components/ui/button/index.js"; // OFFENDING LINE.
</script>

<svelte:window bind:scrollY />

<div
	class="bg-white dark:bg-slate-800 sm:px-6 lg:px-8 lg:xl mx-auto duration-300 shadow-sm {scrollY >
	0
		? ' bg-opacity-90 dark:bg-opacity-90'
		: ''} "
>
	<div class="flex flex-row justify-between items-baseline">
		<!-- Level 1, Right Navigation -->
		<div class="flex-1">
            <a href="/">Main Page</a>
                    
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        
            <a href="/account">My Account</a>
		</div>
	</div>

	<!-- Second Level Navigation -->
	<div class="flex items-center text-lg justify-between p-4 ${scrollY > 5 ? 'py-6' : ' py-10'}">
		<!-- Logo -->
		<div class="flex-1">
			<a href="/" class="font-light text-2xl">
				<!-- <img src="logo.png" alt="Logo" class="h-auto max-w-sm overflow-visible grayscale" />
                  -->
				PREMOWEB LLC
			</a>
		</div>

		<!-- Center Navigation -->
		<nav
			class="absolute left-1/2 transform -translate-x-1/2 text-xl items-center space-x-8 bg-white dark:bg-yellow-50"
		>
		\

			<a href="/insights">Insights</a>
			<!-- <span class="text-neutral-300">&nbsp;|&nbsp;</span> -->
			<a href="/learn">Learning Center</a>
		</nav>

		<!-- Right Navigation -->
		<div class="flex items-center space-x-8">
			<a href="/contact">Contact</a>
			<div class="flex items-center">
                [login button]
              
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	ul li a {
		@apply block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100;
	}
</style>


