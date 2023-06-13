"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";

interface Props {
  title: string;
  disabled: boolean;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function CustomButton({
  title,
  disabled,
  containerStyles,
  handleClick,
}: Props) {
  return (
    <button
      disabled={disabled}
      type={"button"}
      className={`${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}
