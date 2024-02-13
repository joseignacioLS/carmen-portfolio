"use client";

import React, { ReactNode } from "react";
import "../i18n/i18n";

interface IProps {
  children: ReactNode;
}
const I118nWrapper = ({ children }: IProps) => {
  return <>{children}</>;
};

export default I118nWrapper;
