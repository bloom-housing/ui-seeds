import React from "react";

export const Link = (props) => {
  return (
    <a href={props.href} style={{ color: "var(--link-color)" }}>
      {props.children}
    </a>
  );
};
