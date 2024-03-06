"use client";

import { faqs } from "@/data/faq";
import React from "react";

import FAQQuestion from "./FAQQuestion";

const page = () => {
  return (
    <>
      {faqs.map(({ question, answer }) => {
        return (
          <FAQQuestion key={question} question={question} answer={answer} />
        );
      })}
    </>
  );
};

export default page;
