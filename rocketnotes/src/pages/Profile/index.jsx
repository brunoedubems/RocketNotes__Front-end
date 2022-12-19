import { useState } from 'react';
import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';
import { Container, Form, Avatar } from './styles';
import avatarPlaceholder from '../../assets/avatar.svg' ;

export function Profile(){
    const {user, updateProfile} = useAuth();
    
    const [ name, setName] = useState(user.name);
    const [ email, setEmail] = useState(user.email);
    const [ passwordOld, setpasswordOld] = useState();
    const [ passwordNew, setpasswordNew] = useState();


const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);
    
async function handleUpdate(){
    const user = {
        name,
        email,
        password: passwordNew,
        old_password: passwordOld,
    }

    await updateProfile({ user, avatarFile } )
}

function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);

}


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
                src={avatar} 
                alt="Foto do usuário" 
                />

                <label htmlFor="avatar">
                    <FiCamera />

                    <input 
                    id="avatar" 
                    type="file"
                    onChange={handleChangeAvatar}
                    />
                    
                </label>
            </Avatar>

            <Input
            placeholder="Nome"
            Type="text"
            icon={FiUser}
            value={name}
            onChange={ e => setName(e.target.value)}
            />

            <Input
            placeholder="E-mail"
            Type="text"
            icon={FiMail}
            value={email}
            onChange={ e => setEmail(e.target.value)}
            />

            <Input
            placeholder="Senha atual"
            Type="password"
            icon={FiLock}
            onChange={ e => setpasswordOld(e.target.value)}
            />

            <Input
            placeholder="Nova Senha"
            Type="password"
            icon={FiLock}
            onChange={ e => setpasswordNew(e.target.value)}
            />
            <Button title="Salvar" onClick={handleUpdate} />


        </Form>
        </Container>
    )
}