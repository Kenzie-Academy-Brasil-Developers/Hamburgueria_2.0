import { useContext } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { pageBuyContext } from '../../../providers/CartContext';

const CartProductList = () => {
  const { calculateProducts, setProductsCart, setModal } =
    useContext(pageBuyContext);

  return (
    <StyledCartProductList>
      <ul>
        <CartProductCard />
      </ul>
      <div className='totalBox'>
        <button type='button' onClick={() => setModal(false)}>
          Adicione outros itens
        </button>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>{`R$ ${calculateProducts.toFixed(
          2
        )}`}</StyledParagraph>
      </div>
      <StyledButton
        onClick={() => setProductsCart([])}
        $buttonSize='default'
        $buttonStyle='gray'
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
