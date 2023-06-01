import axios from 'axios';
import { API_SERVER_URL } from './public-config';

export const FetchContests = async() => {
    const res = await axios.get(`${API_SERVER_URL}/contests`);
    
    return res.data.contests;
}