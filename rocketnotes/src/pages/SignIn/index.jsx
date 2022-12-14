import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, Form, Background } from "./styles";

export function SignIn(){
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus Links úteis.</p>

                <h2>Faça Seu Login</h2>

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
                    title="Entrar"
                    />
                    
                    <Link to="/register">
                        Criar Conta
                    </Link>
            </Form>

<Background />
        </Container>
    )

}