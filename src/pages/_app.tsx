import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import Image from "next/future/image";
import * as S from "../styles/pages/app";
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <S.Container>
      <S.Header>
        <Image src="/assets/logo.svg" alt="logo" width={140} height={52} />
      </S.Header>
      <Component {...pageProps} />
    </S.Container>
  );
}
