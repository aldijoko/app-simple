import { redirect } from '@sveltejs/kit';

const publicRoutes = [
    '/',
    '/login',
    '/register',
    '/about',
    '/contact',
]

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve, request }) {
    const session = event.cookies.get('user_session');
    console.log(session)
	if (!session && !publicRoutes.includes(event.url.pathname)) {
        throw redirect(302, '/login');
	}

    if (session && event.url.pathname == '/login' ) {
        throw redirect(302, '/dashboard');
    }

    const query = event.url.searchParams.get('logout');
    if (Boolean(query) == true) {
        await event.cookies.delete('user_session', { path: '/' });
        throw redirect(302, '/');
    }

	const response = await resolve(event);
	return response;
}