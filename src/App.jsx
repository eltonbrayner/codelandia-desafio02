import { ContentHeader } from 'components/Content/ContentHeader';
import { ContentMain } from 'components/Content/ContentMain';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Slide } from 'components/Slide';

function App() {
  return (
    <div className="App">
      <Header
        title="Jordan Shoes"
        subtitle="Ganhe R$ 10,00 de desconto no frete"
      />
      <Slide />
      <ContentHeader
        title="Destaques"
        subtitle="Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado."
      />
      <ContentMain />
      <Footer content="Todos os direitos reservados" />
    </div>
  );
}

export default App;
