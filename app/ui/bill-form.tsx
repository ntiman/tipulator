"use client";

import { useEffect, useState } from "react";
import { Button } from "./button";
import { Input } from "./input";

// TODO: Replace any
export default function BillForm({ callback }: { callback: any }) {
  const [billAmount, setBillAmount] = useState<number>(0);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);

  // Watch udpates
  useEffect(() => {
    calculateTotal(billAmount, tipAmount, numberOfPeople);
  }, [billAmount, tipAmount, numberOfPeople]);

  // TODO: manage billAmount and numberOfPeople being returned as string (should be done in Input compoennts)
  function calculateTotal(
    billAmount: number,
    tipAmount: number,
    numberOfPeople: number
  ) {
    let totalTipAmount = billAmount * tipAmount;
    let totalTipAmountPerPerson = totalTipAmount / numberOfPeople;
    console.log('bill amount -> ', typeof(billAmount));
    console.log('totalTipAmount -> ', typeof(totalTipAmount));
    console.log('number of people -> ', typeof(numberOfPeople));
    let totalPerPerson = (totalTipAmount + +billAmount)/+numberOfPeople;
    callback({
      totalPerPerson: totalPerPerson,
      tipTotalPerPerson: totalTipAmountPerPerson,
    });
  }

  const updateBillAmount = (value: number) => {
    console.log("Updateing Bill Amount -> ", value);
    setBillAmount(value);
  };

  const updateTipAmount = (value: number) => {
    console.log("Updateing Tip Amount -> ", value);
    setTipAmount(value);
  };

  const updateNumberOfPeople = (value: number) => {
    console.log("Updating number of people -> ", value);
    setNumberOfPeople(value);
  };

  return (
    <>
      <label>Bill</label>
      <Input
        name="amount"
        type="number"
        placeholder="0"
        className="text-right"
        callback={updateBillAmount}
      />
      <label className="mt-8">Select tip %</label>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <Button callback={updateTipAmount} value={0.05}>
          5%
        </Button>
        <Button callback={updateTipAmount} value={0.1}>
          10%
        </Button>
        <Button callback={updateTipAmount} value={0.15}>
          15%
        </Button>
        <Button callback={updateTipAmount} value={0.25}>
          25%
        </Button>
        <Button callback={updateTipAmount} value={0.5}>
          50%
        </Button>
        <Input
          name="cutsomTip"
          type="number"
          placeholder="Custom"
          className="h-auto text-center"
          callback={setTipAmount}
        />
      </div>
      <label className="mt-8">Number of people</label>
      <Input
        name="numberOfPeople"
        type="number"
        placeholder="1"
        className="text-right"
        callback={updateNumberOfPeople}
      />
    </>
  );
}
