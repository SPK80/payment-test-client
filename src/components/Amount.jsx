import { InputNumber } from 'antd';
import React from 'react';

export function Amount({ onValid, onInvalid }) {

	return (
		<div>
			<span>Amount</span>
			<InputNumber
				defaultValue={0}
				min={0}
				controls={false}
				onChange={(v) => {
					if (v > 0) onValid(v)
					else onInvalid();
				}}
				style={{
					width: 200,
					marginRight: "1rem",
					marginLeft: "1rem"
				}}
			/>
		</div>
	);
}