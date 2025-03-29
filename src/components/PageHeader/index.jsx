import { LucideArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import PropTypes from "prop-types";

export default function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <LucideArrowLeft />
        Voltar
      </Link>

      <h1>{title}</h1>
    </Container>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
}