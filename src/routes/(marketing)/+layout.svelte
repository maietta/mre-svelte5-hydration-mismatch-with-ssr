<script>
	import Footer from '$lib/components/Footers/Marketing.svelte';
    import Header from '$lib/components/Headers/Marketing.svelte';
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<header class="sticky top-0 z-10 w-screen">
        <Header />
	</header>
    
	<main class="flex-grow border-y-2">
		{@render children()}
	</main>

	<footer>
		<Footer />
	</footer>
</div>
