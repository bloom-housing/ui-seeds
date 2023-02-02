import React from "react";

export const Swatch = (props: { color: string, border?: boolean, label?: string }) => (
  <div className="inline-block text-center">
    <span
      style={{ backgroundColor: `var(--${props.color})` }}
      title={props.color}
      className={`w-9 rounded-sm block ${props.border ? "border border-gray-500" : ""}`}
    >
      &nbsp;
    </span>
    {props.label && <span>{props.label}</span>}
  </div>
);
