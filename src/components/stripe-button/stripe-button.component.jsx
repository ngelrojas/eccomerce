import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100
  const publishblekey = 'pk_test_UHR44yy7jg7NPjrx6nzz6gHh00lil3jFCj'
  const onToken = token => {
    console.log(token)
    alert('payment succefull')
  }
  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishblekey}
    />
  )
}
export default StripeCheckoutButton
