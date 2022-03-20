import { Card } from 'antd';
import 'antd/dist/antd.css';
import { PaymentForm } from './components/PaymentForm';
import './App.css';

function App() {
	return (
		<div className="App">
			<Card className='Card'>
				<PaymentForm />
			</Card>
		</div>
	);
}

export default App;