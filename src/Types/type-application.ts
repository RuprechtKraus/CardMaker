import Card from "./type-card";

type Application = Readonly<{
  seletedId: number | null;
  editedTextId: number | null;
  card: Card;
}>

export default Application;