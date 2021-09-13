import styled from 'styled-components';
import wallpaper from 'assets/img/wallpaper.jpeg';

export const Wallpaper = styled.div`
  height: 37rem;
  max-width: 100vw;
  background: url(${wallpaper}) no-repeat center center;
  background-attachment: fixed;
  background-size: cover;

  div {
    background-color: rgba(0, 0, 0, 0.5);
    color: var(--white);

    display: flex;
    flex-direction: column;

    justify-content: center;
    height: 100%;

    .text {
      padding: 10rem;

      .title {
        font-weight: 700;
        font-size: 3.2rem;
      }

      .subtitle {
        margin-top: 1.9rem;
        line-height: 30px;
        font-weight: 500;
        font-size: 1.8rem;
      }

      @media (max-width: 60rem) {
        padding: 4rem;
      }
    }
  }
`;
