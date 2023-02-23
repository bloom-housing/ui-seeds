import React from "react"
import CustomIcon from "../CustomIcon"

import MDXDocs from "./CustomIcon.docs.mdx"

export default {
  title: "Icons/Custom Icon",
  component: CustomIcon,
  parameters: {
    docs: {
      page: MDXDocs,
    },
  },
}

const customSVG = (
  <svg viewBox={"0 0 34 32"}>
    <path
      fill="#ecba16"
      d="M0 17.714c0 2.606 0.87 5.030 2.363 7.053-0.197 2.338-0.76 5.629-2.363 7.232 0 0 4.898-0.688 8.216-2.691 1.843 0.776 3.899 1.213 6.070 1.213 7.89 0 14.286-5.734 14.286-12.808s-6.397-12.808-14.286-12.808c-7.89 0-14.286 5.734-14.286 12.808z"
    ></path>
    <path
      fill="#dd691d"
      d="M33.142 12.808c0-7.074-6.397-12.808-14.286-12.808-5.698 0-10.614 2.99-12.907 7.317 2.347-1.515 5.224-2.41 8.336-2.41 7.89 0 14.286 5.734 14.286 12.808 0 2.706-0.938 5.214-2.536 7.282 3.2 1.546 7.107 2.098 7.107 2.098-1.603-1.603-2.166-4.896-2.363-7.232 1.491-2.022 2.363-4.446 2.363-7.053z"
    ></path>
  </svg>
)

export const customIconUsingSvg = () => (
  <div style={{ fontSize: "1.5em" }}>
    <CustomIcon icon={customSVG} /> Chat
  </div>
)
