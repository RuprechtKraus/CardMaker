import { setCard } from "../Store/ActionCreators/AppActionCreators";
import { getStore } from "../Store/store";
import Card from "../Types/type-card";

function exportToJSON(card: Card): void {
  const dataStr: string = JSON.stringify(card);
  const dataUri: string = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
  const fileName: string = "card.json";
  const link = document.createElement("a");
  link.href = dataUri;
  link.download = fileName;
  link.click();
}

async function importFromJSON(json: File): Promise<void> {
  const card: Card = JSON.parse(await json.text()) as Card;
  const store = getStore();
  store.dispatch(setCard(card));
}

export { exportToJSON, importFromJSON };