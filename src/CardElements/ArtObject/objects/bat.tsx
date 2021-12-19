import StickerProps from './sticker-props';
import { fetchStickerStyle } from  './sticker-utils';
import { createRef, useEffect, useState } from "react";
import Point from "../../../Types/type-point";
import ArtObject from "../../../Types/type-art-object";
import Card from "../../../Types/type-card";
import CardObject from "../../../Types/type-card-object";
import Figures from "../figures";
import Types from "../../../Types/object-types";
import { dispatch } from '../../../Card/card';

// function SetArtObjectPosition(card: Card, {artObject, newPos}: { artObject: ArtObject, newPos: Point }): Card {
//   const index = card.objects.findIndex((element, index, array) => { return (element as ArtObject).id === artObject.id; });
//   if (index > -1) {
//     let newArtObject: ArtObject = {
//       type: artObject.type,
//       figure: artObject.figure,
//       size: artObject.size,
//       position: newPos
//     }
//     let newObjects: CardObject[] = card.objects;
//     newObjects[index] = newArtObject;
//     let newCard: Card = {
//       background: card.background,
//       size: card.size,
//       objects: newObjects,
//       filter: card.filter,
//     }
//     return newCard;
//   }
//   else {
//     return card;
//   }
// }

function Bat(props: StickerProps) {
  // const ref = createRef<SVGSVGElement>();
  // const [pos, setPos] = useState(props.position);

  // let startPos: Point;
  
  // const onMouseUp = () => {
  //   document.removeEventListener("mousemove", onMouseMove);
  //   document.removeEventListener("mouseup", onMouseUp);
  // }

  // const onMouseDown = (e: any) => {
  //   if (ref.current && ref.current.contains(e.target)) {
  //     startPos = {
  //       x: e.pageX,
  //       y: e.pageY
  //     }
  //     document.addEventListener("mousemove", onMouseMove);
  //     document.addEventListener("mouseup", onMouseUp);
  //   }
  // }
  
  // const onMouseMove = (e: any) => {
  //   const delta = {
  //     x: e.pageX - startPos.x,
  //     y: e.pageY - startPos.y
  //   };
  //   const newPos = {
  //     x: pos.x + delta.x,
  //     y: pos.y + delta.y
  //   }
  //   setPos(newPos);

  //   const artObject: ArtObject = {
  //     id: 1,
  //     figure: Figures.Bat, 
  //     size: props.size, 
  //     type: Types.ArtObject, 
  //     position: props.position
  //   }
  //   dispatch(SetArtObjectPosition, { artObject, newPos });
  // }

  // useEffect(() => {
  //   document.addEventListener("mousedown", onMouseDown);
  //   return () => {
  //     document.removeEventListener("mousedown", onMouseDown);
  //   }
  // });

  const style = fetchStickerStyle(props);
  return (<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" className={ props.class } style={ style }
  viewBox="0 0 511.988 511.988" enableBackground="new 0 0 511.988 511.988" xmlSpace="preserve">
  <path fill="#967ADC" d="M498.977,398.662l-85.326-106.669c-3.281-4.094-9.062-5.203-13.625-2.594L255.983,371.71
  l-144.028-82.311c-4.562-2.609-10.343-1.5-13.625,2.594L13.004,398.662c-2.734,3.406-3.094,8.141-0.938,11.922
  c2.156,3.813,6.406,5.907,10.719,5.313c0.109-0.031,10-1.359,23.906-1.359c18.875,0,53.639,2.625,74.404,20.249
  c3.484,2.969,8.484,3.359,12.406,1c0.188-0.109,18.937-11.281,42.28-11.281c21.906,0,40.39,10.031,54.952,29.797
  c2,2.749,5.188,4.343,8.578,4.343h33.358c3.39,0,6.577-1.594,8.577-4.343c14.562-19.766,33.047-29.797,54.937-29.797
  c23.108,0,42.124,11.172,42.28,11.281c3.938,2.359,8.938,1.969,12.422-1c20.75-17.624,55.53-20.249,74.421-20.249
  c13.891,0,23.78,1.328,23.874,1.359c4.328,0.594,8.578-1.5,10.734-5.298C502.087,406.803,501.712,402.068,498.977,398.662z"/>
  <path fill="#CCD1D9" d="M373.964,48.866C342.465,17.358,300.56,0,255.984,0c-44.562,0-86.467,17.358-117.982,48.866
  c-31.515,31.515-48.858,73.42-48.858,117.989s17.343,86.467,48.858,117.981c31.515,31.515,73.42,48.874,117.982,48.874
  c44.576,0,86.481-17.359,117.98-48.874c31.516-31.515,48.875-73.412,48.875-117.981S405.479,80.381,373.964,48.866z"/>
  <path opacity="0.2" fill="#FFFFFF" enableBackground="new" d="M373.964,48.866C342.465,17.358,300.56,0,255.984,0
  c-3.562,0-7.125,0.125-10.656,0.344c40.545,2.547,78.326,19.538,107.309,48.522c31.516,31.515,48.875,73.42,48.875,117.989
  s-17.359,86.467-48.875,117.981c-28.982,28.983-66.764,45.983-107.309,48.53c3.531,0.219,7.094,0.344,10.656,0.344
  c44.576,0,86.481-17.359,117.98-48.874c31.516-31.515,48.875-73.412,48.875-117.981S405.479,80.381,373.964,48.866z"/>
  <path fill="#AAB2BC" d="M191.985,213.331c0,5.891-4.766,10.664-10.656,10.664s-10.672-4.773-10.672-10.664
  s4.781-10.672,10.672-10.672S191.985,207.44,191.985,213.331z"/>
  <path d="M266.654,351.991c0,5.891-4.781,10.656-10.671,10.656c-5.891,0-10.656-4.766-10.656-10.656s4.766-10.655,10.656-10.655
  C261.873,341.336,266.654,346.101,266.654,351.991z"/>
  <g>
  <path fill="#967ADC" d="M234.656,313.18c-5.891,0-10.672-4.766-10.672-10.656v-25.187c0-5.898,4.781-10.679,10.672-10.679
    c5.89,0,10.671,4.78,10.671,10.679v25.187C245.327,308.414,240.546,313.18,234.656,313.18z"/>
  <path fill="#967ADC" d="M277.325,313.18c-5.89,0-10.671-4.766-10.671-10.656v-25.187c0-5.898,4.781-10.679,10.671-10.679
    c5.891,0,10.656,4.78,10.656,10.679v25.187C287.981,308.414,283.216,313.18,277.325,313.18z"/>
  <path fill="#967ADC" d="M213.328,479.989c-3.078,0-6.141-1.328-8.25-3.906c-3.734-4.547-3.078-11.266,1.484-15
    l25.984-21.343c4.562-3.734,11.281-3.062,15.015,1.484s3.078,11.266-1.484,15.016l-25.984,21.327
    C218.109,479.208,215.719,479.989,213.328,479.989z"/>
  <path fill="#967ADC" d="M298.653,479.989c-2.391,0-4.781-0.781-6.766-2.422l-25.999-21.327
    c-4.547-3.75-5.203-10.469-1.469-15.016s10.453-5.219,15.015-1.484l25.984,21.343c4.562,3.734,5.219,10.453,1.484,15
    C304.794,478.661,301.731,479.989,298.653,479.989z"/>
  </g>
  <g>
  <path fill="#AC92EB" d="M127.986,437.334c-5.125,0-9.64-3.703-10.515-8.922L96.143,300.414
    c-0.969-5.812,2.953-11.296,8.765-12.265c5.812-0.969,11.312,2.938,12.266,8.75l21.343,127.997
    c0.969,5.812-2.953,11.312-8.766,12.281C129.158,437.271,128.564,437.334,127.986,437.334z"/>
  <path fill="#AC92EB" d="M383.995,437.334c-0.578,0-1.172-0.062-1.766-0.156c-5.812-0.969-9.734-6.469-8.766-12.281
    L394.791,296.9c0.969-5.812,6.469-9.719,12.281-8.75s9.734,6.453,8.766,12.265L394.51,428.413
    C393.636,433.631,389.12,437.334,383.995,437.334z"/>
  <path fill="#AC92EB" d="M291.231,297.774c-9.469-6.312-21.983-9.781-35.248-9.781c-13.25,0-25.765,3.469-35.25,9.781
    c-11.656,7.78-18.078,19.468-18.078,32.874c0,43.905,41.452,168.746,43.218,174.043c1.453,4.359,5.531,7.297,10.109,7.297
    c4.593,0,8.671-2.938,10.124-7.297c1.766-5.297,43.218-130.138,43.218-174.043C309.325,317.242,302.903,305.555,291.231,297.774z"
    />
  </g>
  <g>
  <path fill="#434A54" d="M250.655,330.648c0,5.906-4.781,10.688-10.672,10.688c-5.89,0-10.656-4.781-10.656-10.688
    c0-5.875,4.766-10.656,10.656-10.656C245.874,319.992,250.655,324.773,250.655,330.648z"/>
  <path fill="#434A54" d="M282.653,330.648c0,5.906-4.781,10.688-10.671,10.688c-5.891,0-10.656-4.781-10.656-10.688
    c0-5.875,4.766-10.656,10.656-10.656C277.872,319.992,282.653,324.773,282.653,330.648z"/>
  </g>
  <g>
  <path fill="#AAB2BC" d="M330.653,170.66c-17.641,0-32,14.359-32,31.999c0,17.648,14.359,31.999,32,31.999
    c17.64,0,31.998-14.351,31.998-31.999C362.651,185.019,348.293,170.66,330.653,170.66z"/>
  <path fill="#AAB2BC" d="M223.984,63.999c-23.515,0-42.655,19.14-42.655,42.663c0,23.53,19.14,42.67,42.655,42.67
    c23.531,0,42.67-19.14,42.67-42.67C266.654,83.139,247.515,63.999,223.984,63.999z"/>
  </g>
  </svg>);
}

export default Bat;