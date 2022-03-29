import React, { useState } from "react";
import data from "./data.json";
import PricingComponent from "./components/pricingCard/pricingCard.components";
import IOSSwitch from "./components/iosSwitch/Switch.component";
function App() {
	const [plan, setPlan] = useState(false);
	console.log(data);
	return (
		<main className="flex flex-col justify-center items-center overflow-auto h-screen m-auto w-screen text-center">
			<div className="mb-9">
				<h1 className="text-2xl font-bold text-gray-500 mb-5">OUR PRICING</h1>
				<section>
					<span className="text-gray-400">Annually</span>
					<IOSSwitch sx={{ mx: 3 }} defaultChecked onClick={() => setPlan((plan) => !plan)} />
					<span className="text-gray-400">Monthly</span>
				</section>
			</div>
			<div className="flex flex-row h-2/3 w-11/12 flex-wrap  md:flex-wrap lg:flex-nowrap sm:w-3/4 md:w-2/3 justify-center items-center">
				{data.Cards.map((card) => (
					<PricingComponent data={card} key={card.id} plan={plan} />
				))}
			</div>
		</main>
	);
}

export default App;
