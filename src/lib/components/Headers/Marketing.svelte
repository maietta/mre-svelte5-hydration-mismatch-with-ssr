<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { ChevronDown, LogOutIcon } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Collapsible from '$lib/components/ui/collapsible';
	// import * as HoverCard from '$lib/components/ui/hover-card';
	// import LightDarkToggleSwitch from '$lib/components/LightDarkToggle.svelte';
	import { enhance } from '$app/forms';

	let open = $state({
		news: false,
		solutions: false,
		products: false,
		company: false
	});

	let scrollY = $state(0);

	let News = [
		{
			name: 'Happening Now',
			url: '/news',
			published: '2022-02-01T00:00:00Z'
		},
		{
			name: 'PremoWeb Blog',
			url: '/blog',
			published: '2022-02-01T00:00:00Z'
		},
		{
			name: 'PremoWeb Events',
			url: '/events',
			published: '2022-02-01T00:00:00Z'
		}
	];
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
			<Collapsible.Root bind:open={open.news}>
				<Collapsible.Content class="border-b border-gray-200 !bg-white dark:!bg-slate-800">
					<div class="flex flex-row justify-between min-h-[10rem] border items-center">
						<div class="col-span-3 p-4 border rounded-md flex">Content</div>
						<div class="col-span-3 p-4">Content</div>
						<div class="col-span-3 p-4">Content</div>
					</div>
				</Collapsible.Content>

				<div class=" flex flex-row space-x-4 text-sm h-auto items-center justify-end">
					<Collapsible.Trigger class="mr-20"
						><Button
							class="rounded-none  bg-amber-100 text-blue-950 dark:bg-amber-200 hover:bg-amber-100 border-green-950 border shadow-md border-t-0 rounded-b-xl"
							>News & Updates</Button
						></Collapsible.Trigger
					>

					<a href="tel:+18887736693" title="Clcik to call" class="hover:underline">888.PREMOWEB</a>
					<span class="">|</span>

					<div class="">
						<HoverCard.Root>
							<HoverCard.Trigger
								><a href="/voip/search">Find a Toll-Free Number</a></HoverCard.Trigger
							>
							<HoverCard.Content fitViewport={true}>
								<div class="p-4">
									<p>
										We can help you secure that vanity toll free number the moment it becomes
										available.
									</p>
									<a href="/voip/search">Learn More</a>
								</div>
							</HoverCard.Content>
						</HoverCard.Root>
					</div>


                        <a href="/">Main Page</a>
                    
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                    
                        <a href="/account">My Account</a>
                    
                    

					<!-- <LightDarkToggleSwitch /> -->
				</div>
			</Collapsible.Root>
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
			<DropdownMenu.Root bind:open={open.solutions}>
				<DropdownMenu.Trigger class="inline-flex h-auto items-center">
					Our Offerings
					<ChevronDown />
				</DropdownMenu.Trigger>

				<DropdownMenu.Content fitViewport={true}>
					<div class=" flex">
						<div class="max-w-lg p-4 mt-2 rounded-md flex flex-col">
							<p class="flex-1 text-2xl font-extralight mb-6">
								Discover our comprehensive range of products, solutions, and services designed to
								meet your needs.
							</p>
							<p class="grow text-lg text-gray-600">
								Our self-serve portal lets you manage accounts and services with ease. Enjoy full
								control and flexibility, with expert support available when needed. Pay as you go
								with no hidden fees.
							</p>
							<div class="grow mt-4 justify-end w-full text-right">
								<Button
									class=" bg-amber-100 text-blue-950 dark:bg-amber-200 hover:bg-amber-100 border-green-950 border shadow-md rounded-xl"
									>See our full product catalog</Button
								>
							</div>
						</div>

						<!-- Mega Menu Content -->
						<div class="p-4 mx-auto mt-2 rounded-md grid grid-cols-3 gap-4">
							<!-- Brief Statement Column -->

							<!-- Products Column -->
							<div class="col-span-1 border hover:border-red-600 rounded-lg p-4">
								<h3 class="mb-2 text-lg font-bold text-gray-800">Products & Services</h3>
								<ul>
									<li>
										<a href="/" class="">Domain Registration</a>
									</li>
									<li>
										<a href="/" class="">VoIP Telephone Service (Toll-Free & Local)</a>
									</li>
									<li>
										<a href="/" class="">Virtual Private & Dedicated Servers</a>
									</li>
									<li>
										<a href="/" class="">Website Shared Virtual Hosting</a>
									</li>
								</ul>
							</div>

							<!-- Solutions Column -->
							<div class="col-span-1 border hover:border-red-600 rounded-lg p-4">
								<h3 class="mb-2 text-lg font-bold text-gray-800">Custom Solutions</h3>
								<ul>
									<li>
										<a href="/" class="">Custom Websites, Apps & Portals</a>
									</li>
									<li>
										<a href="/" class="">Software & API Development</a>
									</li>
									<li>
										<a href="/" class="">Web Crawling & Data Extraction</a>
									</li>
									<li>
										<a href="/" class="">vPBX & IVR Programming Services</a>
									</li>
								</ul>
							</div>

							<!-- Services Column -->
							<div class="col-span-1 border hover:border-yellow-300 rounded-lg p-4">
								<h3 class="mb-2 text-lg font-bold text-gray-800">Managed Solutions</h3>
								<ul>
									<li>
										<a href="/" class="">Managed Domains & DNS</a>
									</li>
									<li>
										<a href="/" class="">Website, Email, App & PBX Hosting</a>
									</li>

									<li>
										<a href="/" class="">Realty Websites & MLS Data Replication</a>
									</li>
									<li>
										<a href="/" class="">CapRover & Coolify Migrations</a>
									</li>
								</ul>
							</div>
						</div>
					</div></DropdownMenu.Content
				>
			</DropdownMenu.Root>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class="inline-flex h-auto items-center">
					About
					<ChevronDown />
				</DropdownMenu.Trigger>

				<DropdownMenu.Content fitViewport={false}>
					<div class="bg-gray-100 shadow-md rounded-lg px-4 py-3 space-y-2 w-80">
						<!-- Section 1: About -->
						<div>
							<h3 class="text-gray-800 font-semibold mb-2">About</h3>
							<ul class="space-y-1">
								<li><a href="/" class="text-gray-600 hover:text-blue-500">Our Story</a></li>
								<li><a href="/" class="text-gray-600 hover:text-blue-500">Who We Are</a></li>
								<li><a href="/" class="text-gray-600 hover:text-blue-500">Contact Us</a></li>
							</ul>
						</div>

						<!-- Section 2: Products -->
						<div>
							<h3 class="text-gray-800 font-semibold mb-2">Products</h3>
							<ul class="space-y-1">
								<li><a href="/" class="text-gray-600 hover:text-blue-500">Our Services</a></li>
								<li><a href="/" class="text-gray-600 hover:text-blue-500">Custom Solutions</a></li>
							</ul>
						</div>

						<!-- Section 3: More -->
						<div>
							<h3 class="text-gray-800 font-semibold mb-2">More</h3>
							<ul class="space-y-1">
								<li><a href="/" class="text-gray-600 hover:text-blue-500">Our Brands</a></li>
								<li><a href="/" class="text-gray-600 hover:text-blue-500">Newsletter</a></li>
							</ul>
						</div>

						<!-- Section 4: Social -->
						<div>
							<h3 class="text-gray-800 font-semibold mb-2">Social</h3>
							<ul class="space-y-1">
								<li><a href="/" class="text-gray-600 hover:text-blue-500">Follow Us</a></li>
								<li><a href="/" class="text-gray-600 hover:text-blue-500">Community</a></li>
							</ul>
						</div>
					</div>
				</DropdownMenu.Content>
			</DropdownMenu.Root>

			<a href="/insights">Insights</a>
			<!-- <span class="text-neutral-300">&nbsp;|&nbsp;</span> -->
			<a href="/learn">Learning Center</a>
		</nav>

		<!-- Right Navigation -->
		<div class="flex items-center space-x-8">
			<a href="/contact">Contact</a>
			<div class="flex items-center">
                [login button]
                <!-- {#if user}
					<form action="/api/logout" method="POST" use:enhance>
						<Button class="btn-primary">Logout</Button>
					</form>
				{/if}
				{#if !user}
					<a
						href="/login"
						class="btn-primary outline rounded-sm dark:bg-blue-300 bg-blue-900 text-white py-2 px-3"
					>
						Login</a
					>
				{/if} -->
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	ul li a {
		@apply block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100;
	}
</style>


