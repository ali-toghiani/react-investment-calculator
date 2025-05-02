import { useState } from "react";

const defaultInput = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 12,
};
export default function UserInput({ onUnserInputChange }) {
  const [inputValue, inputChange] = useState(defaultInput);

  function setInitial(event) {
    inputChange((prev) => ({
      ...prev,
      initialInvestment: event.target.value,
    }));
    onUnserInputChange(inputValue);
  }
  function setAnnual(event) {
    inputChange((prev) => ({
      ...prev,
      annualInvestment: event.target.value,
    }));
    onUnserInputChange(inputValue);
  }
  function setReturn(event) {
    inputChange((prev) => ({
      ...prev,
      expectedReturn: event.target.value,
    }));
    onUnserInputChange(inputValue);
  }
  function setDuration(event) {
    inputChange((prev) => ({
      ...prev,
      duration: event.target.value,
    }));
    onUnserInputChange(inputValue);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            value={inputValue.initialInvestment}
            type="number"
            id="initial-investment"
            required
            onChange={(val) => setInitial(val)}
          />
        </p>

        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            value={inputValue.annualInvestment}
            type="number"
            id="annual-investment"
            required
            onChange={(val) => setAnnual(val)}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expected-return">expected-return</label>
          <input
            value={inputValue.expectedReturn}
            type="number"
            id="expected-return"
            required
            onChange={(val) => setReturn(val)}
          />
        </p>

        <p>
          <label htmlFor="duration">duration</label>
          <input
            value={inputValue.duration}
            type="number"
            id="duration"
            required
            onChange={(val) => setDuration(val)}
          />
        </p>
      </div>
    </section>
  );
}
