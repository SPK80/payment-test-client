import React from 'react';
import { ValidatingInputContainer } from "./ValidatingInput";

export function CVV({ onValid, onInvalid }) {

	function isValid(number) {
		return String(number).length === 3;
	}

	return (
		<div>
			<span>CVV</span>
			<ValidatingInputContainer
				isValidValue={isValid}
				onValidValue={onValid}
				onInvalidValue={onInvalid}
				isValidChar={char => !isNaN(Number(char))}
			/>
		</div>
	);
}