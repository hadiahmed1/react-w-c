import { useEffect, useState } from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo.js';
import './App.css'
import CurrencySellect from "./components/CurrencySelect.jsx";

function App() {
  const [toAmt, setToAmt] = useState(1);
  const [toCurr, setToCurr] = useState('inr');
  const [fromAmt, setFromAmt] = useState(1);
  const [fromCurr, setFromCurr] = useState('usd');

  const [currencyOption, setCurrencyOption] = useState({});

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
      .then(res => res.json())
      .then(res => setCurrencyOption(res))
  }, []);
  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurr}.json`)
            .then((res) => res.json())
            .then((exchangeRate) => {
              console.log(exchangeRate);
              setToAmt(fromAmt * exchangeRate[fromCurr][toCurr]);
            });

  },[fromAmt, fromCurr, toCurr])

  const exchangeRate = useCurrencyInfo(fromCurr);

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <div className='border-white border-4 rounded-xl p-10 flex flex-col gap-6'>
        <CurrencySellect
          label={"From"}
          amount={fromAmt}
          onAmountChange={setFromAmt}
          onCurrencyChange={setFromCurr}
          currencyOption={currencyOption}
          selectCurrency={fromCurr}
        />
        <CurrencySellect
          label={"To"}
          amount={toAmt}
          onCurrencyChange={setToCurr}
          currencyOption={currencyOption}
          selectCurrency={toCurr}
        />
      </div>
    </div>
  )
}

export default App
