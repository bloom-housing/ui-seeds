import React, { useState } from "react"
import LoadingState from "../LoadingState"

//import MDXDocs from "./Card.docs.mdx"

export default {
  title: "Overlays/Loading State",
  component: LoadingState,
  // parameters: {
  //   docs: {
  //     page: MDXDocs,
  //   },
  // },
}

export const LoadingContent = () => {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <label style={{ display: "block", marginBottom: "50px" }}>
        <input
          type="checkbox"
          checked={loading}
          onChange={() => {
            setLoading(!loading)
          }}
        />{" "}
        Loading
      </label>

      <LoadingState loading={loading}>
        <p>Content here.</p>

        <p>More content here.</p>
      </LoadingState>
    </>
  )
}
