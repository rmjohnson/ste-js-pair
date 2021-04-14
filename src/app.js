import React, { useState } from 'react';
import { First } from './pages/first';
import { Second } from './pages/second';
import { FinalThanks } from './pages/final-thanks';

import './app.css';

const availableAmenities = [
	{ label: 'Pool', value: 'pool', checked: false },
	{ label: 'Spa', value: 'spa', checked: false },
	{ label: 'Racquetball Court', value: 'racquetball-court', checked: false },
];

async function submitPage(answers) {
	await fetch('api/submit', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
		body: JSON.stringify(answers),
	});
}

function App() {
	const [pageNumber, setPageNumber] = useState(1);
	const [amenitiesUsed, setAmenitiesUsed] = useState(availableAmenities);

	const handleSubmitPage = async (answers) => {
		await submitPage(answers);
		setPageNumber(pageNumber + 1);
	};

	const page =
		pageNumber === 1 ? (
			<First
				submitPage={handleSubmitPage}
				amenitiesUsed={amenitiesUsed}
				setAmenitiesUsed={setAmenitiesUsed}
			/>
		) : pageNumber === 2 ? (
			<Second
				submitPage={handleSubmitPage}
				checkedAmenities={amenitiesUsed.filter((a) => a.checked).map((a) => a.value)}
			/>
		) : (
			<FinalThanks />
		);

	return <div className="App">{page}</div>;
}

export default App;
