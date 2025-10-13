"use client"
import { useState } from 'react';
import HomePage from './pages/home';
import Popup from './components/Pop';

export default function App() {
  const [showpopForm, setpopShowForm] = useState(false);

  return (
    <>
    <meta name='title' content='Dholera Insider – Invest in Dholera Smart City Plots' />
    <meta name='description' content='Discover verified NA/NOC-approved Dholera plots in Dholera Smart City. Get expert guidance for investment in Dholera and Dholera real estate.' />
    <meta name='keywords' content='Dholera, Dholera Smart City, Dholera real estate, Dholera plots, investment in Dholera' />
    <div>
      <HomePage openForm={() => setpopShowForm(true)}  />
    </div>
      {showpopForm && (
        <Popup
          onClose={() => setpopShowForm(false)}
          title={`Exclusive Deal: Own a plot at ₹9,250/sq. yard — hurry, limited units! –  left`}
          buttonName="Speak with a Plot Specialist"
          className="font-medium"
        />
      )}
    </>
  );
}