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
  // TODO: Check how to avoid using eslint-disable-next-line
  useEffect(() => {
    calculateTotal(billAmount, tipAmount, numberOfPeople);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [billAmount, tipAmount, numberOfPeople]);

  // TODO: manage billAmount and numberOfPeople being returned as string (should be done in Input compoennts)
  function calculateTotal(
    billAmount: number,
    tipAmount: number,
    numberOfPeople: number
  ) {
    let totalTipAmount = billAmount * tipAmount;
    let totalTipAmountPerPerson = totalTipAmount / numberOfPeople;
    let totalPerPerson = (totalTipAmount + +billAmount) / +numberOfPeople;
    callback({
      totalPerPerson: totalPerPerson,
      tipTotalPerPerson: totalTipAmountPerPerson,
    });
  }

  const updateBillAmount = (value: number) => {
    value ? setBillAmount(value) : setBillAmount(0);
  };

  const setCustomTipAmount = (value: number) => {
    value ? setTipAmount(value / 100) : setTipAmount(0);
  };

  const updateTipAmount = (value: number) => {
    value ? setTipAmount(value) : setTipAmount(0);
  };

  const updateNumberOfPeople = (value: number) => {
    value ? setNumberOfPeople(value) : setNumberOfPeople(1);
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
          callback={setCustomTipAmount}
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
