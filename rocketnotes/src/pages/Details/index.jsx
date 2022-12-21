import { Container, Links, Content } from './styles';
import { useParams, useNavigate } from 'react-router-dom';
import { Tag } from "../../components/Tags";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useState, useEffect } from 'react';
import { api } from '../../services/api';


export function Details(){//todo componente tem começar com a letra Maiuscula 

  const [data, setData] = useState(null);
const params = useParams();
const navigate = useNavigate();


function handleBack(){
  navigate(-1);
}

async function handleRemove(){
  const confirm = window.confirm("Deseja realmente remover?");
  
  if( confirm ){
    await api.delete(`/notes/${params.id}`);
    navigate(-1);
  }
}


useEffect(() => {
  async function fetchNote(){
    const response = await api.get(`/notes/${params.id}`);
    setData(response.data);

  }
  fetchNote();
}, [])

  return(
    <Container>
    <Header/>

{
  data &&
    <main>
    <Content>

    <ButtonText 
    title="Excluir nota" 
    onClick={handleRemove} 
    />

    <h1>
      {data.title}
    </h1>
    <p>
      {  data.description}
       </p>

{
  data.links&&
    <Section title="Links úteis">
      <Links>
       {
        data.links.map(link => (

          <li key={String(link.id)}>
              <a href={link.url} target="_blank">
                {link.url}
              </a>
            
            </li>
        ))
        }

      </Links>

    </Section>

}
{
  data.tags &&
    <Section title="Marcadores">
      {
         data.tags.map(tags => (
            <Tag 
            key={String(tags.id)}
            title={tags.name}
            />
         ))
      }
    </Section>
}
    <Button 
      title="Voltar"
      onClick={handleBack} 
    />

    </Content>
    </main>
}
    </Container>
  );
}  