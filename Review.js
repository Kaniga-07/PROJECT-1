import React, { createContext, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePay } from '@fortawesome/free-brands-svg-icons';

const PricingContext = createContext();

const PricingProvider = ({ children }) => {
  const pricingData = {
    signUpFee: 1495,
    monthlyPMSFee: 9945,
    quickbooksOnlineCost: 9070,
    channelManagementCost: 1110,
    bookAssistPercentage: 5,
    creditCardProcessingProviders: [
      { name: 'PayPal', fee: 2.9 },
    ],
  };

  return (
    <PricingContext.Provider value={pricingData}>
      {children}
    </PricingContext.Provider>
  );
};

const usePricing = () => {
  const context = useContext(PricingContext);
  if (!context) {
    throw new Error('usePricing must be used within a PricingProvider');
  }
  return context;
};

const Review = () => {
  const pricingData = usePricing();

  return (
    <div style={{marginTop:"70vh"}}>
      <h1 style={{ color: 'blue', textAlign: 'center' }}>PRICING</h1>
      <img
        src="https://www.vendavo.com/wp-content/uploads/2023/03/List-pricing-header-1200-%C3%97-479-px.png"
        alt="Pricing Header"
        style={{ width: '100%' }}
      />

      <h3 style={{ color: 'blue' }}>Our offers a simple and unique pricing structure.</h3>
       <i style={{fontSize:"x-large"}}>
        <b>
          <p >
            One of the most frustrating things to encounter on a website is the phrase, "Contact Us for Pricing." At Magpie, we are completely upfront about the cost of our software. Here's the breakdown:
          </p>

          <ul>
            <li>Sign up fee: We charge a one-time sign-up fee of ${pricingData.signUpFee}. This charge covers the cost of your Quickbooks and Merchant Service connections, Magpie training and support. Onsite training and import services (reservation and guest records) are available for an additional fee (to be negotiated).</li>

            <li>Monthly PMS fee: We charge 1% of your room reservation receipts. This figure is based only on room/unit revenue receipts, excluding taxes, concierge items, activities, etc. We have provided a calculator for your convenience. There is a minimum monthly fee of ${pricingData.monthlyPMSFee}.</li>

            <li>Quickbooks Online: The current cost for a QB online plus account is ${pricingData.quickbooksOnlineCost}/month; they offer discounts if you purchase a year in advance. You sign up with QB to create an account, and they charge you directly.</li>

            <li>Channel Management through RateWizz: If you want to add a channel manager to your account, the cost is ${pricingData.channelManagementCost}/month.</li>

            <li>Book Assist: If you decide to use Book Assist for your booking engine, they will charge you directly a percentage of each booking. Magpie does not charge you anything for this connection. The Book Assist percentage is {pricingData.bookAssistPercentage}%.</li>

            <li>Credit Card Processing:
              <ul>
                {pricingData.creditCardProcessingProviders.map(provider => (
                  <li key={provider.name}>
                    {provider.name}: {provider.fee}% processing fee.
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </b>
      </i>

      <div style={{ color: 'red' }}>
        <a href="https://g.co/payinvite/483or7e" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGooglePay} style={{ fontSize: '2em', color: '#4285F4', marginRight: '10px' }} />
        </a>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <PricingProvider>
      <Review />
    </PricingProvider>
  );
};

export default App;