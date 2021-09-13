import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
`;

export const Card = styled.div`
  background-color: var(--bgCard);

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  margin-top: 4rem;

  height: 30rem;
  width: 30rem;

  & + & {
    margin-left: 1rem;
  }

  img {
    transition: transform 0.2s; /* Animation */
    &:hover {
      transform: scale(1.2);
    }
  }
`;
