import 'antd/dist/antd.css';
import { Button } from "antd";
import { CardNumber } from "./components/CardNumber";
import { ExpirationDate } from './components/ExpirationDate';
import { CVV } from './components/CVV';
import { Amount } from './components/Amount';
import { useState } from 'react';
import './components/styles.css';
import { postPayment } from './serverApi';

// { "CardNumber": '0000000000000000', ExpDate: '04/2022', Cvv: '123', Amount: 100 }
// { "RequestId": '61b248040041bc64b411a691', Amount: 100 }

function App() {

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

	const [paymentData, setPaymentData] = useState({});
	const [payAvail, setPayAvail] = useState(false)
	const [sending, setSending] = useState(false)

	return (
		<div className="App">
			<CardNumber
				onValid={validCardNumber => {
					// console.log('CardNumberValid');
					setPaymentData({ ...paymentData, CardNumber: validCardNumber });
					setPayAvail(paymentData.Cvv && paymentData.ExpDate && paymentData.Amount);
				}}
				onInvalid={() => {
					// console.log('CardNumberInValid');
					setPaymentData({ ...paymentData, CardNumber: '' })
					setPayAvail(false);
				}}
			/>
			<ExpirationDate
				onValid={validDate => {
					// console.log('ExpirationDateValid');
					setPaymentData({ ...paymentData, ExpDate: validDate });
					setPayAvail(paymentData.CardNumber && paymentData.Cvv && paymentData.Amount);
				}}
				onInvalid={() => {
					// console.log('ExpirationDateInvalid');
					setPaymentData({ ...paymentData, ExpDate: '' })
					setPayAvail(false);
				}}
			/>
			<CVV
				onValid={validCvv => {
					// console.log('CVVValid');
					setPaymentData({ ...paymentData, Cvv: validCvv });
					setPayAvail(paymentData.CardNumber && paymentData.ExpDate && paymentData.Amount);
				}}
				onInvalid={() => {
					// console.log('CVVInvalid');
					setPaymentData({ ...paymentData, Cvv: '' })
					setPayAvail(false);
				}}
			/>
			<Amount
				onValid={validAmount => {
					// console.log('AmountValid');
					setPaymentData({ ...paymentData, Amount: validAmount });
					setPayAvail(paymentData.CardNumber && paymentData.ExpDate && paymentData.Cvv);
				}}
				onInvalid={() => {
					// console.log('AmountInvalid');
					setPaymentData({ ...paymentData, Amount: '' })
					setPayAvail(false);
				}}
			/>

			<Button
				className='Button'
				disabled={!payAvail}
				type="primary"
				loading={sending}
				onClick={() => sendData(paymentData)}
			>
				оплатить
			</Button>
		</div>
	);
}

export default App;