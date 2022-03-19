import React, { useState } from 'react';
import { Input } from "antd";
import './styles.css';

export function ValidatingInputContainer({ onValidValue, onInvalidValue, isValidValue, isValidChar }) {
	const [value, setValue] = useState('');
	return (
		<ValidatingInput
			value={value}
			onChange={e => {

				if (!isValidChar(e.nativeEvent.data)) return;
				setValue(e.target.value);

				if (isValidValue(e.target.value))
					onValidValue(e.target.value);
				else
					onInvalidValue();
			}}
		/>
	)
}

function ValidatingInput({ value, onChange }) {
	return (
		<Input
			className='Field'
			value={value}
			onChange={onChange}
		/>
	);
}