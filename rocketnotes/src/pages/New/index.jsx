import { useState } from 'react';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

import { Container, Form } from './styles';

export function New(){
const [ title, setTitle] = useState("");
const [ description, setDescription] = useState("");


const [links, setLinks] = useState([]);
const [newLink, setNewLink] = useState([""]);

const [tags, setTags] = useState([]);
const [newTag, setNewTag] = useState([""]);


const Navigate =useNavigate();


function handleAddLink(){
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
}

function handleRemoveLink(Deleted){
    setLinks(prevState => prevState.filter(link => link !== Deleted));

}

function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
}

function handleRemoveTag(Deleted){
    setTags(prevState => prevState.filter(tag => tag !== Deleted));
}

async function handNewNote(){
    if(!title){
        alert("Digite o título da nota");
    }
    
    if(newLink){
        return alert(`Você deixou um Link no campo para adicionar, 
        mas nao clickou para adicionar. Clique para adicionar ou
        deixe o campo vazio.`);
    }
    
    if(newTag){
        return alert(`Você deixou uma tag no campo para adicionar, 
        mas nao clickou para adicionar. Clique para adicionar ou
        deixe o campo vazio.`);
    }



await api.post("/notes",{
title,
description,
tags,
links
});
alert("Nota criada com sucesso!");
Navigate("/");

}


    return(
        <Container>
            <Header />
        <main>
            <Form>
                <header>
                    <h1>Cria nota</h1>
                    <Link to="/">Voltar</Link>
                </header>

                <Input 
                placeholder="Título" 
                onChange={e => setTitle(e.target.value)}
                />

                <TextArea 
                placeholder="Observações"
                onChange={e => setDescription(e.target.value)}
                />
                
            
            <Section title="Links úteis" >
            {
                links.map((link, index) =>(
                    <NoteItem  
                    key={String(index)}
                    value={link}
                    onClick={() => handleRemoveLink(link)} 
                    />
                ))
            }

            <NoteItem  
            isNew 
            placeholder="Novo link"
            value={newLink}
            onChange={ e => setNewLink(e.target.value) }
            onClick={ handleAddLink } 
            />

            </Section>

            <Section title="Marcadores" >
                <div className="tags">
                    {
                        tags.map((tag, index) =>(
                            <NoteItem 
                            key={String(index)}
                            value={tag}
                            onClick={() => handleRemoveTag(tag)}
                            />
                        ))
          }

            <NoteItem  
            isNew 
            placeholder="Nova tag" 
            onChange={ e => setNewTag(e.target.value) }
            value={newTag}
            onClick={ handleAddTag }
            />
                </div>
            </Section>
                <Button 
                title="Salvar"
                onClick={ handNewNote } 
                />
            </Form>
        </main>
        </Container>
    )
}