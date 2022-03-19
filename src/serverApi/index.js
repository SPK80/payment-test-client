import axios from 'axios';

export function postPayment(data) {
	return axios.post('http://localhost:8000/api/payments', data)
}