import { Highlight } from "@components/Highlight";
import { Header } from "@components/Header";
import { ButtonIcon } from "@components/ButtonIcon";

import { Container, Form } from "./style";
import { Input } from "@components/Input";

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome da turma" autoCorrect={false} />

         <ButtonIcon icon="home" /> 
      </Form>
    </Container>
  );
}
