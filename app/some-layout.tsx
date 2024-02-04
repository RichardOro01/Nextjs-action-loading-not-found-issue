"use client";

import React, { useCallback, useEffect } from "react";
import { getAction } from "./action";

const SomeLayout = ({ children }: { children: React.ReactNode }) => {
  const fetchAction = useCallback(async () => {
    const action = await getAction(); //needed to bug
    console.log(action);
  }, []);
  useEffect(() => {
    fetchAction();
  }, [fetchAction]);
  return <div>{children}</div>;
};

export default SomeLayout;
