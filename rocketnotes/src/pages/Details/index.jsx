import { Container, Links, Content } from './styles';
import { Tag } from "../../components/Tags";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";


export function Details(){//todo componente tem começar com a letra Maiuscula 

  return(
    <Container>
    <Header/>

    <main>
    <Content>

    <ButtonText title="Escluir nota" isActive/>
    <h1>Introdução ao React</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Autem voluptatum dignissimos animi alias ea maiores, atque, 
       mollitia tempore ut similique suscipit eveniet velit illo fuga 
       expedita a veniam distinctio dolorum.</p>


    <Section title="Links úteis">
      <Links>
        <li><a href="#">https://react-icons.github.io/react-icons/</a></li>
        <li><a href="#">https://react-icons.github.io/react-icons/</a></li>
      </Links>

    </Section>

    <Section title="Marcadores">
      <Tag title="express"/>
      <Tag title="nodejs"/>
    </Section>

    <Button title="Voltar" />
    </Content>
    </main>
    </Container>
  );
}  