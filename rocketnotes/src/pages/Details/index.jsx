// import { Fragment } from "react"       <fragment>    

import { Container } from './styles';
import { Button } from "../../components/Button";
export function Details(){//todo componente tem começar com a letra Maiuscula 

  return(
    <Container>
    <h1> Olá mundão </h1>
    <span>Bruno Eduardo</span>

    <Button title="Entrar" loading />
    <Button title="Cadastrar"/>
    <Button title="Voltar" />
    <Button title={10} />

    </Container>
  )
}  