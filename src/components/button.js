import React from 'react';

export const Button = ({ label, onClick, disabled }) => {
	const handleClick = (e) => {
		onClick();
	};

	return (
		<button onClick={handleClick} disabled={disabled}>
			{label}
		</button>
	);
};
