import { LucideEdit } from "lucide-react";
import {
  Card,
  Container,
  Header,
  InputSearchContainer,
  ListContainer,
} from "../../pages/Home/styles";
import { LucideArrowUp } from "lucide-react";
import { LucideTrash } from "lucide-react";
import { Link } from "react-router-dom";
import { Modal } from "../../components/Modal";
import { Loader } from "../../components/Loader";

export default function Home() {
  return (
    <Container>
      {/* <Modal danger /> */}
      {/* <Loader /> */}
      <InputSearchContainer>
        <input placeholder="Pesquisar contato" />
      </InputSearchContainer>

      <Header>
        <strong> 3 Contatos </strong>

        <Link to="/new">Novo Contato</Link>
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
            <Link to="/edit/123">
              <LucideEdit />
            </Link>

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

      {/* <Modal danger /> */}
      {/* <Loader /> */}
    </Container>
  );
}
