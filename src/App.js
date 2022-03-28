import React, { useState } from 'react';
import data from './data.json';
import './App.css';
import PricingComponent from './components/pricingCard/pricingCard.components';
import Switch from '@mui/material/Switch';

function App()
{
  const [plan, setPlan] = useState(false)
  console.log(data)
  return (
    <main className='flex flex-col justify-center items-center overflow-auto h-screen m-auto w-screen'>
      <div>
        <h1>OUR PRICING</h1>
        <section>
          <span></span>
          <Switch  />
          <span></span>
        </section>
      </div>
      <div className='flex flex-row h-3/4 flex-wrap md:flex-wrap lg:flex-nowrap sm:w-3/4 md:w-1/2 lg:w-11/12 justify-center items-center'>
          {data.Cards.map(card => (
            <PricingComponent data={card} key={card.id} plan={plan}/>
          ))}
      </div>
    </main>
  );
}

export default App;
