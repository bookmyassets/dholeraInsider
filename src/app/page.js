"use client"
import { useState } from 'react';
import HomePage from './pages/home';
import Popup from './components/Pop';

export default function App() {
  const [showpopForm, setpopShowForm] = useState(false);

  return (
    <>
      <HomePage/>
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