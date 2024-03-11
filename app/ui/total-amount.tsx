import { Button } from "./button";

export interface Props {
  tipAmount: string;
  totalAmount: string;
}

export default function TotalAmount({ props }: { props: Props }) {
  return (
    <div className="text-neutral-white">
      <div className="flex justify-between">
        <span>
          <p>Tip amount</p>
          <small className="text-neutral-dark-grayish-cyan">/ per person</small>
        </span>
        <span className="text-primary-strong-cyan text-3xl">${props.tipAmount}</span>
      </div>
      <div className="flex justify-between mt-6">
        <span>
          <p>Total</p>
          <small className="text-neutral-dark-grayish-cyan">/ per person</small>
        </span>
        <span className="text-primary-strong-cyan text-3xl">${props.totalAmount}</span>
      </div>
      <Button className="relative bottom-1">Reset</Button>
    </div>
  );
}
