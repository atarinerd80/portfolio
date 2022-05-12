import axios from 'axios';

class WeatherService {
    static async getCurrentWeather(location) {
        const options = {
            url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
            params: {q: location},
            headers: {
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
                'X-RapidAPI-Key': 'a3ff3429b2msh5a00bca37296da5p1028f2jsnce10af50ba10'
            }
            };
        
            try {
                const res = await axios.get(options.url, { headers: options.headers, params: options.params  });
                console.log(res.data);
                return res.data;
            } catch (error) {
                console.log(error);
            }
    }
}
export default WeatherService;