import { redirect } from '@sveltejs/kit';

const publicRoutes = [
    '/',
    '/login',
    '/register',
    '/logout'
]

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	// if (!publicRoutes.includes(event.url.pathname)) {
    //     throw redirect(302, '/login');
	// }

	const response = await resolve(event);
	return response;
}