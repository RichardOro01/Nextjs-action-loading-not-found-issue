"use client"; //needed to bug

import React from "react";
import Link from "next/link";
import { getAction } from "./action";

async function NotFound() {
  const action = await getAction(); //needed to bug
  console.log(action);
  return <Link href="/">Go to Home</Link>;
}

export default NotFound;
