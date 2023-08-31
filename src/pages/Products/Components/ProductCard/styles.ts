import styled from 'styled-components'

export const ProductCardContainer = styled.li`
  background: ${(props) => props.theme['base-card']};
  list-style: none;
  flex: 4;
  min-width: 25.6rem;
  margin-top: 2rem;
  border-radius: 6px 36px;

  display: flex;
  flex-flow: column;
  align-items: center;

  .image {
    margin: -2rem auto 1.2rem;
    display: block;
  }

  .tags {
    margin-bottom: 1.6rem;

    span {
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      border-radius: 10px;
      padding: 0.4rem 0.6rem;
    }

    span + span {
      margin-left: 0.4rem;
    }
  }

  .title {
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.8rem;
  }

  .description {
    text-align: center;
    color: ${(props) => props.theme['base-label']};
    padding: 0 2rem;
  }

  footer {
    padding: 3.3rem 2rem 2.4rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 0.8rem;
    margin-top: auto;

    .price {
      align-self: center;

      p,
      h3 {
        display: inline-block;
        margin-right: 0.4rem;
      }
    }

    .quantity {
      background: ${(props) => props.theme['base-button']};
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: auto;
      border-radius: 8px;

      svg {
        color: ${(props) => props.theme.purple};
        margin: 0 0.8rem;
      }
    }

    .cartButton {
      background: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme.white};
      border-radius: 8px;
      border: 0;
      padding: 0.8rem;
      height: 3.8rem;
    }
  }
`
