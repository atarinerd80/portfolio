import React from "react";

export class WeatherCard extends React.Component {
    render() {
        const { location, current } = this.props.weather;

        return (
            <>
            <div className="row text-center">
                <div className="col-md-12">
                <div className="card bg-light mb-3">
                    <div className="card-header">Current Weather</div>
                    <div className="card-body">
                    <span>Location: {location.name}, {((location.country === 'USA' || location.country === 'United States of America') ? location.region + ', ' : '') }{location.country}</span><br />
                    <span>Temperature: {current.temp_f}&deg;F</span><br />
                    <span>Weather: {current.condition.text}</span><br />
                    <img src={current.condition.icon} /><br />
                    </div>
                </div>
                </div>
            </div>
            </>
        );
    }
}
export default WeatherCard;