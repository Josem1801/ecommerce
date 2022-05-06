import React from 'react';
import SubscriptionContainer from './styles';

export default function SubscribeInput() {
  return (
    <SubscriptionContainer>
      <input type="text" placeholder="Enter your email address" />
      <button type="submit">Subscribe</button>
    </SubscriptionContainer>
  );
}
