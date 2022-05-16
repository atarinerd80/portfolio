import React from 'react';
import WeatherService from '../services/WeatherService';
import WeatherCard from '../components/WeatherCard';

export class Weather extends React.Component {

  state = {
    weather: null,
    location: '',
    error: null
  }

  async componentDidMount() {
    const weather = await WeatherService.getCurrentWeather('San Francisco');
    this.setState({ weather: weather.data });
  }

  handleClick = async(e) => {
    e.preventDefault();
    const weather = await WeatherService.getCurrentWeather(this.state.location);
    if (weather.status !== 200) {
      this.setState({ weather: null, error: 'Unable to find location' });
    } else {
      this.setState({ weather: weather.data, error: null });
    }
  }

  handleChange = (e) => {
    this.setState({ location: e.target.value });
  }

  showError() {
    return (
      <div className="row text-center">
        <div className="col-md-12">
          <span className="error-code">{this.state.error}</span>
        </div>
      </div>
    );
  }

  render() {
    const { error, weather } = this.state
    return (
      <>
        <section id="weather">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-7 text-center">
                  <h3 className="font-alt letter-spacing-3 mb-0 text-extra-large-2 text-uppercase">API Weather Form</h3>
                  <span className="bg-pink mt-1 mx-auto sep-line-medium-thick"></span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                {error && this.showError()}
                <div className="row text-center">
                  <div className="col-md-12">
                    <p>Search for a location (City, Zip Code, Lat/Long)</p>
                    <form onSubmit={this.handleSubmit}>
                      <input type="text" name="location" onChange={this.handleChange} />  
                      <button onClick={this.handleClick}>Search</button>
                    </form>
                  </div>
                </div>
                <br />
                {weather && <WeatherCard weather={this.state.weather} />}
              </div>
              <div className="col-md-6">
                <div className="row text-center">
                  <div className="col-md-12">
                    <p>This Weather module was created to demonstrate calling an API within React using Axios. The class for the API call is shown below:</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card bg-light mb-3">
                      <pre>
                        {`
    import axios from 'axios';

    class WeatherService {
      static async getCurrentWeather(location) {
        const options = {
          url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
          params: {q: location},
          headers: {
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
            'X-RapidAPI-Key': 'API_PRIVATE_KEY'
            }
          };
      
          try {
            const res = await axios.get(
              options.url, 
              { headers: options.headers, params: options.params  }
            );
            return res;
          } catch (error) {
            return error.response;
          }
      }
    }
    export default WeatherService;`
                        }
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
export default Weather;