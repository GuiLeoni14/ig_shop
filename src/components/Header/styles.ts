import { Trigger } from "@radix-ui/react-dialog";
import { styled } from "../../styles";

export const Header = styled("header", {
  padding: "2rem 0rem",
  width: "100%",
  maxWidth: "1280px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const OpenCart = styled(Trigger, {
  cursor: "pointer",
  "&:hover": {
    opacity: 0.6,
  },
});
