import Image from "next/future/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Stripe from "stripe";
import * as S from "../styles/pages/home";
import { GetStaticProps } from "next";
import { stripe } from "../lib/stripe";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}
export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <S.Container ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <S.Product key={product.id} className="keen-slider__slide">
            <Image src={product.imageUrl} width={520} height={480} alt="" />
            <footer>
              <strong>{product.name}</strong>
              <span>R$ {product.price}</span>
            </footer>
          </S.Product>
        );
      })}
    </S.Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
