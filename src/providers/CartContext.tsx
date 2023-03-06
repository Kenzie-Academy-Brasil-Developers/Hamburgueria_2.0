// eslint-disable-next-line no-use-before-define
import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { IProduct, ICartProduct, pageBuyContextData, ShopPageProviderProps } from "./@types"
import api from '../services/api';

export const pageBuyContext = createContext<pageBuyContextData>(
  {} as pageBuyContextData
);
const ShopPageProvider = ({ children }: ShopPageProviderProps) => {
  const [modal, setModal] = useState(false);
  const [productsCards, setProductsCart] = useState<ICartProduct[]>([]);
  const token = localStorage.getItem('@TOKEN');
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [tSearch, settSearch] = useState('');

  const calculateProducts = productsCards.reduce(
    (accumulator, product) => accumulator + product.price,
    0
  );

  const filteredProducts = productsList.filter((product) =>
    tSearch === ''
      ? true
      : product.name.toLowerCase().includes(tSearch.toLowerCase())
  );

  const hSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const hChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    settSearch(event.target.value);
  };

  const loadProducts = async () => {
    try {
      setLoading(true);
      const response = await api.get<IProduct[]>('products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProductsList(response.data);
    } catch (error) {
      toast.error('Erro ao carregar produtos');
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (id: number) => {
    const productToAdd = productsList.find((product) => product.id === id);

    if (productToAdd) {
      const productAlreadyInCart = productsCards.some(
        (product) => product.id === id
      );
      if (productAlreadyInCart) {
        toast.error('Produto já está no carrinho!');
        setModal(false);
        return;
      }
      setProductsCart([...productsCards, productToAdd]);
    }
  };

  return (
    <pageBuyContext.Provider
      value={{
        setModal,
        modal,
        productsList,
        loadProducts,
        addToCart,
        loading,
        productsCards,
        setProductsCart,
        hSearch,
        tSearch,
        hChange,
        filteredProducts,
        calculateProducts,
      }}
    >
      {children}
    </pageBuyContext.Provider>
  );
};

export default ShopPageProvider;
