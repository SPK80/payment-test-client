import 'antd/dist/antd.css';
import { Button } from "antd";
import { CardNumber } from "./components/CardNumber";
import { ExpirationDate } from './components/ExpirationDate';
import { CVV } from './components/CVV';
import { Amount } from './components/Amount';
import { useState } from 'react';
import './components/styles.css';
import { postPayment } from './serverApi';
import { PaymentForm } from './components/PaymentForm';

function App() {
	return (
		<div className="App">
			<PaymentForm />
		</div>
	);
}

export default App;