import 'antd/dist/antd.css';
import React, { useState } from 'react';
import { Form, Button, DatePicker, InputNumber, message } from 'antd';
import { postPayment } from '../serverApi';
import { InputDigits } from './InputDigits.jsx';

// { "CardNumber": '0000000000000000', ExpDate: '04/2022', Cvv: '123', Amount: 100 }
// { "RequestId": '61b248040041bc64b411a691', Amount: 100 }

export function PaymentForm(params) {

	const [payAvail, setPayAvail] = useState(false)
	const [sending, setSending] = useState(false)

	function sendData(paymentData) {
		console.log(paymentData);
		setSending(true);
		postPayment(paymentData)
			.then((response => {
				console.log(response);
				message.success('Success', 1);
			}))
			.catch(err => {
				console.error(err);
				message.error('Something went wrong!', 2);
			})
			.finally(() => setSending(false));
	}

	const onFinish = (values) => {
		values.ExpDate = values.ExpDate.format('MM/YYYY');
		sendData(values);
	}

	function checkPayAvail(changedFields, allFields) {
		if (changedFields[0].errors.length > 0) {
			setPayAvail(false);
		}
		else {
			const allValid = allFields.reduce((validsAccum, field) =>
				(validsAccum && (field.touched && field.errors.length === 0))
				, true);
			setPayAvail(allValid);
		}
	}

	return (
		<Form
			name="payment"
			labelCol={{ span: 5 }}
			wrapperCol={{ span: 6 }}
			autoComplete="off"
			onFinish={onFinish}
			onFieldsChange={checkPayAvail}
		>
			<Form.Item
				name="CardNumber"
				label="Card Number"
				rules={[
					{
						required: true,
					},
					{
						type: 'string',
						min: 16,
						max: 16
					},
				]}
			>
				<InputDigits placeholder="Please input Card Number (16 digits)" />
			</Form.Item>

			<Form.Item
				name="ExpDate"
				label="Expiration Date"
				rules={[
					{
						type: 'object',
						required: true,
						message: 'Please select Expiration Date!',
					}]}
			>
				<DatePicker
					picker="month"
					format="MM/YYYY"
					placeholder="Please input Expiration Date"
				/>
			</Form.Item>

			<Form.Item
				name="Cvv"
				label="CVV"
				rules={[
					{
						required: true,
					},
					{
						type: 'string',
						min: 3,
						max: 3
					},
				]}
			>
				<InputDigits placeholder="Please input CVV (3 digits)" />
			</Form.Item>

			<Form.Item
				name="Amount"
				label="Amount"
				rules={[
					{
						required: true,
					},
					{
						type: 'number',
						min: 1
					},
				]}
			>
				<InputNumber
					min={1}
					placeholder="Please input Amount" />
			</Form.Item>

			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					disabled={!payAvail}
					loading={sending}
				>
					Отправить
				</Button>
			</Form.Item>
		</Form >
	)
}