import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        Providers.Credentials({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                // Here, you would check the credentials against a database
                const user = { id: 1, name: 'User', email: 'user@example.com' };
                return user ? Promise.resolve(user) : Promise.resolve(null);
            }
        }),
    ],
    pages: {
        signIn: '/login',
    },
});
