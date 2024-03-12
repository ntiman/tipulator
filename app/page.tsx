'use client';

import SplitterLogo from "./ui/splitter-logo";
import BillForm from "./ui/bill-form";
import TotalAmount from "./ui/total-amount";
import { useState } from "react";

export default function Page() {
  const [total, setTotal] = useState({totalPerPerson: 0, tipTotalPerPerson: 0});

  function updateTotal(value: {totalPerPerson: number, tipTotalPerPerson: number}): void {
    setTotal(value);
    console.log('Ipdateing total state to -> ', value);
  }

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-center justify-center rounded-lg p-4 md:h-52">
        <SplitterLogo />
      </div>
      <div className="flex justify-center mt-6 p-6">
        <div className="flex lg:flex-row flex-col xl:basis-3/4 p-6 gap-5 rounded-3xl bg-neutral-white">
          <div className="flex basis-2/4 flex-col p-4 rounded-xl">
            <BillForm callback={updateTotal}/>
          </div>
          <div className="flex basis-2/4 flex-col p-8 pt-10 rounded-xl bg-neutral-very-dark-cyan">
            <TotalAmount props={total}/>
          </div>
        </div>
      </div>
    </main>
  );
}
