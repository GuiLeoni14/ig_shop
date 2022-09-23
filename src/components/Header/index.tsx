import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";
import { Cart } from "../Cart";
import * as S from "./styles";

function HeaderComponent() {
  const router = useRouter();
  if (router.asPath.includes("success")) return null;
  return (
    <S.Header>
      <Link href="/">
        <Image src="/assets/logo.svg" alt="logo" width={140} height={52} />
      </Link>
      <Dialog.Root>
        <S.OpenCart>
          <Image
            src="/assets/icon_cart.svg"
            alt="logo"
            width={140}
            height={52}
          />
        </S.OpenCart>
        <Cart />
      </Dialog.Root>
    </S.Header>
  );
}

export const Header = memo(HeaderComponent);
