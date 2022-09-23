import { useContextSelector } from "use-context-selector";
import * as Dialog from "@radix-ui/react-dialog";
import { CartContext } from "../../context/CartContext";
import * as S from "./styles";
import { DefaultButton } from "../DefaultButton";
import { CardProduct } from "./CardProduct";

export function Cart() {
  const products = useContextSelector(
    CartContext,
    (CartContext) => CartContext.products
  );
  const handleBuyProduct = useContextSelector(
    CartContext,
    (CartContext) => CartContext.handleBuyProduct
  );
  const cartQuantity = useContextSelector(
    CartContext,
    (CartContext) => CartContext.cartQuantity
  );
  const cartTotalPrice = useContextSelector(
    CartContext,
    (CartContext) => CartContext.cartTotalPrice
  );
  const isCreatingCheckoutSession = useContextSelector(
    CartContext,
    (CartContext) => CartContext.isCreatingCheckoutSession
  );

  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <Dialog.Title>
          <h4>Sacola de compras</h4>
        </Dialog.Title>
        <S.Products>
          {products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </S.Products>
        <S.Footer>
          <div>
            <span>Quantidade</span>
            <span>{cartQuantity} itens</span>
          </div>
          <div className="total">
            <span>Valor total</span>
            <strong>{cartTotalPrice}</strong>
          </div>
          <DefaultButton
            disabled={isCreatingCheckoutSession}
            onClick={handleBuyProduct}
          >
            Finalizar Comprar
          </DefaultButton>
        </S.Footer>
      </S.Content>
    </Dialog.Portal>
  );
}
