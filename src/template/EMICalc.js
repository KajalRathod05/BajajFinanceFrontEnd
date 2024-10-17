import React, { useState } from 'react';
import '.././style/EMICalc.css';

function EMICalc() {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const [interestAmount, setInterestAmount] = useState(null);

  const calculateEMI = (e) => {
    e.preventDefault();
    const P = parseFloat(principal);
    const r = parseFloat(interestRate) / (12 * 100);
    const n = parseInt(tenure);

    if (isNaN(P) || isNaN(r) || isNaN(n) || n <= 0) {
      alert('Please enter valid numbers');
      return;
    }

    const calculatedEMI = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(calculatedEMI.toFixed(2));

    const totalPayment = calculatedEMI * n;
    setTotalAmount(totalPayment.toFixed(2));

    const interestPaid = totalPayment - P;
    setInterestAmount(interestPaid.toFixed(2));
  };

  return (
    <div className="row" id="EMICalc">
      <div className="column">
        <div className="card">
          <h3>EMI Calculator</h3>
          <form onSubmit={calculateEMI}>
            <div>
              <label>
                Principal Amount:
                <input
                  type="number"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Annual Interest Rate (%):
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Loan Tenure (months):
                <input
                  type="number"
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                  required
                />
              </label>
            </div>
            <button type="submit">Calculate EMI</button>
          </form>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <h3>EMI Result</h3>
          {emi && (
            <>
              <p>Monthly EMI: ₹{emi}</p>
              <p>Interest Amount: ₹{interestAmount}</p>
              <p>Total Amount Payable: ₹{totalAmount}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default EMICalc;
