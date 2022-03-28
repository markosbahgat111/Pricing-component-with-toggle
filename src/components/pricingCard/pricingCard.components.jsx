import React from 'react';

const PricingComponent = ({ data, plan }) =>
{
    const { annually, monthly } = data;
    console.log(data, plan)
    return ( 
        <main className='bg-white w-full h-5/6  flex flex-col justify-start p-9 m-5 items-center text-center'>
            <section>
                <header className='uppercase'>{data.cardName}</header>
                <h1 className='text-6xl'>${(plan ? monthly : annually).Price}</h1>
            </section>
            <section >
                <hr />
                <span className='capitalize'>{(plan ? monthly : annually).storage}</span>
                <hr />
                <span className='capitalize'>{(plan ? monthly : annually).sendCapacity}</span>
                <hr />
                <span className='capitalize'>{(plan ? monthly : annually).usersAllowed} Users Allowed</span>
                <hr />
            </section>
            <button>
                LEARN MORE
            </button>
        </main>
     );
}
 
export default PricingComponent;