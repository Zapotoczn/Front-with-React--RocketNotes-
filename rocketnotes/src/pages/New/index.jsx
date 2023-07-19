import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Container, Form } from './style';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import {Link} from 'react-router-dom';

export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Create Notes</h1>
                        <Link to="/">Back</Link>
                    </header>
                    <Input placeholder="Title"/>
                    <Textarea placeholder="Obs"/>

                    <Section title="Good Links">   
                        <NoteItem Value="https://rocketseat.com.br" />
                        <NoteItem isNew />
                    </Section>

                </Form>
            </main>
        </Container>
    );
}