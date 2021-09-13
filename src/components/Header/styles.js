import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Title = styled.div`
  padding: 5px 0;

  span {
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 47px;
  }
`;

export const Subtitle = styled.div`
  background-color: var(--title);
  color: var(--white);

  padding: 1rem 0;

  span {
    font-size: 1.6rem;
    font-weight: 500;
  }
`;
