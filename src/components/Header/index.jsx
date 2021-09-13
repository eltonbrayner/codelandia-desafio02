import { Container, Subtitle, Title } from './styles';

export const Header = ({ title, subtitle }) => (
  <Container>
    <Subtitle>
      <span>{subtitle}</span>
    </Subtitle>
    <Title>
      <span>{title}</span>
    </Title>
  </Container>
);
