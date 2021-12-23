import { ReactElement, useEffect } from 'react';
import Header from '../Components/Header/header';
import Sidebar from '../Components/Sidebar/sidebar';
import Card from '../Types/type-card';
import { bg64 } from './bg';
import { createReactElements } from '../utils/object-casting';
import styles from './app.module.css';

type AppProps = {
  card: Card;
}

function App(props: AppProps): JSX.Element {
  useEffect(() => {
    document.title = "CardMaker"
  }, []);

  const card: Card = props.card;
  const objects: ReactElement[] = createReactElements(card.objects);
  const cardStyle = {
    width: card.size.width,
    height: card.size.height,
    backgroundImage: "url(data:image/jpeg;base64," + bg64 + ")",
    // backgroundImage: "",
    backgroundSize: "cover"
  }
  
  return (
    <div className={ styles.app }>
      <Header></Header>
      <div className={ styles.container }>
        <Sidebar></Sidebar>
        <div className={ styles.work_area }>
          <div className={ styles.card } style={ cardStyle }>
            { objects }
          </div>
        </div>
      </div>
    </div>)
}

export default App;