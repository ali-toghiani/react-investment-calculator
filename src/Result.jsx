import { useState } from "react";
import { formatter, calculateInvestmentResults } from "./util/investment";
export default function Result({ userInput }) {
  const resultsList = calculateInvestmentResults(userInput);
  const { valueEndOfYear, interest, annualInvestment } = resultsList[0];
  const initialInvestment = valueEndOfYear - interest - annualInvestment;

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
        {resultsList.map((data, index) => {
          const totalIntereset = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
          const totalAmountInvested = data.valueEndOfYear - totalIntereset;
          return (
          <tr key={index}>
            <td scope="row">{data.year}</td>
            <td scope="row">{formatter.format(data.valueEndOfYear)}</td>
            <td scope="row">{formatter.format(data.interest)}</td>
            <td scope="row">{formatter.format(totalIntereset)}</td>
            <td scope="row">{formatter.format(totalAmountInvested)}</td>
          </tr>
        )})}
      </tbody>
    </table>
  );
}
