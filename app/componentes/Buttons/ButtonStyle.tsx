import React from "react";
import {Button} from "@nextui-org/react";
import Link from "next/link";

export default function ButtonLog() {
  return (
    <Link href={"/presentacion"} className="bg-gradient-to-tr rounded-xl from-pink-500 to-gray-800 px-8 text-white shadow-lg">
      Clickea 
    </Link>
  );
}
