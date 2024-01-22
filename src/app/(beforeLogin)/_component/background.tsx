import Image from "next/image";
import React from "react";

export default function Background() {
  return (
    <Image
      className="hero h-80vh opacity-60 absolute"
      src={"/background.png"}
      alt={"background"}
      width={500}
      height={500}
    />
  );
}
