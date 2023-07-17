import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/zapotoczn.png"/>

                <div>
                    <span>Bem Vindo,</span>
                    <strong>Filipe Zapotoczny</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}