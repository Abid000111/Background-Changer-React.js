"use client";
import React, { useState } from "react";

const page = () => {
	const [color, setColor] = useState("black")
	return (
		<>
			<div className="h-screen w-screen duration-500" style={{backgroundColor: color}}>
				<div className="flex flex-wrep justify-center fixed bottom-12 inset-x-0 px-2">
					<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
						<button onClick={() => setColor("red")} className="text-black font-bold bg-red-600 px-4 py-1 rounded-full shadow-lg">Red</button>
						<button onClick={() => setColor("green")} className="text-black font-bold bg-green-600 px-4 py-1 rounded-full shadow-lg">Green</button>
						<button onClick={() => setColor("orange")} className="text-black font-bold bg-orange-400 px-4 py-1 rounded-full shadow-lg">Orange</button>
						<button onClick={() => setColor("purple")} className="text-black font-bold bg-purple-500 px-4 py-1 rounded-full shadow-lg">Purple</button>
						<button onClick={() => setColor("blue")} className="text-black font-bold bg-blue-600 px-4 py-1 rounded-full shadow-lg">blue</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
