import axios from 'axios';
import { serverUrl } from './serverConfig.js';

export function postPayment(data) {
	return axios.post(serverUrl + '/api/payments', data)
}