import { SessionProvider } from 'next-auth/react';
import { CartProvider } from '../context/CartContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <SessionProvider session={pageProps.session}>
            <CartProvider>
                <Component {...pageProps} />
            </CartProvider>
        </SessionProvider>
    );
}

export default MyApp;
