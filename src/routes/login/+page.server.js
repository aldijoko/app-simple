
import { redirect, fail } from '@sveltejs/kit';


/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({request, cookies}) => {
		// TODO log the user in
        const form = await request.formData();

        const username = form.get('username')
        const password = form.get('password')

        if (username === '' || password === '') {
            cookies.set('user_session', 'test', {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
            });
            throw redirect(303, '/dashboard');
        }

        
        

	}
};

