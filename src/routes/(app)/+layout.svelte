<script>
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>PremoWeb Internet Services</title>
	<meta
		name="description"
		content="Crafting unique solutions for the internet and web since 1997."
	/>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<header class="sticky top-0 z-10 w-screen">

		<div class="flex flex-row justify-center space-x-5 h-20 items-center">
		<a href="/">Main Page</a>

		<a href="/about">About</a>
		<a href="/contact">Contact</a>
		</div>
		<hr />
	</header>

	<main class="flex-grow">
		{@render children()}
	</main>

	<!-- <CTA_Banner /> -->

	<footer class="border-t">
		Footer

		<!-- {JSON.stringify(menus)} -->
		<!-- <Footer {menus} /> -->
	</footer>
</div>

<style lang="postcss">
	:global(html) {
		/* background-color: theme(colors.gray.100); */
	}
	/* Disable default crossfade. */
	:root {
		view-transition-name: none;
	}

	/* Or, just modify the duration. */
	:global(::view-transition-old(root)),
	:global(::view-transition-new(root)) {
		animation-duration: 2s;
	}
</style>
