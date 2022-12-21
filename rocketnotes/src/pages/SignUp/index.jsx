import { useState } from "react";
import { FiMail, FiLock, FiUser } from 'react-icons/fi'

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';
import { api } from "../../services/api"

import { Container, Form, Background } from "./styles";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    function handleSignUp() {
    if(!name || !email || !password){
       return  alert("Preencha todos os campos!")
    }

    api.post("/users",{ name, email, password })
    .then(() => { alert("Usuário cadastrado com sucesso! ");
    })
    .catch( error => {
    if(error.response){
        alert(error.response.data.message)
        }else{
            alert("Não foi possível cadastrar");
        }
        });
    }

    return (
        <Container>
            <Background />
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus Links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}

                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setpassword(e.target.value)}

                />

                <Button
                    title="Cadastrar"
                    onClick={handleSignUp}
                />

                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>

        </Container>
    )

}