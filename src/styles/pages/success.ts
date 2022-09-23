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

export const Images = styled("div", {
  marginTop: "4rem",
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 145,
  height: 145,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  padding: "0.2rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  borderRadius: "50%",
  boxShadow: " 0px 0px 60px rgba(0, 0, 0, 0.8)",

  img: {
    objectFit: "cover",
  },

  "& + div": {
    marginLeft: "-50px",
  },
});
