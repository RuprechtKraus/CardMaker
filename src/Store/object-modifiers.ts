import CardObject from "../Types/type-card-object";

export function moveObjectUp(objects: CardObject[], id: number): CardObject[] {
  const index: number = objects.findIndex((element) => { return element.id === id });
  if (index > -1 && index < objects.length - 1) {
    let newObjects = Array.from(objects);
    newObjects[index + 1] = newObjects.splice(index, 1, newObjects[index + 1])[0];
    return newObjects;
  }
  else {
    return objects;
  }
}

export function moveObjectDown(objects: CardObject[], id: number): CardObject[] {
  const index: number = objects.findIndex((element) => { return element.id === id });
  if (index > 0) {
    let newObjects: CardObject[] = Array.from(objects);
    newObjects[index - 1] = newObjects.splice(index, 1, newObjects[index - 1])[0];
    return newObjects;
  }
  else {
    return objects;
  }
}

export function setObjectFields(objects: CardObject[], id: number, fields: object): CardObject[] {
  let newObjects: CardObject[] = objects.map((element: CardObject) => {
    if (element.id === id) {
      return {
        ...element,
        ...fields
      }
    }
    else {
      return element;
    }
  });
  return newObjects;
}