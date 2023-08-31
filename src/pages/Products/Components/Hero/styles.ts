import { styled } from 'styled-components'

export const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 9.5rem 0;

  .TitleXL {
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1.6rem;
  }

  .TextL {
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 6.5rem;
  }

  .content {
    width: 52.5%;
  }

  .hero__image {
    width: 42.5%;
    height: fit-content;
  }

  .highlights {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 4rem;
    row-gap: 2rem;

    &__item {
      display: flex;
      gap: 1.2rem;
      align-items: center;
      width: fit-content;
      list-style: none;

      p {
        line-height: 1;
      }

      i {
        display: flex;
        align-items: center;
        padding: 8px;
        border-radius: 50%;
      }

      &:nth-child(1) {
        i {
          background: ${(props) => props.theme['yellow-dark']};
        }
      }
      &:nth-child(2) {
        i {
          background: ${(props) => props.theme['base-text']};
        }
      }
      &:nth-child(3) {
        i {
          background: ${(props) => props.theme.yellow};
        }
      }
      &:nth-child(4) {
        i {
          background: ${(props) => props.theme.purple};
        }
      }

      svg {
        color: ${(props) => props.theme.white};
      }
    }
  }
`
