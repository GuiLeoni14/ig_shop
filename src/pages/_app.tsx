import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import * as S from "../styles/pages/app";
import { CardContextProvider } from "../context/CartContext";
import { Header } from "../components/Header";
import { useRouter } from "next/router";
import { useEffect } from "react";
import NProgress from "nprogress";
import "../../public/css/nprogress.css";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  return (
    <CardContextProvider>
      <S.Container>
        <Header />
        <Component {...pageProps} />
      </S.Container>
    </CardContextProvider>
  );
}
