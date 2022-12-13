import { FiMail, FiLock, FiUser } from 'react-icons/fi'

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, Form, Background } from "./styles";

export function SignUp(){
    return(
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
            />

            <Input
            placeholder="E-mail"
            type="text"
            icon={FiMail}
            />

            <Input
            placeholder="Senha"
            type="password"
            icon={FiLock}
            />

            <Button
            title="Cadastrar"
            />
            
            <a href="#">
                Voltar para o login
            </a>
            </Form>

        </Container>
    )

}