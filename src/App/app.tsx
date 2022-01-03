import { ReactElement, useEffect } from 'react';
import { createReactElements } from '../utils/object-casting';
import Header from '../Components/Header/header';
import Sidebar from '../Components/Sidebar/sidebar';
import Card from '../Types/type-card';
import styles from './app.module.css';
import { redo, undo } from './history';

type AppProps = {
  card: Card;
}

function App(props: AppProps): JSX.Element {
  const card: Card = props.card;
  const objects: ReactElement[] = createReactElements(card.objects);
  const cardStyle = {
    width: card.size.width,
    height: card.size.height,
    backgroundImage: card.background
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.code === "KeyZ")
      undo();
    else if (e.ctrlKey && e.code === "KeyY")
      redo();
  }

  useEffect(() => {
    document.title = "CardMaker";
    document.addEventListener("keydown", onKeyDown);
    return() => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  
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