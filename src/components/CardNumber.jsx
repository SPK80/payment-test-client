import React from 'react';
import { ValidatingInputContainer } from "./ValidatingInput";

export function CardNumber({ onValid, onInvalid }) {

	function isValid(number) {
		return String(number).length === 16;
	}

	return (
		<div>
			<span>CardNumber</span>
			<ValidatingInputContainer
				isValidValue={isValid}
				onValidValue={onValid}
				onInvalidValue={onInvalid}
				isValidChar={char => !isNaN(Number(char))}
			/>
		</div>
	);
}