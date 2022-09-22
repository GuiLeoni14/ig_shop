import { styled } from "../styles";

const Button = styled("button", {
  backgroundColor: "$rocketseat",
  borderRadius: 10,
  span: {
    fontWeight: "bold",
  },
  "&:hover": {
    backgroundColor: "#000",
  },
});

export default function Home() {
  return (
    <div>
      Home
      <Button>
        <span>Teste</span>Enviar
      </Button>
    </div>
  );
}
