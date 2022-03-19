import { DatePicker } from 'antd';
import React from 'react';

export function ExpirationDate({ onValid, onInvalid }) {
	return (
		<div>
			<span>Expiration Date</span>
			<DatePicker
				onChange={(_, data) => {
					if (data == '')
						onInvalid()
					else
						onValid(data);
				}}
				format="MM/YYYY"
				picker="month"
				style={{
					width: 200,
					marginRight: "1rem",
					marginLeft: "1rem"
				}}
			/>
		</div>
	);
}
