import Point from "../Types/type-point";
import ArtObject from "../Types/type-art-object";
import CardObject from "../Types/type-card-object";
import Card from "../Types/type-card";
import Image from "../Types/type-image";
import Text from "../Types/type-text";
import Size from "../Types/type-size";
import Types from "../Types/object-types";
import { getCard } from "../Card/card";

function setArtObjectPosition(card: Card, { id, newPos }: { id: number, newPos: Point }): Card {
  const index: number = card.objects.findIndex((element) => { return element.id === id; });
  if (index > -1) {
    const object: ArtObject = card.objects[index] as ArtObject;
    const newArtObject: ArtObject = {
      id: object.id,
      type: object.type,
      figure: object.figure,
      size: object.size,
      position: newPos
    }

    let newObjects: CardObject[] = card.objects;
    newObjects[index] = newArtObject;

    const newCard: Card = {
      background: card.background,
      size: card.size,
      objects: newObjects,
      filter: card.filter
    }

    return newCard;
  }
  else {
    return card;
  }
}

function setImagePosition(card: Card, { id, newPos }: { id: number, newPos: Point }): Card {
  const index: number = card.objects.findIndex((element) => { return element.id === id; });
  if (index > -1) {
    const image: Image = card.objects[index] as Image;
    const newImage: Image = {
      id: image.id,
      type: image.type,
      data: image.data,
      size: image.size,
      position: newPos
    }

    let newObjects: CardObject[] = card.objects;
    newObjects[index] = newImage;

    const newCard: Card = {
      background: card.background,
      size: card.size,
      objects: newObjects,
      filter: card.filter
    }

    return newCard;
  }
  else {
    return card;
  }
}

function setImageSize(card: Card, image: Image, index: number, id: number, newSize: Size): Card {
  const newImage: Image = {
    id: image.id,
    type: Types.Image,
    data: image.data,
    size: newSize,
    position: image.position
  }

  let newObjects: CardObject[] = card.objects;
  newObjects[index] = newImage;
  
  const newCard: Card = {
    background: card.background,
    size: card.size,
    objects: newObjects,
    filter: card.filter
  }

  return newCard;
}

function setArtObjectSize(card: Card, artObject: ArtObject, index: number, id: number, newSize: Size): Card {
  const newArtObject: ArtObject = {
    id: artObject.id,
    type: Types.ArtObject,
    figure: artObject.figure,
    size: newSize,
    position: artObject.position
  }

  let newObjects: CardObject[] = card.objects;
  newObjects[index] = newArtObject;
  
  const newCard: Card = {
    background: card.background,
    size: card.size,
    objects: newObjects,
    filter: card.filter
  }

  return newCard;
}

function setObjectSize(card: Card, { id, newSize }: { id: number, newSize: Size }): Card {
  const index: number = card.objects.findIndex((element) => { return element.id === id; });
  if (index > -1) {
    const object: CardObject = card.objects[index];
    let newCard: Card;
    switch(object.type) {
      case Types.Image:
        newCard = setImageSize(card, object, index, id, newSize);
        break;
      case Types.ArtObject:
        newCard = setArtObjectSize(card, object, index, id, newSize);
        break;
      default:
        newCard = card;
        break;
    }
    
    return newCard;
  }
  else {
    return card;
  }
}

function setTextPosition(card: Card, { id, newPos }: { id: number, newPos: Point }): Card {
  const index: number = card.objects.findIndex((element) => { return element.id === id; });
  if (index > -1) {
    const text: Text = card.objects[index] as Text;
    const newText: Text = {
      id: text.id,
      type: text.type,
      text: text.text,
      color: text.color,
      fontFamily: text.fontFamily,
      fontSize: text.fontSize,
      bold: text.bold,
      italic: text.italic,
      underline: text.underline,
      size: text.size,
      position: newPos
    }

    let newObjects: CardObject[] = card.objects;
    newObjects[index] = newText;

    const newCard: Card = {
      background: card.background,
      size: card.size,
      objects: newObjects,
      filter: card.filter
    }

    return newCard
  }
  else {
    return card;
  }
}

function setTextContent(card: Card, { id, newText }: { id: number, newText: string }): Card {
  const index: number = card.objects.findIndex((element) => { return element.id === id; });
  if (index > -1) {
    const text: Text = card.objects[index] as Text;
    const newTxt: Text = {
      id: text.id,
      type: text.type,
      text: newText,
      color: text.color,
      fontFamily: text.fontFamily,
      fontSize: text.fontSize,
      bold: text.bold,
      italic: text.italic,
      underline: text.underline,
      size: text.size,
      position: text.position
    }

    let newObjects: CardObject[] = card.objects;
    newObjects[index] = newTxt;

    const newCard: Card = {
      background: card.background,
      size: card.size,
      objects: newObjects,
      filter: card.filter
    }

    return newCard
  }
  else {
    return card;
  }
}

function addObject(card: Card, object: CardObject): Card {
  let newObjects: CardObject[] = card.objects;
  newObjects.push(object);
  const newCard: Card = {
    background: card.background,
    size: card.size,
    objects: newObjects,
    filter: card.filter
  }
  return newCard;
}

function deleteObject(card: Card, id: number): Card {
  if (card.objects.length > 0) {
    const newObjects: CardObject[] = card.objects.filter((element) => { return element.id !== id; });
    const newCard: Card = {
      background: card.background,
      size: card.size,
      objects: newObjects, 
      filter: card.filter
    }

    return newCard;
  }
  else {
    return card;
  }
}

/**
 * Sets new background and crops the image if new card size is not provided
 * @param card Current card
 * @param data Background image encoded in base64
 * @param size New card size. If not provided current size will be used
 * @returns Card with new background and size
 */
function setBackground(card: Card, { data, size = getCard().size }: { data: string, size: Size }): Card {
  const newCard: Card = {
    background: data,
    size: size,
    objects: card.objects,
    filter: card.filter
  }
  return newCard;
}

export { setArtObjectPosition, setImagePosition, setTextPosition, setTextContent }
export { setObjectSize, addObject, deleteObject }
export { setBackground }