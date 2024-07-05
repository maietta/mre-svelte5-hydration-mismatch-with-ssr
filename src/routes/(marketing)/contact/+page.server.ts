import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

import { z } from 'zod';
// import sgMail from "@sendgrid/mail";
import { env } from '$env/dynamic/private';

//import { env.SENDGRID_API_KEY } from '$env/static/private';

// TODO: Switch to Valibot
// Refer to https://zod.dev/ for building a desired data schema for the data we want to parse and optionally.
const contactSchema = z.object({
    fname: z.string({ required_error: 'First name is required' }).min(1),
    lname: z.string({ required_error: 'Last name is required' }).min(1),
    email: z.string({ required_error: 'Valid email address required' }).email(),
    message: z.string({ required_error: 'Please summarize your reason for contact.' }).min(1)
});

export const actions: Actions = {
    // Default form action.
    default: async ({ request }) => {
        // sgMail.setApiKey(SENDGRID_API_KEY); // TODO: Switch to self-hosted Postal

        const formData = Object.fromEntries(await request.formData());

        // Remove empty fields from the form data.
        Object.keys(formData).forEach((key) => formData[key] === '' && delete formData[key]);

        const form = contactSchema.safeParse(formData);
        const { ...rest } = formData;

        // If there is a problem with the form data, return the error.
        if (!form.success) {
            return fail(400, {
                data: rest,
                errors: form.error.flatten().fieldErrors,
                body: {
                    message: 'Please review the form and try again.',
                    classes: 'text-2xl text-red-500'
                }
            });
        }

        try {
            // await sgMail.send({
            //     to: form.data.email, // Use the email address or domain you verified above
            //     from: 'no-reply@premoweb.com',
            //     subject: 'Contat form submission',
            //     text: 'First Name: ' + form.data.fname + '\n' +
            //         'Last Name: ' + form.data.lname + '\n' +
            //         'Email: ' + form.data.email + '\n' +
            //         'Message: ' + form.data.message,
            //     // html: '<strong>' + text + '</strong>',
            // });
        } catch (err: any) {
            if (err.response) {
                console.error(err.response.body?.errors);
                return fail(400, {
                    data: rest,
                    body: {
                        message: 'Upstream Error: ' + err.response.body?.errors[0]?.message,
                        classes: 'text-2xl text-red-500'
                    }
                });
            }
        }

        // TODO: Log to on-prem database via API

        // If this point is reached, the email was sent successfully.
        return {
            status: 200,
            body: {
                message: 'Your message has been sent. Thank you!',
                classes: 'text-center text-2xl text-green-500'
            }
        };
    }
};