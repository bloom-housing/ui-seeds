import React, { useCallback, useEffect, useRef, useState } from "react"

/**
 * This hook lets components "escape" out of their position in the DOM and be
 * rendered at the `<body>` level (important for overlay-style components like
 * dialogs and toasts). It also handles ARIA live announcement when required,
 * and fires an event any time the ESC key is pressed to close the last
 * element in a portal stack (useful for nested drawers and, again, toasts).
 * 
 * @param portalId - unique id to represent the portal element (as child of `<body>`)
 * @param closeFn - function to call when ESC key is handled
 * @param liveAndAtomic - set to true for ARIA announcements
 */
export default function usePortal(
  portalId: string,
  closeFn: () => void,
  liveAndAtomic = false
): [
  React.MutableRefObject<Element | undefined>,
  (overlayEl: HTMLDivElement) => void,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] {
  const portalEl = useRef<Element>()
  const [mount, setMount] = useState(false)

  useEffect(() => {
    let el: HTMLElement | null = document.querySelector(`#${portalId}`)
    if (!el) {
      el = document.createElement("div")
      el.id = portalId
      if (liveAndAtomic) {
        el.ariaLive = "polite"
        el.ariaAtomic = "true"
      }
      document.body.append(el)

      document.body.addEventListener("keyup", (e: KeyboardEvent) => {
        if (e.key == "Escape") el?.lastElementChild?.dispatchEvent(new Event("seeds:close"))
      })
    }
    portalEl.current = el
    setMount(true)
  }, [portalEl])

  const componentRef = useCallback((el: HTMLDivElement) => {
    el?.addEventListener("seeds:close", () => closeFn())
  }, [])

  return [portalEl, componentRef, mount, setMount]
}
