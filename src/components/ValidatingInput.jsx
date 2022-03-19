import React, { useState } from 'react';
import { Input } from "antd";

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
			value={value}
			onChange={onChange}
			style={{
				width: 200,
				marginRight: "1rem",
				marginLeft: "1rem"
			}}
		/>
	);
}