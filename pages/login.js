import { signIn } from 'next-auth/react';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = e.target.elements;
        signIn('credentials', {
            redirect: false,
            username: username.value,
            password: password.value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" type="text" placeholder="Username" required />
            <input name="password" type="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
