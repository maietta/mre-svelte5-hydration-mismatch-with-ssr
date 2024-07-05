<script>
    let ip = "127.0.0.1";
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<header class="sticky top-0 z-10 w-screen">
        
	</header>

	<main class="flex flex-grow items-center ">
		{@render children()}
	</main>

	<footer>
        <p>Your IP address: {ip}</p>
	</footer>
</div>
