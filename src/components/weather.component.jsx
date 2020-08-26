import React from 'react';

const minmaxTemp = (min, max) => {
  return (
    <h3>
      <span className="px-4">{min}&deg;</span>
      <span className="px-4">{max}&deg;</span>
    </h3>
  );
};

const Weather = () => {
  return (
    <div className="container">
      <div className="cards">
        <h1>London</h1>
        <h5 className="py-4">
          <i className="wi wi-day-sunny display-1"></i>
        </h5>
        <h1 className="py-2">25&deg;</h1>
        {minmaxTemp(19, 25)}
        <h4 className="py-3">Sunny Day</h4>
      </div>
    </div>
  );
};

export default Weather;
