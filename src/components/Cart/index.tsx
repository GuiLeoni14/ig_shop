import { useContextSelector } from "use-context-selector";
import * as Dialog from "@radix-ui/react-dialog";
import { CartContext } from "../../context/CartContext";
import * as S from "./styles";
import Image from "next/future/image";
import { DefaultButton } from "../DefaultButton";

export function Cart() {
  const products = useContextSelector(
    CartContext,
    (CartContext) => CartContext.products
  );
  const handleRemoveProduct = useContextSelector(
    CartContext,
    (CartContext) => CartContext.handleRemoveProduct
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

  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <Dialog.Title>
          <h4>Sacola de compras</h4>
        </Dialog.Title>
        <S.Products>
          {products.map((product) => {
            return (
              <>
                <S.Product key={product.id}>
                  <S.ImageProduct>
                    <Image
                      src={product.imageUrl}
                      width={100}
                      height={100}
                      alt=""
                    />
                  </S.ImageProduct>
                  <S.ProductInfo>
                    <span>{product.name}</span>
                    <strong>{product.priceFormatted}</strong>
                    <button onClick={() => handleRemoveProduct(product.id)}>
                      Remover
                    </button>
                  </S.ProductInfo>
                </S.Product>
              </>
            );
          })}
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
          <DefaultButton onClick={handleBuyProduct}>
            Finalizar Comprar
          </DefaultButton>
        </S.Footer>
      </S.Content>
    </Dialog.Portal>
  );
}
