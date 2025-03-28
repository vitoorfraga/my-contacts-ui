import { LucideEdit } from "lucide-react"
import { Card, Container, Header, ListContainer } from "./styles"
import { LucideArrowUp } from "lucide-react"
import { LucideTrash } from "lucide-react"

export const ContactsList = () => {
  return (
    <Container>
      <Header>
        <strong> 3 Contatos </strong>

        <a href="">Novo Contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            Nome
            <LucideArrowUp />
          </button>
        </header>


        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Vitor Fraga</strong>
              <small>instagram</small>
            </div>
            <span>vitor@gmail.com</span>
            <span>11970435347</span>
          </div>

          <div className="actions">
            <a href="">
              <LucideEdit />
            </a>

            <button>
              <LucideTrash />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Vitor Fraga</strong>
              <small>instagram</small>
            </div>
            <span>vitor@gmail.com</span>
            <span>11970435347</span>
          </div>

          <div className="actions">
            <a href="">
              <LucideEdit />
            </a>

            <button>
              <LucideTrash />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Vitor Fraga</strong>
              <small>instagram</small>
            </div>
            <span>vitor@gmail.com</span>
            <span>11970435347</span>
          </div>

          <div className="actions">
            <a href="">
              <LucideEdit />
            </a>

            <button>
              <LucideTrash />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  )
}