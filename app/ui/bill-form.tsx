export default function BillForm() {
  return (
    <div>
      <label htmlFor="amount">Amount</label>
      <input name="amount" type="number" placeholder="" required />
      <label>Tip amount %</label>
      <div></div>
      <label htmlFor="people">Number of people</label>
      <input name="people" type="number" placeholder="" required />
    </div>
  );
}
