import {Container, Form, Avatar} from "./styles"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
    return(
        <Container>
            <header>
                <a href="/">
                    <FiArrowLeft />
                </a>
            </header>

            <Form>

                <Avatar>
                    <img src="https://github.com/Zapotoczn.png" alt="Photo" />

                    <label htmlFor="avatar">
                    <FiCamera />
                    <input id="avatar" type="file"/>
                    </label>

                </Avatar>

                <Input 
                placeholder="User"
                type="text"
                icon={FiUser}
                />

                <Input 
                placeholder="E-Mail"
                type="text"
                icon={FiMail}
                />

                <Input 
                placeholder="Password"
                type="password"
                icon={FiLock}
                />

                <Input 
                placeholder="New Password"
                type="password"
                icon={FiLock}
                />

                <Button title="Save"/>
            </Form>
        </Container>
    )
}