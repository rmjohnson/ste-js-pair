import React from 'react';

export const CheckboxGroup = ({ header, options, updateOptions }) => {
	const checkboxes = options.map((option, index) => {
		const handleChange = (checked) => {
			const updatedOptions = [...options];
			updatedOptions[index] = { ...option, checked };
			updateOptions(updatedOptions);
		};
		return (
			<Checkbox
				key={option.value}
				checked={option.checked}
				onChange={handleChange}
				label={option.label}
				value={option.value}
			/>
		);
	});

	return (
		<div role="group" aria-label={header}>
			<h2>{header}</h2>
			{checkboxes}
		</div>
	);
};

const Checkbox = ({ checked, onChange, label, value }) => {
	return (
		<div>
			<label>
				<input type="checkbox" value={value} checked={checked} onChange={onChange} />
				{label}
			</label>
		</div>
	);
};
