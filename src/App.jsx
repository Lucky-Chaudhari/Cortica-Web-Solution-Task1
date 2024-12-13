

 import { useState } from 'react'
 import './App.css'

function App() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculatePayment = () => {
    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate) / 100;
    const totalPayments = parseInt(loanTerm) * 12;

    if (annualRate > 0) {
      const totalPaid = principal * (1 + annualRate * (loanTerm));
      const interest = totalPaid - principal;
      setTotalInterest(interest.toFixed(2));
    } else {
      setTotalInterest("0.00");
    }
  };

  return (
    <div className="min-h-screen  bg-gray-500 flex items-center justify-center">
      <div className="bg-white border border-black shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Loan Calculator</h1>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Loan Amount:
          </label>
          <input
            className="  border-black  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Annual Interest Rate (%):
          </label>
          <input
            className="shadow appearance-none  border border-black  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            No Of Years:
          </label>
          <input
            className="shadow appearance-none  border border-black  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </div>

        <button
          onClick={calculatePayment}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Calculate
        </button>

        <h2 className="text-lg font-semibold text-gray-800 mt-6 text-center">
          Total Interest: <span className="text-green-600">{totalInterest}</span>
        </h2>
      </div>
    </div>
  );
}

export default App;
