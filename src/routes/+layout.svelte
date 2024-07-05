<script>
	import '../app.css';
	import { setupViewTransition } from 'sveltekit-view-transition';

	setupViewTransition();

	let { children } = $props();
</script>

<svelte:head>
	<title>Business Name</title>
	<meta
		name="description"
		content="Our cool website."
	/>
</svelte:head>


{@render children()}

<style lang="postcss">
	:global(::view-transition-old(root)),
	:global(::view-transition-new(root)) {
		animation-duration: 500ms;
	}
</style>
