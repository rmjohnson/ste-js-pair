import React, { useState } from 'react';
import { RadioGroup } from '../components/radio-group';
import { TextInput } from '../components/text-input';
import { CheckboxGroup } from '../components/checkbox-group';
import { Button } from '../components/button';

import './second.css';

const availableRacquetballQuestionOptions = [
	{ label: 'Racquets', value: 'racquets', checked: false },
	{ label: 'Safety Goggles', value: 'safety-goggles', checked: false },
	{ label: 'Racquetball Ball', value: 'racquetball-ball', checked: false },
];

export const Second = ({ checkedAmenities, submitPage }) => {
	const [poolAnswer, setPoolAnswer] = useState('');
	const [spaAnswer, setSpaAnswer] = useState(null);
	const [racquetballAnswers, setRacquetballAnswers] = useState(availableRacquetballQuestionOptions);
	const [lastFeedback, setLastFeedback] = useState('');

	const amenitiesQuestions = [];

	if (checkedAmenities.includes('pool')) {
		amenitiesQuestions.push(<PoolQuestion poolAnswer={poolAnswer} setPoolAnswer={setPoolAnswer} />);
	}

	if (checkedAmenities.includes('spa')) {
		amenitiesQuestions.push(<SpaQuestion spaAnswer={spaAnswer} setSpaAnswer={setSpaAnswer} />);
	}

	if (checkedAmenities.includes('spa')) {
		amenitiesQuestions.push(
			<RacquetballCourtQuestion
				racquetballBallCourtAnswers={racquetballAnswers}
				setRacquetballBallCourtAnswers={setRacquetballAnswers}
			/>
		);
	}

	const handleSubmit = () => {
		submitPage({
			poolAnswer,
			spaAnswer,
			racquetballAnswers: racquetballAnswers.filter((a) => a.checked).map((a) => a.value),
			lastFeedback,
		});
	};

	return (
		<div>
			{amenitiesQuestions}
			<TextInput label="Any last feedback?" value={lastFeedback} onChange={setLastFeedback} />
			<div className="SubmitButtonContainer">
				<Button label="Submit!" onClick={handleSubmit} />
			</div>
		</div>
	);
};

const PoolQuestion = ({ poolAnswer, setPoolAnswer }) => {
	return <TextInput label="How clean was the pool?" value={poolAnswer} onChange={setPoolAnswer} />;
};

const SpaQuestion = ({ spaAnswer, setSpaAnswer }) => {
	const options = [
		{ label: 'Too Cold', value: 'too-cold' },
		{ label: 'Just Right', value: 'just-right' },
		{ label: 'Too Hot', value: 'too-hot' },
	];
	return (
		<RadioGroup
			label="How hot was the spa?"
			onChange={setSpaAnswer}
			options={options}
			selectedOptionValue={spaAnswer}
			radioGroupName={'spa-heat'}
		/>
	);
};

const RacquetballCourtQuestion = ({
	racquetballBallCourtAnswers,
	setRacquetballBallCourtAnswers,
}) => {
	return (
		<CheckboxGroup
			header="Which of the following pieces of equipment were ready for you when you requested them?"
			options={racquetballBallCourtAnswers}
			updateOptions={setRacquetballBallCourtAnswers}
		/>
	);
};
