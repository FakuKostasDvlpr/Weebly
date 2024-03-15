import React from "react";
import {Button} from "@nextui-org/react";
import Link from "next/link";

export default function ButtonLog() {
  return (
    <Link href={"/presentacion"} className="border-2 px-10 py-3 rounded-xl border-gray-800 bg-gray-600 text-white
      hover:border-dashed hover:border-purple-400 hover:bg-transparent font-bold hover:text-purple-700 duration-200
    ">
      Ingresa Ahora Mismo 
    </Link>
  );
}
