import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/future/image";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import * as S from "../../styles/pages/product";

type Product = {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
};
interface ProductProps {
  product: Product;
}

export default function PageProduct({ product }: ProductProps) {
  return (
    <S.Container>
      <S.ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </S.ImageContainer>
      <S.ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button>Comprar agora</button>
      </S.ProductDetails>
    </S.Container>
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
        price: new Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100),
        description: product.description,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};