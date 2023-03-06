import { ReactNode, SetStateAction } from "react";

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface ICartProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface ShopPageProviderProps {
  children: ReactNode;
}

export interface pageBuyContextData {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
  productsList: IProduct[];
  loadProducts: () => Promise<void>;
  addToCart: (id: number) => void;
  loading: boolean;
  productsCards: ICartProduct[];
  setProductsCart: React.Dispatch<React.SetStateAction<ICartProduct[]>>;
  hSearch: (event: React.FormEvent<HTMLFormElement>) => void;
  tSearch: string;
  hChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filteredProducts: IProduct[];
  calculateProducts: number;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}


export interface IUserSignUpFormValues {
  email: string;
  password: string;
  name: string;
}

export interface IUserLoginFormValues {
  accessToken: string;
  user: SetStateAction<IUser | null>;
  email: string;
  password: string;
}

export interface IUserProviderProps {
  children: ReactNode;
}

export interface IUserContextData {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  userRegister: (data: IUserSignUpFormValues) => Promise<void>;
  userLogin: (data: IUserLoginFormValues) => Promise<void>;
  userLogout: () => void;
}