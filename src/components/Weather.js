import React from "react";

const Weather = props => {
  return (
    <div>
      <div>
        {props.city && <p>City: {props.city} </p>}
        {props.country && <p>Country: {props.country} </p>}
        {props.temperature && <p>Temperatur: {props.temperature} </p>}
        {props.min_temp && <p>Today's Minimum Temperature {props.min_temp} </p>}
        {props.max_temp && <p>Today's Maximum Temperature {props.max_temp} </p>}
        {props.humidity && <p>Humidity {props.humidity} </p>}
        {props.description && <p>Conditions: {props.description} </p>}
        {props.error && <p> {props.error} </p>}
      </div>
    </div>
  );
};

export default Weather;
