import styled from 'styled-components';

export const StyledCartProductList = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;

    height: 200px;
    overflow: auto;
  }

  div > button {
    border-radius: 8px;
    color: #828282;
    background: #e0e0e0;
    padding: 0.5rem;
    transition: 0.5s ease;

    :hover {
      color: #e0e0e0;
      background-color: #828282;
    }
  }

  .totalBox {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    .total {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.gray300};
    }
  }
`;
