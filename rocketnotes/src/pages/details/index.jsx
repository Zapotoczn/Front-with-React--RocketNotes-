import { Container, Links, Content } from "./styles"
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
export function Details() {

  return(
    <Container>
      <Header />
        <main>
          <Content>
            <ButtonText title="Remove Note"/>

            <h1>
              React Introduction
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam pariatur voluptatem molestias exercitationem nihil, repellendus vitae perferendis repudiandae similique asperiores soluta perspiciatis eveniet consectetur provident necessitatibus modi voluptas esse vel!
            </p>
            <Section title= "Links uteis">
              <Links>
                <li><a href="#">https://github.com/zapotoczn</a></li>
                <li><a href="#">https://github.com/zapotoczn</a></li>
              </Links>
            </Section>

            <Section title= "Marcadores">
              <Tag title="express"/>
              <Tag title="NodeJS"/>
            </Section>  



            <Button title= "Comeback" />
          </Content>
        </main> 
    </Container>
  )
}