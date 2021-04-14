import React from 'react';

export const TextInput = ({ label, value, onChange }) => {
	const handleChange = (e) => {
		onChange(e.target.value);
	};

	return (
		<div>
			<label>
				{label}
				<br />
				<input type="text" value={value} onChange={handleChange} />
			</label>
		</div>
	);
};
