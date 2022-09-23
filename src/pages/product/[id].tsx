import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import * as S from "../../styles/pages/product";
import { useContextSelector } from "use-context-selector";
import { CartContext } from "../../context/CartContext";

type Product = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  priceFormatted: string;
  description: string;
  defaultPriceId: string;
};
interface ProductProps {
  product: Product;
}

export default function PageProduct({ product }: ProductProps) {
  const handleAddProduct = useContextSelector(
    CartContext,
    (CartContext) => CartContext.handleAddProduct
  );
  const isCreatingCheckoutSession = useContextSelector(
    CartContext,
    (CartContext) => CartContext.isCreatingCheckoutSession
  );

  const handleClickButton = async () => {
    handleAddProduct({
      id: product.id,
      defaultPriceId: product.defaultPriceId,
      imageUrl: product.imageUrl,
      name: product.name,
      price: product.price,
      priceFormatted: product.priceFormatted,
    });
  };

  const titleHead = `${product.name} | Ignite Shop`;
  return (
    <>
      <Head>
        <title>{titleHead}</title>
      </Head>
      <S.Container>
        <S.ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </S.ImageContainer>
        <S.ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.priceFormatted}</span>
          <p>{product.description}</p>
          <button
            disabled={isCreatingCheckoutSession}
            onClick={handleClickButton}
          >
            Comprar agora
          </button>
        </S.ProductDetails>
      </S.Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<
  ProductProps,
  { id: string }
> = async (ctx) => {
  const productId = ctx.params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        priceFormatted: new Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100),
        price: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
