import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe('pk_test_51QGy4OKcnOMrgwm4YXrncn0WD4BnLQcioQpdCzZi5voCj3MJhpyDHwaCQEXfnA3yK7hyA3HU3kZCux96BAPGXlVl00UWOeKUGl'); // Replace with your actual Stripe publishable key
    }
    return stripePromise;
};

export default getStripe;
