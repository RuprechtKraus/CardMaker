import { ReactElement } from 'react';
import TypeImage from '../../Types/type-image';
import Types from '../../Types/object-types';
import TypeText from '../../Types/type-text';
import TypeArtObject from '../../Types/type-art-object';
import CardObject from '../../Types/type-card-object';
import Text from '../../CardElements/Text/text';
import Image from '../../CardElements/Image/image';
import ArtObject from '../../CardElements/ArtObject/art-object';

function castToImage(object: CardObject): ReactElement {
  const image: TypeImage = object as TypeImage;
  return <Image image={ image }></Image>;
}

function castToText(object: CardObject): ReactElement {
  const text: TypeText = object as TypeText;
  return <Text text={ text }></Text>
}

function castToArtObject(object: CardObject): ReactElement {
  const sticker = object as TypeArtObject;
  return <ArtObject artObject={ sticker }></ArtObject>
}

function parseObjects(objects: CardObject[]): ReactElement[] {
  let collection: ReactElement[] = [];
  objects.forEach(obj => {
    switch (obj.type) {
      case Types.Image:
        const image = castToImage(obj);
        collection.push(image);
        break;      
      case Types.Text:
        const text = castToText(obj);
        collection.push(text);
        break;
      case Types.ArtObject:
        const sticker = castToArtObject(obj);
        if (sticker)
          collection.push(sticker);
        break;
    }
  });
  return collection;
}

export { parseObjects };