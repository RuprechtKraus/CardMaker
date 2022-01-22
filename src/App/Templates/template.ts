import { getStore } from "../../Store/store";
import Card from "../../Types/type-card";
import halloweenTemplate from "./Halloween/halloween";
import photoTemplate from "./PhotoCard/photo-card";
import winterTempalte from "./Winter/winter";

enum Template {
  NewYear = "NewYear",
  Halloween = "Halloween",
  Photo = "Photo"
}

function getTemplate(template: Template): Card {
  switch (template) {
    case Template.NewYear:
      return winterTempalte;
    case Template.Halloween:
      return halloweenTemplate;
    case Template.Photo:
      return photoTemplate;
    default:
      return getStore().getState().card;
  }
}

export { Template, getTemplate };