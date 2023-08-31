import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background: linear-gradient(${(props) => props.theme['base-background']} 30%, transparent);
  max-width: 112.20rem;
  margin: 0 auto;
  padding: 2 3.2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;

  padding: 3.2rem 0;

  nav {
    display: flex;
    gap: 1.2rem;
    
    a {
      padding: .8rem;
      display: flex;
      gap: 4px;
      align-items: center;
      border-radius: 8px;
      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};
      text-decoration: none;
      cursor: pointer;

      &:first-child {
        padding-right: 1rem;
      }
    }
    
    .cart {
      padding: .8rem 1rem;
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`