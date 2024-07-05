<script lang="ts">
	import { enhance, applyAction } from '$app/forms';
	export let form: any; // Form object.
	export let placeholder: any; // Message placeholder object.
</script>

<div class="p-5">
	<h4 class="text-center text-3xl">Contact Us</h4>

	{#if placeholder?.message}
		<h3 class={placeholder?.classes}>{placeholder?.message}</h3>
	{/if}

	<form
		method="POST"
		use:enhance={({ formElement, formData, action, cancel, submitter }) => {
			/* SvelteKit's progressive enhancement feature upgrades the form's behavior with JavaScript. The form is completely functional without JavaScript.
			 * Progressively enhance the form with the following actions:
			 * - On submit, send the form data to the server.
			 * - On success, reset the form.
			 * - On failure, display the error message.
			 */

			// Before form submission to server
			return async ({ result, update }) => {
				// After form submission to server
				if (result.type === 'success') {
					placeholder = result?.data?.body;
					form.reset();
				}

				// On the backend, the fail() method is called with a message, which triggers a failure result.
				if (result.type === 'failure') {
					placeholder = result?.data?.body;
					await applyAction(result);
				}
				update();
			};
		}}
	>
		<div class="">
			<div class="mb-4 text-gray-700">
				<label class="block mb-1" for="fname">First Name
				<input
					class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline
					{form?.errors?.fname ? 'border-red-700' : ''}"
					type="text"
					id="fname"
					name="fname"
					aria-describedby="fname"
					value={form?.fname ?? ''}
				/></label>
				{#if form?.errors?.fname}
					<span class="text-xs text-red-700" id="fname">{form?.errors?.fname[0]}</span>
				{/if}
			</div>

			<div class="mb-4 text-gray-700">
				<label class="block mb-1" for="lname">Last Name
				<input
					class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline
				{form?.errors?.lname ? 'border-red-700' : ''}"
					type="text"
					id="lname"
					name="lname"
					aria-describedby="lname"
					value={form?.data?.lname ?? ''}
				/></label>
				{#if form?.errors?.lname}
					<span class="text-xs text-red-700" id="lname">{form?.errors?.lname[0]}</span>
				{/if}
			</div>

			<div class="mb-4 text-gray-700">
				<label class="block mb-1" for="email">Email address
				<input
					class="w-full h-10 px-3 text-base placeholder-gray-600 rounded-lg focus:shadow-outline
				{form?.errors?.email ? 'border-red-700' : ''}"
					type="text"
					id="email"
					name="email"
					aria-describedby="email"
					value={form?.data?.email ?? ''}
				/></label>
				{#if form?.errors?.email}
					<span class="text-xs text-red-700">{form?.errors?.email[0]}</span>
				{/if}
			</div>
			<div class="mb-4 text-gray-700">
				<label class="block mb-1" for="message">Your message
				<textarea
					rows="5"
					cols="50"
					class="w-full h-50 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline
				{form?.errors?.message ? 'border-red-700' : ''}"
					id="message"
					name="message"
					aria-describedby="message"
					value={form?.data?.message ?? ''}
				></textarea></label>
				{#if form?.errors?.message}
					<span class="text-xs text-red-700">{form?.errors?.message[0]}</span>
				{/if}
			</div>
		</div>
		<input
			type="submit"
			value="Send Message"
			class="focus:outline-none mt-5 primary-background px-4 py-2 font-bold w-full"
		/>
	</form>
</div>
