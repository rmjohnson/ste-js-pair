import React from 'react';

export const RadioGroup = ({ label, onChange, options, selectedOptionValue }) => {
	return (
		<>
			<h2>{label}</h2>
			<div role="radiogroup" aria-label={label}>
				{options.map((o) => (
					<RadioOption
						key={o.label}
						optionValue={o.value}
						optionLabel={o.label}
						selected={selectedOptionValue === o.value}
						onChange={onChange}
					/>
				))}
			</div>
		</>
	);
};

const RadioOption = ({ optionValue, optionLabel, groupName, selected, onChange }) => {
	const handleChange = (e) => {
		onChange(e.target.value);
	};

	return (
		<label>
			<input
				type="radio"
				value={optionValue}
				onChange={handleChange}
				name={groupName}
				checked={selected}
			/>
			{optionLabel}
		</label>
	);
};
