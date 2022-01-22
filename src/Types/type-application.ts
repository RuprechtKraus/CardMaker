import Card from "./type-card";

type Application = Readonly<{
  selectedId: number | null;
  card: Card;
}>

export default Application;