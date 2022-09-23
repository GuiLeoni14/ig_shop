import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  button: {
    background: "none",
    border: "none",
  },
  body: {
    backgroundColor: "$gray900",
    color: "$gray100",
    "-webkit-font-smoothing": "antialiased",
  },
  "body, input, textarea, button": {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 400,
  },
  "*::-webkit-scrollbar-track": {
    background: "#282824",
  },
  "*::-webkit-scrollbar-thumb": {
    backgroundColor: "#00b37e",
    borderRadius: "20px",
    border: "0.1 solid #eee",
  },
  "*::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#00875f",
  },
});
