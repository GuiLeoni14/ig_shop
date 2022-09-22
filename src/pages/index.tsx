import Image from "next/future/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import * as S from "../styles/pages/home";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <S.Container ref={sliderRef} className="keen-slider">
      <S.Product className="keen-slider__slide">
        <Image src="/camisetas/1.png" width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
      <S.Product className="keen-slider__slide">
        <Image src="/camisetas/2.png" width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
      <S.Product className="keen-slider__slide">
        <Image src="/camisetas/3.png" width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
      <S.Product className="keen-slider__slide">
        <Image src="/camisetas/3.png" width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
    </S.Container>
  );
}
