import { ReactElement, useEffect } from 'react';
import Header from '../Header/header';
import Sidebar from '../Sidebar/sidebar';
import Card from '../Types/card';
import CardObject from '../Types/card-object';
import Types from '../Types/object-types';
import { bg64 } from './bg';
import './app.style.css';
import Image from '../Types/image';
import MyText from '../Types/my-text';
import * as Stickers from '../ArtObjects/art-objects';
import ArtObject from '../Types/art-object';
import Figures from '../ArtObjects/figures';

type AppProps = {
  card: Card;
}

function CardObjectToImageElement(object: CardObject): ReactElement {
  const data: string = "data:image/jpeg;base64," + (object as Image).data;
  const imgStyle = {
    marginLeft: object.position.x,
    marginTop: object.position.y,
    height: object.size.height,
    width: object.size.width
  }
  return <img className="card-object" src={ data } alt="" style={ imgStyle }></img>;
}

function CardObjectToTextElement(object: CardObject): ReactElement {
  const textObj: MyText = (object as MyText);
  const textStyle = {
    marginLeft: textObj.position.x,
    marginTop: textObj.position.y,
    width: textObj.size.width,
    fontSize: textObj.fontSize,
    fontStyle: textObj.fontStyle,
    fontFamily: textObj.fontFamily,
    fontWeight: textObj.fontWeight,
    color: textObj.color
  }
  return <span className="card-object" style={ textStyle }>{ textObj.text }</span>;
}

function CardObjectToArtObjectElement(object: CardObject): ReactElement | null {
  const sticker = object as ArtObject;
  switch (sticker.figure) {
    case Figures.Bat:
      return <Stickers.Bat class="card-object" position={ sticker.position } size={ sticker.size }></Stickers.Bat>;
    case Figures.Star:
      return <Stickers.Star class="card-object" position={ sticker.position } size={ sticker.size }></Stickers.Star>;
    default:
      return null;
  }
}

function CardObjectsToReactElements(objects: CardObject[]): ReactElement[] {
  let collection: ReactElement[] = [];
  objects.forEach(obj => {
    switch (obj.type) {
      case Types.ArtObject:
        const sticker = CardObjectToArtObjectElement(obj);
        if (sticker)
          collection.push(sticker);
        break;
      case Types.Image:
        const image = CardObjectToImageElement(obj);
        collection.push(image);
        break;
      case Types.Text:
        const text = CardObjectToTextElement(obj);
        collection.push(text);
        break;
    }
  });
  return collection;
}

function App(props: AppProps) {
  let card: Card = props.card;
  let cardStyle = {
    width: card.size.width,
    height: card.size.height,
    backgroundImage: "url(data:image/jpeg;base64," + bg64 + ")",
    // backgroundImage: "",
    backgroundSize: "cover"
  }
  
  useEffect(() => {
    document.title = "CardMaker"
  }, []);

  let objects: ReactElement[] = CardObjectsToReactElements(card.objects);
  
  return (
    <div className="app">
      <Header></Header>
      <div className="container">
        <Sidebar></Sidebar>
        <div className="work-area">
          <div className="card" style={cardStyle}>
            { objects }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;