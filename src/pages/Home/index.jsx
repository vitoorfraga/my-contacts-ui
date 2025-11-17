import { LucideEdit } from "lucide-react";
import {
  Card,
  Container,
  Header,
  InputSearchContainer,
  ListContainer,
  ListHeader,
} from "../../pages/Home/styles";
import { LucideArrowUp } from "lucide-react";
import { LucideTrash } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { LucideArrowDown } from "lucide-react";
import { useMemo } from "react";
import { Loader } from "../../components/Loader";
import { delay } from "../../utils/delay";

export default function Home() {

  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [contacts, searchTerm]);



  useEffect(() => {

    setIsLoading(true);

    const loadContacts = async () => {

      try {
        const response = await fetch(`http://localhost:3000/contacts?orderBy=${orderBy}`);

        await delay(1000);

        const data = await response.json();

        setContacts(data);
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false);
      }
    }

    loadContacts()
  }, [orderBy]);

  const handleToggleOrderBy = () => {
    setOrderBy((prevOrderBy) => (prevOrderBy === "asc" ? "desc" : "asc"));
  }

  const handleChangeSearchTerm = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  }

  console.log(filteredContacts)

  return (
    <Container>
      <InputSearchContainer>
        <input placeholder="Pesquisar contato" value={searchTerm} onChange={handleChangeSearchTerm} />
      </InputSearchContainer>

      <Header>

        <strong>
          {filteredContacts.length}{" "}
          {filteredContacts.length === 1 ? 'Contato' : 'Contatos'}
        </strong>

        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        {filteredContacts.length > 0 && (
          <ListHeader orderBy={orderBy}>
            <button type="button" onClick={handleToggleOrderBy}>
              Nome
              <LucideArrowDown className="icon" />
            </button>
          </ListHeader>
        )}

        {filteredContacts.map((contact) => (
          <Card key={contact.id}>
            <div className="info">
              <div className="contact-name">
                <strong>{contact.name}</strong>
                {contact.category_name && (
                  <small>{contact.category_name}</small>
                )}
              </div>
              <span>{contact.email}</span>
              <span>{contact.phone}</span>
            </div>

            <div className="actions">
              <Link to={`/edit/${contact.id}`}>
                <LucideEdit />
              </Link>

              <button>
                <LucideTrash />
              </button>
            </div>
          </Card>
        ))}

      </ListContainer>

      {/* <Modal danger /> */}
      <Loader isLoading={isLoading} />
    </Container>
  );
}
