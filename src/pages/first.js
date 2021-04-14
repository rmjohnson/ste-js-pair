import React, { useState } from 'react';
import { TextInput } from '../components/text-input';
import { CheckboxGroup } from '../components/checkbox-group';
import { RadioGroup } from '../components/radio-group';
import { Button } from '../components/button';

import './first.css';

export const First = ({ submitPage, amenitiesUsed, setAmenitiesUsed }) => {
	const [guestName, setGuestName] = useState('');

	const [friendlinessRank, setFriendlinessRank] = useState(null);
	const [cleanlinessRank, setCleanlinessRank] = useState(null);

	const handleNext = () => {
		submitPage({
			guestName,
			friendlinessRank,
			cleanlinessRank,
			amenities: amenitiesUsed.map((a) => a.value),
		});
	};

	return (
		<>
			<h1>{'Faithlife Hotel Survey'}</h1>
			<TextInput label="Guest Name" value={guestName} onChange={setGuestName} />
			<CheckboxGroup
				header="What amenities did you use during your stay?"
				options={amenitiesUsed}
				updateOptions={setAmenitiesUsed}
			/>
			<RadioScale
				header="Please rate the friendliness of the staff"
				minRank={1}
				maxRank={10}
				currentRank={friendlinessRank}
				onChange={setCleanlinessRank}
			/>
			<RadioScale
				header="Please rate the cleanliness of your suite"
				minRank={1}
				maxRank={10}
				currentRank={cleanlinessRank}
				onChange={setFriendlinessRank}
			/>
			<div className="NextPageButtonContainer">
				<Button label="Next page" onClick={handleNext} />
			</div>
		</>
	);
};

const RadioScale = ({ header, minRank, maxRank, currentRank, onChange }) => {
	const options = [];
	for (let rank = minRank; rank <= maxRank; rank++) {
		options.push({
			label: rank,
			value: rank,
		});
	}
	const handleChange = (newRank) => onChange(parseInt(newRank));
	return (
		<RadioGroup
			label={header}
			options={options}
			selectedOptionValue={currentRank}
			onChange={handleChange}
		/>
	);
};
