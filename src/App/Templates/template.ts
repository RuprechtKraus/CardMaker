import { getCard } from "../../Card/card";
import Card from "../../Types/type-card";
import { deepCopy } from "../../utils/utils";
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
      return deepCopy(winterTempalte);
    case Template.Halloween:
      return deepCopy(halloweenTemplate);
    case Template.Photo:
      return deepCopy(photoTemplate);
    default:
      return getCard();
  }
}

export { Template, getTemplate };