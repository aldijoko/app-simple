

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ url, cookies }) {

	
	const publicLayout = [
		'/',
		'/login',
		'/register',
	];

	const privateLayout = [
		'/dashboard',
		'/profile',
		'/settings'
	];

	let key = ''

	if (publicLayout.includes(url.pathname)) {
    	key = 'public';
	} else if (privateLayout.includes(url.pathname)) {
		key = 'private';
	}

    return { key, cookies: cookies.getAll() }
}

