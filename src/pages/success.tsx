import { GetServerSideProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import * as S from "../styles/pages/success";

interface SuccessProps {
  customerName: string;
  products: {
    name: string;
    image: string;
  }[];
}
export default function PageSuccess({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada| Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <S.Container>
        <Link href="/">
          <Image src="/assets/logo.svg" alt="logo" width={140} height={52} />
        </Link>
        <S.Images>
          {products.map((product) => {
            return (
              <S.ImageContainer key={product.name}>
                <Image src={product.image} width={120} height={110} alt="" />
              </S.ImageContainer>
            );
          })}
        </S.Images>
        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{" "}
          <strong>{products.length}</strong> camisetas já está a caminho da sua
          casa.
        </p>
        <Link href="/">Voltar ao catálogo</Link>
      </S.Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  if (!ctx.query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(ctx.query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details.name;
  const response = session.line_items.data;
  const products = response
    .map((data) => data.price.product)
    .map((productStripe) => {
      const product = productStripe as Stripe.Product;
      return {
        name: product.name,
        image: product.images[0],
      };
    });
  return {
    props: {
      customerName,
      products,
    },
  };
};
