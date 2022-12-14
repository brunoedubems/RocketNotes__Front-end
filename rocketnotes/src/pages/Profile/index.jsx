import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Avatar } from './styles';

export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/">
                <FiArrowLeft />
                </Link>
            </header>

        <Form>
            <Avatar>
                <img 
                src="https://github.com/brunoedubems.png"  
                alt="Foto do usuário" 
                />

                <label htmlFor="avatar">
                    <FiCamera />

                    <input 
                    id="avatar" 
                    type="file"
                    />
                    
                </label>
            </Avatar>

            <Input
            placeholder="Nome"
            Type="text"
            icon={FiUser}
            />

            <Input
            placeholder="E-mail"
            Type="text"
            icon={FiMail}
            />

            <Input
            placeholder="Senha atual"
            Type="password"
            icon={FiLock}
            />

            <Input
            placeholder="Nova Senha"
            Type="password"
            icon={FiLock}
            />
            <Button title="Salvar" />

        </Form>
        </Container>
    )
}