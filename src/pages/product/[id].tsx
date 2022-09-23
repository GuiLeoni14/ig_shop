import Image from "next/future/image";
import * as S from "../../styles/pages/product";

export default function PageProduct() {
  return (
    <S.Container>
      <S.ImageContainer></S.ImageContainer>
      <S.ProductDetails>
        <h1>Camiseta x</h1>
        <span>R$ 79,90</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tempora
          dolore modi dolor nobis maiores tempore eos labore eveniet ex incidunt
          aspernatur voluptatem provident est magnam, excepturi reiciendis,
          facere quisquam!
        </p>
        <button>Comprar agora</button>
      </S.ProductDetails>
    </S.Container>
  );
}
