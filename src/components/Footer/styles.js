import styled from 'styled-components';

export const FooterContent = styled.div`
  background-color: black;
  color: var(--text);
  text-align: center;
  padding: 1.2rem;
  margin-top: 4rem;

  span {
    font-size: 1.8rem;
    font-weight: 500;
  }

  img {
    width: 32px;
  }

  a {
    color: inherit;
    &:visited {
      color: inherit;
    }
  }

  ul {
    margin: 0.5rem 0;
    display: flex;
    justify-content: center;
    li + li {
      margin-left: 1rem;
    }
  }
`;
