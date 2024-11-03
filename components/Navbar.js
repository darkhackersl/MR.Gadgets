import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
    const { data: session } = useSession();

    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/cart">Cart</Link>
            {session ? (
                <>
                    <span>{session.user.email}</span>
                    <button onClick={() => signOut()}>Sign Out</button>
                </>
            ) : (
                <button onClick={() => signIn()}>Sign In</button>
            )}
        </nav>
    );
};

export default Navbar;
