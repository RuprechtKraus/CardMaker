import { ReactElement, useEffect } from 'react';
import Header from '../Header/header';
import Sidebar from '../Sidebar/sidebar';
import Card from '../Types/type-card';
import { bg64 } from './bg';
import { parseObjects } from './utils/object-casting';
import './app.style.css';
import { getNextObjectId, incrementNextObjectId } from '../Card/card';

type AppProps = {
  card: Card;
}

function App(props: AppProps) {
  useEffect(() => {
    document.title = "CardMaker"
  }, []);

  let card: Card = props.card;
  let objects: ReactElement[] = parseObjects(card.objects);
  let cardStyle = {
    width: card.size.width,
    height: card.size.height,
    backgroundImage: "url(data:image/jpeg;base64," + bg64 + ")",
    // backgroundImage: "",
    backgroundSize: "cover"
  }
  
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