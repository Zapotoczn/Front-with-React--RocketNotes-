import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand , Menu, Search, Content, NewNote} from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/note'

export function Home(){
    return (
        <Container>

            <Brand>
                <h1>RocketNotes</h1>
            </Brand>  

            <Header />

            <Menu>
                
                <li><ButtonText title="hop" isactive /></li>
                <li><ButtonText title="hip" /></li>
                <li><ButtonText title="hiba" /></li>
            </Menu>

            <Search>
                <Input placeholder="Search for the title" icon={FiSearch}/>
            </Search>
            
            <Content>
                <Section title="My notes">
                    <Note data={{title: 'React', tags: [
                        {id: '1', name: 'React'},
                        {id: '2', name: 'RocketSeat'}
                    ]}}/>
                </Section>
            </Content>

            <NewNote>
                <FiPlus/>
                New Note
            </NewNote>
        </Container>
    )
}