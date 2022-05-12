import React from 'react';
import WeatherService from '../WeatherService';

export class TestClass extends React.Component {

  state = {
    weather: null,
    location: ''
  }

  async componentDidMount() {
    const weather = await WeatherService.getCurrentWeather('Rome');
    this.setState({ weather });
  }

  handleClick = async(e) => {
    e.preventDefault();
    const weather = await WeatherService.getCurrentWeather(this.state.location);
    this.setState({ weather });
  }

  handleChange = (e) => {
    this.setState({ location: e.target.value });
  }

  render() {
    if (this.state.weather == null) {
      return <></>;
    }

    return (
      <>
        <div className="row text-center">
          <div className="col-md-6 offset-md-3">

            <form onSubmit={this.handleSubmit}>
              <input type="text" name="location" onChange={this.handleChange} />  
              <button onClick={this.handleClick}>Search</button>
            </form>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-6 offset-md-3">
            <div className="card bg-light mb-3">
              <div className="card-header">Current Weather</div>
              <div className="card-body">
                <span>Location: {this.state.weather.location.name}, {((this.state.weather.location.country === 'USA' || this.state.weather.location.country === 'United States of America') ? this.state.weather.location.region + ', ' : '') }{this.state.weather.location.country}</span><br />
                <span>Temperature: {this.state.weather.current.temp_f}&deg;F</span><br />
                <span>Weather: {this.state.weather.current.condition.text}</span><br />
                <img src={this.state.weather.current.condition.icon} /><br />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default TestClass;