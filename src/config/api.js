const API_URL = 'https://boards-api.greenhouse.io/v1/boards';
const TOKEN_FR = 'coveofr';
const TOKEN_EN = 'coveoen';

const fetchJobById = (jobId) => fetch(`${API_URL}/${TOKEN_EN}/jobs/${jobId}`).then(response => response.json());
const fetchJobs = () => fetch(`${API_URL}/${TOKEN_EN}/jobs`).then(response => response.json());

export {
	fetchJobs,
	fetchJobById,
	API_URL,
	TOKEN_EN,
	TOKEN_FR
};