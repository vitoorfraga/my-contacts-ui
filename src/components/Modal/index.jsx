import PropTypes from "prop-types"
import { Button } from "../Button"
import { Container, Footer, Overlay } from "./styles"
import { createPortal } from 'react-dom';

export const Modal = ({ danger }) => {

  return createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Titulo</h1>
        <p>Corpo do modal</p>

        <Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>

          <Button type="button" danger={danger}>
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>
  , document.getElementById("modal-root"));
}

Modal.propTypes = {
  danger: PropTypes.bool
}

Modal.defaultProps = {
  danger: false
}