import { ReactNode, useCallback, useMemo, useState } from "react";
import { createContext } from "use-context-selector";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

type Product = {
  id: string;
  name: string;
  imageUrl: string;
  priceFormatted: string;
  price: number;
  defaultPriceId: string;
};

interface CartContextData {
  products: Product[];
  handleAddProduct: (product: Product) => void;
  handleRemoveProduct: (productId: string) => void;
  handleBuyProduct: () => void;
  isCreatingCheckoutSession: boolean;
  cartQuantity: number;
  cartTotalPrice: string;
}

export const CartContext = createContext({} as CartContextData);

interface CardContextProviderProps {
  children: ReactNode;
}

export function CardContextProvider({ children }: CardContextProviderProps) {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  const cartQuantity = products.length;

  const cartTotalPrice = useMemo(() => {
    const totalPrice = products.reduce((acc, product) => {
      return product.price + acc;
    }, 0);

    return new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(totalPrice / 100);
  }, [products]);

  const handleAddProduct = useCallback(
    (product: Product) => {
      const productAlreadyAdded = !!products.find(
        (state) => state.id === product.id
      );

      if (!productAlreadyAdded) {
        MySwal.fire({
          position: "center",
          icon: "success",
          title: "Produto adicionado com sucesso",
          color: "#c4c4cc",
          background: "#00875f",
          showConfirmButton: false,
          timer: 1500,
        });
        setProducts((state) => [...state, product]);
      } else {
        MySwal.fire({
          position: "center",
          icon: "info",
          title: "Este produto já está na sacola",
          color: "#c4c4cc",
          background: "#00875f",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    [products]
  );

  const handleRemoveProduct = useCallback((productId: string) => {
    setProducts((state) => state.filter((product) => product.id !== productId));
    MySwal.fire({
      position: "center",
      icon: "success",
      title: "Produto removido com sucesso",
      showConfirmButton: false,
      color: "#c4c4cc",
      background: "#00875f",
      timer: 1500,
    });
  }, []);

  const handleBuyProduct = useCallback(async () => {
    const checkoutProducts = products.map((product) => {
      return {
        price: product.defaultPriceId,
        quantity: 1,
      };
    });
    if (checkoutProducts.length < 1) {
      MySwal.fire({
        position: "center",
        icon: "info",
        title: "Nenhum produto na sacola",
        color: "#c4c4cc",
        background: "#00875f",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post("/api/checkout", {
        checkoutProducts,
      });
      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      setIsCreatingCheckoutSession(false);
      // conectar ao data dog ou sentry
      alert("Falha ao criar checkout");
      console.log(error);
    }
  }, [products]);
  return (
    <CartContext.Provider
      value={{
        products,
        handleAddProduct,
        handleRemoveProduct,
        handleBuyProduct,
        isCreatingCheckoutSession,
        cartQuantity,
        cartTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
