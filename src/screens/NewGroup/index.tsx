import { Container, Content, Icon } from "./style";

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Input 
        placeholder="Nome da turma"/>
        <Button title="criar" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}
