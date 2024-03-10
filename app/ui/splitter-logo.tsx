import Image from "next/image";

export default function SplitterLogo() {
  return (
    <div className="">
      <Image
        src="/images/logo.svg"
        width={87}
        height={54}
        className=""
        alt="logo"
      />
    </div>
  );
}
