<script lang="ts">
	let { children } = $props();
</script>

<a href="/">Main Page</a>

<a href="/about">About</a>
<a href="/contact">Contact</a>

{@render children()}
