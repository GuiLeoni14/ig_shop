import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import Image from "next/future/image";
import * as S from "../styles/pages/app";
import { CardContextProvider } from "../context/CartContext";
import * as Dialog from "@radix-ui/react-dialog";
import { Cart } from "../components/Cart";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CardContextProvider>
      <S.Container>
        <S.Header>
          <Image src="/assets/logo.svg" alt="logo" width={140} height={52} />
          <Dialog.Root>
            <Dialog.Trigger>
              <img src="/assets/icon_cart.svg" alt="" />
            </Dialog.Trigger>
            <Cart />
          </Dialog.Root>
        </S.Header>
        <Component {...pageProps} />
      </S.Container>
    </CardContextProvider>
  );
}
