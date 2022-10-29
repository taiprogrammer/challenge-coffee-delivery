import { createContext, ReactNode, useState } from "react";

const TypeCoffee = {
  tradicional: "TRADICIONAL",
};

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
}

interface UserAddress {
  id: string;
  zip: string;
  street: string;
  number: number;
  complement?: string | undefined;
  neighbourhood: string;
  city: string;
  state: string;
}

interface Cart {
  id: string;
  address: UserAddress;
  products: Product[];
  paymentMethod: PaymentMethod;
}

interface DeliveryContextType {
  products: Product[];
  cart: Cart | undefined;
  address: UserAddress | undefined;
}

export const DeliveryContext = createContext({} as DeliveryContextType);

interface DeliveryContextProviderProps {
  children: ReactNode;
}

export function DeliveryContextProvider({
  children,
}: DeliveryContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "expresso",
      image: "/catalog/Type=Expresso.png",
      type: ["TRADICIONAL"],
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      id: "americano",
      image: "/catalog/Type=Americano.png",
      type: ["TRADICIONAL"],
      name: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: 10,
    },
    {
      id: "cremoso",
      image: "/catalog/Type=Expresso Cremoso.png",
      type: ["TRADICIONAL"],
      name: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      price: 9.9,
    },
    {
      id: "gelado",
      image: "/catalog/Type=Café Gelado.png",
      type: ["TRADICIONAL", "GELADO"],
      name: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      price: 8.9,
    },
    {
      id: "leite",
      image: "/catalog/Type=Café com Leite.png",
      type: ["TRADICIONAL", "COM LEITE"],
      name: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      price: 9,
    },
    {
      id: "latte",
      image: "/catalog/Type=Latte.png",
      type: ["TRADICIONAL", "COM LEITE"],
      name: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.9,
    },
    {
      id: "capuccino",
      image: "/catalog/Type=Capuccino.png",
      type: ["TRADICIONAL", "COM LEITE"],
      name: "Capuccino",
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: 9.9,
    },
    {
      id: "macchiato",
      image: "/catalog/Type=Macchiato.png",
      type: ["TRADICIONAL", "COM LEITE"],
      name: "Macchiato",
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      price: 10,
    },
    {
      id: "mocaccino",
      image: "/catalog/Type=Mochaccino.png",
      type: ["TRADICIONAL", "COM LEITE"],
      name: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      price: 9.9,
    },
    {
      id: "quente",
      image: "/catalog/Type=Chocolate Quente.png",
      type: ["ESPECIAL", "COM LEITE"],
      name: "Chocolate Quente",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      price: 10,
    },
    {
      id: "cubano",
      image: "/catalog/Type=Cubano.png",
      type: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
      name: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: 11,
    },
    {
      id: "havaiano",
      image: "/catalog/Type=Havaiano.png",
      type: ["ESPECIAL"],
      name: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      price: 9,
    },
    {
      id: "arabe",
      image: "/catalog/Type=Árabe.png",
      type: ["ESPECIAL"],
      name: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      price: 9,
    },
    {
      id: "irlandes",
      image: "/catalog/Type=Irlandês.png",
      type: ["ESPECIAL", "ALCOÓLICO"],
      name: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: 10,
    },
  ]);

  const [cart, setCart] = useState<Cart>({
    id: "cart",
    address: {
      id: "sp",
      city: "SP",
      neighbourhood: "Vila Mariana",
      number: 45,
      state: "São Paulo",
      street: "rua x",
      zip: "04859360",
    },
    paymentMethod: {
      method: "CARTÃO DE CRÉDITO",
    },
    products: products,
  });

  const [address, setAddress] = useState<UserAddress>({
    id: "address",
    city: "SP",
    neighbourhood: "Vila Mariana",
    number: 45,
    state: "São Paulo",
    street: "rua x",
    zip: "04859360",
  });

  return (
    <DeliveryContext.Provider value={{ products, cart, address }}>
      {children}
    </DeliveryContext.Provider>
  );
}
