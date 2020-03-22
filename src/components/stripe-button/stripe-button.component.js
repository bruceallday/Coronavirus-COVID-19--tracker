import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = (props) => {
    const { price } = props
    const priceForStripe = price * 100
    const key = KEY

    const onToken = token => {
        console.log("TOKEN", token)
        alert("PAYMENY SUCCESS")
    }

    return(
        <StripeCheckout
            label='donate to this project'
            name='Track-Covid-19'
            amount={priceForStripe}
            // image='IMAGE?'
            description={'discription'}
            PanelLabel='Pay Now'
            token={onToken}
            stripeKey={key}
            
        />
    )
}

export default StripeCheckoutButton