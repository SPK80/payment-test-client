import React, { useState } from 'react';
import { Form, Button, DatePicker, Input } from 'antd';
import { postPayment } from '../serverApi';

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
			}))
			.catch(err => {
				console.error(err);
			})
			.finally(() => setSending(false));
	}

	const onFinish = (values) => {
		values.ExpDate = values.ExpDate.format('MM/YYYY');
		sendData(values);
	}

	return (
		<Form
			name="basic"
			labelCol={{
				span: 8,
			}}
			wrapperCol={{
				span: 16,
			}}
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
			autoComplete="off"
			onFieldsChange={(changedFields, allFields) => {
				if (changedFields[0].errors.length > 0) {
					setPayAvail(false);
				}
				else {
					const valid = allFields.reduce((allValid, field) => {
						return allValid && (field.touched && field.errors.length === 0)
					}, true);
					setPayAvail(valid);
				}
			}}
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
				<Input placeholder="Please input Card Number (16 digits)" />
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
				<Input placeholder="Please input CVV (3 digits)" />
			</Form.Item>

			<Form.Item
				name="Amount"
				label="Amount"
				rules={[
					{
						required: true,
					},
					{
						type: 'string',
						min: 1
					},
				]}
			>
				<Input placeholder="Please input Amount" />
			</Form.Item>

			<Form.Item
				wrapperCol={{
					offset: 8,
					span: 16,
				}}
			>
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