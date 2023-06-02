import axios from 'axios';
import { API_SERVER_URL } from './public-config';

export const FetchContestList = async () => {
    const res = await axios.get(`${API_SERVER_URL}/contests`);

    return res.data.contests;
};

export const FetchContest = async (contestId) => {
    const res = await axios.get(`${API_SERVER_URL}/contests/${contestId}`);

    return res.data.contest;
};

export const AddNewName = async ({ contestId, newNameValue }) => {
    const res = await axios.post(`${API_SERVER_URL}/contests/${contestId}`, {newNameValue} );

    return res.data.updatedContest;
};