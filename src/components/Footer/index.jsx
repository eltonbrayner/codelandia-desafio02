import github from 'assets/img/github.png';
import linkedin from 'assets/img/linkedin.png';
import instagram from 'assets/img/instagram.png';
import { FooterContent } from './styles';

export const Footer = ({ content }) => (
  <FooterContent>
    <span>{content}</span>
    <a
      href="https://www.linkedin.com/in/eltonbrayner/"
      target="_blank"
      rel="noreferrer"
    >
      <h4> &copy; Elton Brayner 2021</h4>
    </a>
    <ul>
      <li>
        <a
          href="http://github.com/eltonbrayner"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="Github" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/eltonbrayner/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/eltonbrayner"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="instagra" />
        </a>
      </li>
    </ul>
  </FooterContent>
);
