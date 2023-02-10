import React from "react"

export const Swatch = (props: { color: string; border?: boolean; label?: string }) => (
  <div style={{ display: "inline-block", textAlign: "center" }}>
    <span
      style={{
        backgroundColor: `var(--${props.color})`,
        width: "var(--bloom-s6)",
        borderRadius: "var(--bloom-rounded-sm)",
        display: "block",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: props.border ? "var(--bloom-color-gray-500)" : "transparent",
      }}
      title={props.color}
    >
      &nbsp;
    </span>
    {props.label && <span>{props.label}</span>}
  </div>
)
