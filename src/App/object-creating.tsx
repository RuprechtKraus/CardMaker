import { ReactElement } from 'react';
import Types from '../Types/object-types';
import CardObject from '../Types/type-card-object';
import Text from '../Components/CardElements/Text/text';
import Image from '../Components/CardElements/Image/image';
import ArtObject from '../Components/CardElements/ArtObject/art-object';
import { getSelectedId } from '../Store/store';

function createReactElements(objects: CardObject[]): ReactElement[] {
  // eslint-disable-next-line array-callback-return
  let collection: ReactElement[] = objects.map((element, index) => {
    switch(element.type) {
      case Types.Image:
        return <Image key={ index } image={ element } selectedId={ getSelectedId() }></Image>
        case Types.Text:
        return <Text key={ index } text={ element } selectedId={ getSelectedId() }></Text>
      case Types.ArtObject:
        return <ArtObject key={ index } artObject={ element } selectedId={ getSelectedId() }></ArtObject>
    }
  });
  return collection;
}

export { createReactElements };