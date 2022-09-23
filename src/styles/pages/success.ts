import { styled } from "..";

export const Container = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: 656,
  margin: "0 auto",

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    marginTop: "2rem",
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    lineHeight: 1.4,
  },

  a: {
    marginTop: "5rem",
    display: "block",
    color: "$green500",
    fontSize: "$lg",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 138,
  height: 145,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.2rem",
  marginTop: "4rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
