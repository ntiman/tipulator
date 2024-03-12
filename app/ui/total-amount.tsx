import { Button } from "./button";

export interface Props {
  totalPerPerson: number,
  tipTotalPerPerson: number
}

export default function TotalAmount({ props }: { props: Props }) {
  return (
    <div className="text-neutral-white">
      <div className="flex justify-between">
        <span>
          <p>Tip amount</p>
          <small className="text-neutral-dark-grayish-cyan">/ per person</small>
        </span>
        <span className="text-primary-strong-cyan text-3xl">${props.tipTotalPerPerson}</span>
      </div>
      <div className="flex justify-between mt-6">
        <span>
          <p>Total</p>
          <small className="text-neutral-dark-grayish-cyan">/ per person</small>
        </span>
        <span className="text-primary-strong-cyan text-3xl">${props.totalPerPerson}</span>
      </div>
      <Button className="relative bottom-1">Reset</Button>
    </div>
  );
}
