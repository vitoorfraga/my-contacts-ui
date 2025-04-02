import { createPortal } from "react-dom"

import { Overlay } from "./styles"

export const Loader = () => {
  return createPortal(
    <Overlay>
      <div className="loader" />
    </Overlay>, 
    document.getElementById("loader-root")
  )
}