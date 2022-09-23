import { useContextSelector } from "use-context-selector";
import Image from "next/future/image";
import * as S from "./styles";
import { CartContext } from "../../context/CartContext";
import { memo } from "react";

interface CardProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    priceFormatted: string;
    price: number;
    defaultPriceId: string;
  };
}
function CardProductComponent({ product }: CardProductProps) {
  const handleRemoveProduct = useContextSelector(
    CartContext,
    (CartContext) => CartContext.handleRemoveProduct
  );

  return (
    <S.Product key={product.id}>
      <S.ImageProduct>
        <Image src={product.imageUrl} width={100} height={100} alt="" />
      </S.ImageProduct>
      <S.ProductInfo>
        <span>{product.name}</span>
        <strong>{product.priceFormatted}</strong>
        <button onClick={() => handleRemoveProduct(product.id)}>Remover</button>
      </S.ProductInfo>
    </S.Product>
  );
}

export const CardProduct = memo(CardProductComponent);
