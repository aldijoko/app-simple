

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ url }) {
	const publicLayout = [
		'/',
		'/login',
		'/register',
		'/logout'
	];

	const privateLayout = [
		'/dashboard',
		'/profile'
	];

	let key = ''

	if (publicLayout.includes(url.pathname)) {
    	key = 'public';
	} else if (privateLayout.includes(url.pathname)) {
		key = 'private';
	}

    return { key }
}