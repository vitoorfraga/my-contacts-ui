import { createPortal } from "react-dom"

import { Overlay } from "./styles"

export const Loader = () => {
  return createPortal(
    <Overlay>
      Carregando
    </Overlay>, 
    document.getElementById("loader-root")
  )
}