import axios from 'axios';

// Covid API URL
const url = 'https://covid19.mathdro.id/api';

// Fetch global data
export const fetchData = async () => {
    try {
        // Get the URL
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);

        // Return the data
        return { confirmed, recovered, deaths, lastUpdate};
        
    } catch (error) {
        
    }
}

// Fetch daily data
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        console.log(data);
    } catch (error) {
        
    }
}
