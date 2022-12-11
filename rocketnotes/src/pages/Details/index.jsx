// import { Fragment } from "react"       <fragment>    

import { Container, Links } from './styles';
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";


export function Details(){//todo componente tem começar com a letra Maiuscula 

  return(
    <Container>
    <Header/>
    <Section title="Links úteis">
      <Links>
        <li><a href="#">https://react-icons.github.io/react-icons/</a></li>
        <li><a href="#">https://react-icons.github.io/react-icons/</a></li>
      </Links>

    </Section>

    <Button title="Voltar" />

    </Container>
  )
}  