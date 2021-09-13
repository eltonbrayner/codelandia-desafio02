import img_1 from 'assets/img/1.png';
import img_2 from 'assets/img/2.png';
import img_3 from 'assets/img/3.png';
import img_4 from 'assets/img/4.png';
import img_5 from 'assets/img/5.png';
import img_6 from 'assets/img/6.png';
import img_7 from 'assets/img/7.png';
import img_8 from 'assets/img/8.png';
import ScrollReveal from 'components/ScrollReveal';
import { Card, Content } from './styles';

export const ContentMain = () => (
  <Content>
    <ScrollReveal>
      <Card>
        <img src={img_1} alt="Tênis 1" />
      </Card>
    </ScrollReveal>
    <ScrollReveal>
      <Card>
        <img src={img_2} alt="Tênis 2" />
      </Card>
    </ScrollReveal>
    <ScrollReveal>
      <Card>
        <img src={img_3} alt="Tênis 3" />
      </Card>
    </ScrollReveal>
    <ScrollReveal>
      <Card>
        <img src={img_4} alt="Tênis 4" />
      </Card>
    </ScrollReveal>
    <ScrollReveal>
      <Card>
        <img src={img_5} alt="Tênis 5" />
      </Card>
    </ScrollReveal>
    <ScrollReveal>
      <Card>
        <img src={img_6} alt="Tênis 6" />
      </Card>
    </ScrollReveal>
    <ScrollReveal>
      <Card>
        <img src={img_7} alt="Tênis 7" />
      </Card>
    </ScrollReveal>
    <ScrollReveal>
      <Card>
        <img src={img_8} alt="Tênis 8" />
      </Card>
    </ScrollReveal>
  </Content>
);
