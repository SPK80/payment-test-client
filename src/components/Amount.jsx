import { InputNumber } from 'antd';
import React from 'react';
import './styles.css';

export function Amount({ onValid, onInvalid }) {

	return (
		<div>
			<span>Amount</span>
			<InputNumber
				className='Field'
				defaultValue={0}
				min={0}
				controls={false}
				onChange={(v) => {
					if (v > 0) onValid(v)
					else onInvalid();
				}}
			/>
		</div>
	);
}