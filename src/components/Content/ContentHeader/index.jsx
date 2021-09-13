import { Header } from './styles';

export const ContentHeader = ({ title, subtitle }) => (
  <Header>
    <div className="title">{title}</div>
    <div className="subtitle">{subtitle}</div>
  </Header>
);
