import { FiPlus, FiSearch} from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { Container, Brand, Menu, Search, Content, NewNote} from './styles';
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';


export function Home(){
    const [search, setSearch] = useState("");
    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);
    const [notes, setNotes] = useState([]);
    
    const navigate = useNavigate();
    
    function hadleTagSelected(tagName){
        if(tagName === "all"){
            return setTagsSelected([])
        }
        const alreadySelected = tagsSelected.includes(tagName);
        if(alreadySelected){
            const filteredTags = tagsSelected.filter(tag => tag !== tagName);
            setTagsSelected(filteredTags);
        }else{
            setTagsSelected(prevState => [...prevState, tagName]);
        }

    }

    function hadleDetails(id){
        navigate(`/details/${id}`);
    }

    useEffect(() => {
        async function fetchTags(){
        const response = await api.get("/tags");
        setTags(response.data);
        }

        fetchTags();  
    },[])

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
        setNotes(response.data);
        }
        fetchNotes();
    }, [tagsSelected, search])


    return(
        <Container>
            <Brand>
            <h1>Rocketnotes</h1>
            </Brand>

            <Header />

        <Menu>
            <li><ButtonText 
            title="Todos" 
            onClick={() => hadleTagSelected("all")}
            isActive ={tagsSelected.length === 0 }
            />
             </li>
            {
                tags && tags.map(tag => (
                    <li key={String(tag.id)}>
                        <ButtonText 
                        title={tag.name} 
                        onClick={() => hadleTagSelected(tag.name)}
                        isActive ={tagsSelected.includes(tag.name)}
                        /> 
                    </li>
                ))

            }

         </Menu>

        <Search>
            <Input 
            placeholder="Pesquisar pelo título" 
            icon={FiSearch}
            onChange={ () => setSearch(e.target.value)}
            />
        </Search>

        <Content>
            <Section title="Minhas notas">
                {
                    notes.map(note => (
                    <Note 
                    key={String(note.id)}
                    data={note}
                    onClick={ () => hadleDetails(note.id)}
                    />
                    )) 
                }

            </Section>
        </Content>

        <NewNote to="/new">
        <FiPlus />
        Criar nota
        </NewNote>

        </Container>
    );
}