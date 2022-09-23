import { HTMLAttributes, ReactNode } from "react";
import * as S from "./styles";

interface DefaultButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export function DefaultButton({ children, ...rest }: DefaultButtonProps) {
  return <S.Container {...rest}>{children}</S.Container>;
}
