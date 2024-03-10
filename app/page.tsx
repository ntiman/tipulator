import SplitterLogo from "./ui/splitter-logo";
import BillForm from "./ui/bill-form";
import TotalAmount from "./ui/total-amount";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-center justify-center rounded-lg p-4 md:h-52">
        <SplitterLogo />
      </div>
      <div className="flex flex-row justify-center mt-6 bg-neutral-very-dark-cyan p-6">
        <div className="basis-3/4 p-4 bg-neutral-white">
          <div className="bg-primary-strong-cyan">
            <BillForm />
          </div>
          <div className="bg-neutral-grayish-cyan">
            <TotalAmount />
          </div>
        </div>
      </div>
    </main>
  );
}
