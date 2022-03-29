import React from "react";
import "./style.css";

const PricingComponent = ({ data, plan }) => {
	const { annually, monthly } = data;
	console.log(data, plan);
	return (
		<main
			className="bg-white w-full rounded-xl flex flex-col justify-evenly p-5 items-center text-center px-9 my-9 lg:my-0  md:my-9"
			id={data.cardName === "professional" && "active"}>
			<section className="mb-9">
				<header className="capitalize text-gray-500  mb-7 font-bold">{data.cardName}</header>
				<h1 className="text-6xl text-gray-700 font-bold">${(!plan ? monthly : annually).Price}</h1>
			</section>
			<section className="w-full h-1/4 flex flex-col justify-evenly mt-5">
				<hr />
				<span className="capitalize text-gray-500 py-3">{(!plan ? monthly : annually).storage}</span>
				<hr />
				<span className="capitalize text-gray-500 py-3">
					{(!plan ? monthly : annually).usersAllowed} Users Allowed
				</span>
				<hr />
				<span className="capitalize text-gray-500 py-3">
					send up to {(!plan ? monthly : annually).sendCapacity} GB
				</span>
				<hr />
			</section>
			<button className="text-white w-full rounded h-10 hover:border-2 text-sm font-bold mt-9">LEARN MORE</button>
		</main>
	);
};

export default PricingComponent;
