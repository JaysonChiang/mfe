import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './componens/MarketingApp';
import Header from './componens/Header';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};
