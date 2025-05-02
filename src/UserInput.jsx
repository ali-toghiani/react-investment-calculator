import { useState } from "react";

export default function UserInput({ onUnserInputChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            value={userInput.initialInvestment}
            type="number"
            id="initial-investment"
            required
            onChange={(val) => onUnserInputChange('initialInvestment', val.target.value)}
          />
        </p>

        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            value={userInput.annualInvestment}
            type="number"
            id="annual-investment"
            required
            onChange={(val) => onUnserInputChange('annualInvestment', val.target.value)}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expected-return">expected-return</label>
          <input
            value={userInput.expectedReturn}
            type="number"
            id="expected-return"
            required
            onChange={(val) => onUnserInputChange('expectedReturn', val.target.value)}
          />
        </p>

        <p>
          <label htmlFor="duration">duration</label>
          <input
            value={userInput.duration||0}
            type="number"
            id="duration"
            required
            min={1}
            minLength={1}
            onChange={(val) => onUnserInputChange('duration', val.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
