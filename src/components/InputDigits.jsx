import React from 'react';
import { Input } from "antd";

export function InputDigits(params) {

	function isValidNumber(char) {
		return char >= '0' && char <= '9'
	}

	return (
		<Input
			{...params}
			onChange={e => {
				if (!isValidNumber(e.nativeEvent.data)) return;
				params.onChange(e)
			}}
		/>
	)
}