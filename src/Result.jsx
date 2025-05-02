import { formatter } from "./util/investment";
export default function Result({ annualData = [] }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Investment Value</th>
          <th scope="col">Interest (Year)</th>
          <th scope="col">Total Interest</th>
          <th scope="col">Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {
          annualData.map( (data,index) => (
            <tr key={index}>
              <td scope="row">
                {data.year}
              </td>
              <td scope="row">
                {formatter.format(data.valueEndOfYear)}
              </td>
              <td scope="row">
                {formatter.format(data.interest)}
              </td>
              <td scope="row">
                {formatter.format(data.interest)}
              </td>
              <td scope="row">
                {formatter.format(data.annualInvestment)}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
