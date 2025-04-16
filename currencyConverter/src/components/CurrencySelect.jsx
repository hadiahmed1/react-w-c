const CurrencySellect = ({ label, amount, onAmountChange, onCurrencyChange, currencyOption = ['usd', 'inr','eur'], selectCurrency = 'usd' }) => {
    return (
        <div className="bg-white rounded-2xl text-black p-7">
            <div className="flex w-72 justify-between">
                <strong>{label}</strong>
                <strong>Currency Type</strong>
            </div>
            <form>
                <input id="amount" type="number" className="bg-slate-400" value={amount} onChange={e => onAmountChange && onAmountChange(Number(e.target.value))} />
                <select value={selectCurrency} onChange={e => onCurrencyChange && onCurrencyChange(e.target.value)}>
                    {Object.keys(currencyOption).map(currency => <option key={currency} value={currency}>{currencyOption[currency]}</option>)}
                </select>
            </form>
        </div>
    );
}
export default CurrencySellect;