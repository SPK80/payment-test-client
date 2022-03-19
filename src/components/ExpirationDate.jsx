import { DatePicker } from 'antd';
import React from 'react';
import './styles.css';

export function ExpirationDate({ onValid, onInvalid }) {
	return (
		<div>
			<span>Expiration Date</span>
			<DatePicker
				className='Field'
				onChange={(_, data) => {
					if (data === '')
						onInvalid()
					else
						onValid(data);
				}}
				format="MM/YYYY"
				picker="month"
			/>
		</div>
	);
}
