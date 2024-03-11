import { Button } from "./button";
import { Input } from "./input";

export default function BillForm() {
  return (
    <>
      <label htmlFor="amount">Bill</label>
      <Input name="amount" type="number" placeholder="0" className="text-right"/>
      <label className="mt-8">Select tip %</label>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <Button>5%</Button> 
        <Button>10%</Button>
        <Button>15%</Button>
        <Button>25%</Button> 
        <Button>50%</Button>
        <Input name="cutsomTip" type="number" placeholder="Custom" className="h-auto text-center" />
      </div>
      <label htmlFor="people" className="mt-8">Number of people</label>
      <Input name="numberOfPeople" type="number" placeholder="0" className="text-right"/>
    </>
  );
}
