import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex gap-x-2 items-center">
      <Image
        height={80}
        width={130}
        alt="Nucba"
        src="/nucba-logo.png"
        className="w-5"
      />
      <span className="font-semibold">NUCBA</span>
    </div>
  );
};
