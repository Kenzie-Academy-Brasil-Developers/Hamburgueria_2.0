import { MdDelete } from 'react-icons/md';
import { useContext } from 'react';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { pageBuyContext } from '../../../../providers/CartContext';

const CartProductCard = () => {
  const { productsCards, setProductsCart } = useContext(pageBuyContext);

  const productDelete = (productId: number) => {
    const productsUpdate = productsCards.filter(
      (product) => product.id !== productId
    );
    setProductsCart(productsUpdate);
  };
  return (
    <>
      {productsCards.map((product) => (
        <StyledCartProductCard key={product.id}>
          <div className='imageBox'>
            <img src={product.img} alt='Hamburguer' />
          </div>
          <div className='contentBox'>
            <StyledTitle tag='h3' $fontSize='three'>
              {product.name}
            </StyledTitle>
            <div>
              <button
                onClick={() => productDelete(product.id)}
                type='button'
              >
                <MdDelete size={24} />
              </button>
            </div>
          </div>
        </StyledCartProductCard>
      ))}
    </>
  );
};
export default CartProductCard;
