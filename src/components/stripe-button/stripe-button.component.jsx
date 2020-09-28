import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HWTSjEg23F7CpBPQOkbZwUn4LADi92CZi45MW5BzvISkzCKBLE3t1W7mFLxZbl7hAAasb1UrQWM5Tv1HATPEcLe00TTBaF3v7';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout 
          label='Pay Now'
          name='CROWN Clothing Ltd.'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total value is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        
        
        />
    )

};

export default StripeCheckoutButton;