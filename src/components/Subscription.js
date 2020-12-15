import React from 'react';

// Comp with Internal and Inline Styles
const Subscription = () => {

  // Internal styles in an obj
  const subscriptionStyles = {
    subscriptionEnding: {
      backgroundColor: 'red',
      padding: '10px',
      fontSize: '20px',
      color: '#fff'
    },
    renew: {
      backgroundColor: 'green',
      padding: '10px',
      fontSize: '20px',
      color: '#fff'
    }
  };

  return (
    <div>
      {/* Inline CSS */}
      <h2 style={ { color: 'blue', fontSize: '26px' } }>Subscription | Styles Demo</h2>
      <div>
        <p style={subscriptionStyles.subscriptionEnding}>Subscription Ends: 20/Dec/2020</p>
        <p style={subscriptionStyles.renew}>Renew at 50% Discount- Offer ends today</p>
      </div>
    </div>
  )
}

export default Subscription
