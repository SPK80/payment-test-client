import React from 'react';
import { ValidatingInputContainer } from "./ValidatingInput";

export function Amount({ onValid, onInvalid }) {

	function isValid(number) {
		return String(number).length > 0;
	}

	return (
		<div>
			<span>Amount</span>
			<ValidatingInputContainer
				isValidValue={isValid}
				onValidValue={onValid}
				onInvalidValue={onInvalid}
				isValidChar={char => !isNaN(Number(char))}
			/>
		</div>
	);
}