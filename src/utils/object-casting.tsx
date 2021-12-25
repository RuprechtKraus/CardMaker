import { ReactElement } from 'react';
import Types from '../Types/object-types';
import CardObject from '../Types/type-card-object';
import Text from '../Components/CardElements/Text/text';
import Image from '../Components/CardElements/Image/image';
import ArtObject from '../Components/CardElements/ArtObject/art-object';
import { getSelectedId } from '../Card/card';

function createReactElements(objects: CardObject[]): ReactElement[] {
  let collection: ReactElement[] = [];
  objects.forEach(obj => {
    switch (obj.type) {
      case Types.Image:
        const image = <Image image={ obj } selectedId={ getSelectedId() }></Image>;
        collection.push(image);
        break;      
      case Types.Text:
        const text = <Text text={ obj } selectedId={ getSelectedId() }></Text>;
        collection.push(text);
        break;
      case Types.ArtObject:
        const sticker = <ArtObject artObject={ obj } selectedId={ getSelectedId() }></ArtObject>;
        if (sticker)
          collection.push(sticker);
        break;
    }
  });
  return collection;
}

export { createReactElements };