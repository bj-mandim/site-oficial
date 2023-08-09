import styled, { css } from "styled-components";
import { iStyledProductCardProps } from "../../interfaces/components";

export const StyledProductCard = styled.div<iStyledProductCardProps>`
  border: 1px solid black;

  ${
    //Caso seja um produto bloqueado
    ({ blocked }) =>
      blocked &&
      css`
        border: 1px solid red;
      `
  }

  height: 50vh;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  //ALTERAR HOVER APÓS BIBLIOTECA DE FLIPAR O CARD
  &:hover {
    .card--front {
      display: none;
    }

    .card--back {
      display: flex;
    }
  }

  > div {
    height: 100%;
  }

  .card--front {
    .div--img {
      height: 50%;

      img {
        /* ALTERAR PARA ENCAIXAR A IMAGEM */
        height: 100%;
      }
    }

    .div--text {
      height: 50%;
      padding: 1rem;
    }
  }

  .card--back {
    display: none;
    padding: 1rem;
    height: 100%;
    align-items: center;
  }
`;
