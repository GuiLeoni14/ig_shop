import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "../../styles";

export const Container = styled("div", {});

export const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
});

export const Content = styled(Dialog.Content, {
  position: "fixed",
  flex: 1,
  top: 0,
  right: 0,
  minWidth: "480px",
  minHeight: "100vh",
  backgroundColor: "$gray800",
  padding: 48,
  paddingTop: 72,
  display: "flex",
  flexDirection: "column",
});

export const Products = styled("div", {
  marginTop: 32,
  flex: 1,
  height: "100%",
  overflow: "auto",
  maxHeight: "55vh",
});

export const Product = styled("div", {
  display: "flex",
  alignItems: "stretch",
  gap: 20,
  "&:not(:first-child)": {
    marginTop: 24,
  },
});

export const ProductInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  span: {
    fontSize: "$md",
    color: "$gray300",
    lineHeight: "160%",
  },
  strong: {
    fontSize: "$md",
    fontWeight: "bold",
    color: "$white",
    lineHeight: "160%",
  },
  button: {
    fontSize: "$md",
    fontWeight: "bold",
    marginTop: "auto",
    color: "$green500",
  },
});

export const ImageProduct = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  width: 100,
  height: 100,
  borderRadius: 8,
});

export const Footer = styled("footer", {
  width: "100%",
  marginTop: "auto",
  "& > div": {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    span: {
      fontSize: "$md",
      color: "$gray300",
      lineHeight: "160%",
    },
    strong: {
      fontSize: "$md",
      fontWeight: "bold",
      color: "$white",
      lineHeight: "160%",
    },
    "&.total": {
      marginTop: 7,
      span: {
        fontSize: "$md",
      },
      strong: {
        fontSize: "$xl",
      },
    },
  },
  button: {
    marginTop: "55px",
  },
});
