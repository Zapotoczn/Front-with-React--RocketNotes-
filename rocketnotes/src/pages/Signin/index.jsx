import { Container, Form, Background} from './styles';
import {Input} from '../../components/Input';
import {Link} from 'react-router-dom';
import {FiMail, FiLock} from 'react-icons/fi';
import {Button} from '../../components/Button';

export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>App to manage your most important links</p>

                <h2>Log-in</h2>

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

                <Button title="Get-in" />

                <Link to="/register">Create Account</Link>
            </Form>

            <Background />
        </Container>
    )
}