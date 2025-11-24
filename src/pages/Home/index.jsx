import { LucideEdit } from "lucide-react";
import {
  Card,
  Container,
  EmptyListContainer,
  ErrorContainer,
  Header,
  InputSearchContainer,
  ListContainer,
  ListHeader,
  SearchNotFoundContainer,
} from "../../pages/Home/styles";
import { LucideTrash } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { LucideArrowDown } from "lucide-react";
import { useMemo } from "react";
import { Loader } from "../../components/Loader";
import ContactsService from "../../services/ContactsService";
import { Frown } from "lucide-react";
import { Button } from "../../components/Button";
import { useCallback } from "react";
import { LucideSearchX } from "lucide-react";


export default function Home() {

  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [contacts, searchTerm]);



  const loadContacts = useCallback(async () => {
    setIsLoading(true);

    try {

      const contactsResponse = await ContactsService.listContacts(orderBy)

      setHasError(false);
      setContacts(contactsResponse);

    } catch (error) {
      setHasError(true);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts()
  }, [orderBy, loadContacts]);

  const handleToggleOrderBy = () => {
    setOrderBy((prevOrderBy) => (prevOrderBy === "asc" ? "desc" : "asc"));
  }

  const handleChangeSearchTerm = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  }


  return (
    <Container>
      <InputSearchContainer>
        <input placeholder="Pesquisar contato" value={searchTerm} onChange={handleChangeSearchTerm} />
      </InputSearchContainer>

      <Header hasError={hasError}>
        {
          (!hasError && contacts.length > 0) && (
            <strong>
              {filteredContacts.length}{" "}
              {filteredContacts.length === 1 ? 'Contato' : 'Contatos'}
            </strong>
          )
        }

        <Link to="/new">Novo Contato</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <Frown size={74} className="icon" />

          <div className="details">
            <strong className="error-msg">Ocorreu um erro ao obter os contatos!</strong>
            <Button type="button" onClick={loadContacts}>Tentar novamente</Button>
          </div>

        </ErrorContainer>
      )}

      {!hasError && (
        <>
          <ListContainer>
            {(contacts.length < 1 && !isLoading) && (
              <EmptyListContainer>

                <p>Você ainda não tem nenhum contato cadastrado! Clique no botão <strong>"Novo contato"</strong> à cima para cadastrar o seu primeiro!</p>
              </EmptyListContainer>
            )}
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


          {(contacts.length > 0 && filteredContacts.length < 1) && (
            <SearchNotFoundContainer>
              <div>
                <LucideSearchX size={34} />

              </div>
              <p>Nenhum resultado foi encontrado para <strong>{searchTerm}</strong></p>
            </SearchNotFoundContainer>

          )}
        </>
      )}

      {/* <Modal danger /> */}
      <Loader isLoading={isLoading} />
    </Container>
  );
}
