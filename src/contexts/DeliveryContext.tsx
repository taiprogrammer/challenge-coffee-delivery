import { createContext, ReactNode, useState } from "react";
import { api } from "../lib/axios";

interface PaymentMethod {
  method: "CARTÃO DE CRÉDITO" | "CARTÃO DE DÉBITO" | "DINHEIRO";
}

interface Product {
  id: string;
  image: string;
  type: string[];
  name: string;
  description: string;
  price: number;
  serial: number;
}

interface ProductCart {
  id: string;
  image: string;
  name: string;
  quantity: number;
  price: number;
  serial: number;
}

interface UserAddress {
  zip: string;
  street: string;
  number: number;
  complement?: string | null;
  neighbourhood: string;
  city: string;
  state: string;
}

interface Cart {
  id: string;
  products: Product[];
  paymentMethod: PaymentMethod;
}

interface DeliveryContextType {
  products: Product[];
  addToCart: (product: ProductCart) => Promise<void>;
  fetchCartProducts: () => void;
  addAddress: (address: UserAddress) => Promise<void>;
  fetchAddress: () => void;
  deleteItemCart: (product: ProductCart) => Promise<void>;
  updateQuantityProduct: (product: ProductCart) => void;
  cart: Cart[];
  cartProducts: ProductCart[];
  address: UserAddress | undefined;
}

export const DeliveryContext = createContext({} as DeliveryContextType);

interface DeliveryContextProviderProps {
  children: ReactNode;
}

export function DeliveryContextProvider({
  children,
}: DeliveryContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  const [cart, setCart] = useState<Cart[]>([]);

  const [cartProducts, setCartProducts] = useState<ProductCart[]>([]);

  const [address, setAddress] = useState<UserAddress>();

  async function addToCart(product: ProductCart) {
    const { id, image, name, quantity, price, serial } = product;
    
    const response = await api.post("/cart-products", {
      id,
      image,
      name,
      quantity,
      price,
      serial,
    });

    setCartProducts((state) => [response.data, ...state]);
  }

  function updateQuantityProduct(product: ProductCart) {
    const { id, image, name, price, quantity, serial } = product;
    api.put(`/cart-products/${id}`, {
      id,
      image,
      name,
      price,
      quantity,
      serial,
    });

      api.get("/cart-products").then(async ({ data }) => {
        setCartProducts(await data);
      });

  }

  function fetchCartProducts() {
    api.get("/cart-products").then(async ({ data }) => {
      setCartProducts(await data);
      return await data;
    });
  }

  function fetchAddress() {
    api.get("/address").then(async ({ data }) => {
      setAddress(await data);
    });
  }

  async function addAddress(data: UserAddress) {
    const { zip, street, number, complement, neighbourhood, city, state } =
      data;
    const response = await api.post("/address", {
      zip,
      street,
      number,
      complement,
      neighbourhood,
      city,
      state,
    });

    setAddress(response.data);
  }

  async function deleteItemCart(item: ProductCart) {
    const { id } = item;
    api.delete(`/cart-products/${id}`);
  }

  return (
    <DeliveryContext.Provider
      value={{
        products,
        cart,
        cartProducts,
        addToCart,
        fetchCartProducts,
        addAddress,
        fetchAddress,
        deleteItemCart,
        updateQuantityProduct,
        address
      }}
    >
      {children}
    </DeliveryContext.Provider>
  );
}
