import Image from "next/future/image";
import * as S from "../styles/pages/home";

export default function Home() {
  return (
    <S.Container>
      <S.Product>
        <Image src="/camisetas/1.png" width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
      <S.Product>
        <Image src="/camisetas/1.png" width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
    </S.Container>
  );
}
