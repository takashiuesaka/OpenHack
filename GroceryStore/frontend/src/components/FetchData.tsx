import React, { useEffect, useState } from 'react';

export const FetchData: React.VFC = () => {

  type Forecast = {
    id: number,
    date: Date,
    temperatureC: number,
    temperatureF: number,
    summary: string
  }
  const [forecasts, setForecasts] = useState<Forecast[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      await populateWeatherData();
    })();
  }, [])

  async function populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    setForecasts(data)
    setLoading(false)
  }

  const renderForecastsTable = (forecasts: Forecast[]) => {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.id}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  let contents = loading
    ? <p><em>Loading...</em></p>
    : renderForecastsTable(forecasts);


  return (
    <div>
      <h1 id="tabelLabel" >Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>
      {contents}
    </div>
  );
}

// export class FetchData extends Component {
//   static displayName = FetchData.name;

//   constructor(props) {
//     super(props);
//     this.state = { forecasts: [], loading: true };
//   }

//   componentDidMount() {
//     this.populateWeatherData();
//   }

//   static renderForecastsTable(forecasts) {
//     return (
//       <table className='table table-striped' aria-labelledby="tabelLabel">
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Temp. (C)</th>
//             <th>Temp. (F)</th>
//             <th>Summary</th>
//           </tr>
//         </thead>
//         <tbody>
//           {forecasts.map(forecast =>
//             <tr key={forecast.date}>
//               <td>{forecast.date}</td>
//               <td>{forecast.temperatureC}</td>
//               <td>{forecast.temperatureF}</td>
//               <td>{forecast.summary}</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     );
//   }

//   render() {
//     let contents = this.state.loading
//       ? <p><em>Loading...</em></p>
//       : FetchData.renderForecastsTable(this.state.forecasts);

//     return (
//       <div>
//         <h1 id="tabelLabel" >Weather forecast</h1>
//         <p>This component demonstrates fetching data from the server.</p>
//         {contents}
//       </div>
//     );
//   }

//   async populateWeatherData() {
//     const response = await fetch('weatherforecast');
//     const data = await response.json();
//     this.setState({ forecasts: data, loading: false });
//   }
// }
