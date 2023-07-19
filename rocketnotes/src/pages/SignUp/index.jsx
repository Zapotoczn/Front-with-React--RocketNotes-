import { Container, Form, Background} from './styles';
import {Input} from '../../components/Input';
import {FiMail, FiLock, FiUser} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import {Button} from '../../components/Button';

export function SignUp() {
    return (
        <Container>
            <Background />
            <Form>
                <h1>Rocket Notes</h1>
                <p>App to manage your most important links</p>

                <h2>Create Your Account</h2>

                <Input 
                placeholder="UserName"
                type="UserName"
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



                <Button title="Sign-Up"/>

                <Link to="/">ComeBack To Log-in</Link>
            </Form>


        </Container>
    )
}