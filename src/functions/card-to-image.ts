import * as Stickers from '../Components/CardElements/ArtObject/all-objects';
import Figures from "../Components/CardElements/ArtObject/figures";
import Types from "../Types/object-types";
import ArtObject from "../Types/type-art-object";
import Card from "../Types/type-card";
import CardObject from "../Types/type-card-object";
import ImageObject from "../Types/type-image";
import ReactDOMServer from 'react-dom/server';
import Text from "../Types/type-text";
import { ImageExtension, Quality } from "../Components/ModalWindows/ImageDownloadModalWindow/image-download-modal";
import { getStore } from "../Store/store";

async function saveAsImage(filename: string, extension: ImageExtension, quality: Quality): Promise<void> {
  const store = getStore();
  const card: Card = store.getState().card;
  const objects: CardObject[] = card.objects;

  const canvas: HTMLCanvasElement = document.createElement("canvas");
  const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

  if (!ctx) {
    return;
  }
  
  canvas.width = card.size.width;
  canvas.height = card.size.height;

  await drawBackground(ctx, card.background);
  await drawObjects(ctx, objects);

  let imageQuality: number = 1;
  switch (quality) {
    case "high":
      imageQuality = 1;
      break;
    case "medium":
      imageQuality = 0.5;
      break;
    case "low":
      imageQuality = 0.1;
      break;
  }

  const fileType = "image/" + extension;
  const fileURL = canvas.toDataURL(fileType, imageQuality);
  const link = document.createElement("a");
  link.href = fileURL;
  link.download = filename;
  link.click();
}

async function drawBackground(ctx: CanvasRenderingContext2D, data: string): Promise<void> {
  if (data) {
    const img: HTMLImageElement = new Image();
    img.setAttribute("crossOrigin", "anonymous");
    img.src = data;
    await img.decode();
    ctx?.drawImage(img, 0, 0);
  }
  else {
    const store = getStore();
    const card: Card = store.getState().card;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, card.size.width, card.size.height);
  }
}

async function drawObjects(ctx: CanvasRenderingContext2D, objects: CardObject[]): Promise<void> {
  if (!objects.length) {
    return;
  }

  for (const obj of objects) {
    switch (obj.type) {
      case Types.Image:
        await drawImage(ctx, obj);
        break;
      case Types.Text:
        await drawText(ctx, obj);
        break;
      case Types.ArtObject:
        await drawArtObject(ctx, obj);
        break;
    }
  }
}

async function drawImage(ctx: CanvasRenderingContext2D, image: ImageObject): Promise<void> {
  const img = new Image();
  img.setAttribute("crossOrigin", "anonymous");
  img.src = image.data;
  await img.decode();
  ctx.drawImage(img, image.position.x, image.position.y, image.size.width, image.size.height);
}

async function drawArtObject(ctx: CanvasRenderingContext2D, artObject: ArtObject): Promise<void> {
  const base64: string = artObjectToBase64(artObject);

  if (!base64) {
    return;
  }
  
  const img = new Image();
  img.setAttribute("crossOrigin", "anonymous");
  img.src = base64;
  await img.decode();
  ctx.drawImage(img, artObject.position.x, artObject.position.y, artObject.size.width, artObject.size.height);
}

function artObjectToBase64(artObject: ArtObject): string {
  const svgString: string = artObjectToStaticMarkup(artObject);

  if (!svgString) {
    return "";
  }

  const div = document.createElement("div");
  div.innerHTML = svgString.trim();
  const svg = div.firstChild as SVGSVGElement;

  // Firefox obligates svg elements to have width and height properties. Otherwise they won't be rendered to canvas
  svg.setAttribute("width", "10");
  svg.setAttribute("height", "10");

  return "data:image/svg+xml;base64," + btoa(svg.outerHTML);
}

function artObjectToStaticMarkup(artObject: ArtObject): string {
  switch (artObject.figure) {
    case Figures.Bat:
      return ReactDOMServer.renderToStaticMarkup(Stickers.Bat());
    case Figures.Star:
      return ReactDOMServer.renderToStaticMarkup(Stickers.Star());
    case Figures.Goat:
      return ReactDOMServer.renderToStaticMarkup(Stickers.Goat());
    case Figures.Cookie:
      return ReactDOMServer.renderToStaticMarkup(Stickers.Cookie());
    case Figures.SantaHat:
      return ReactDOMServer.renderToStaticMarkup(Stickers.SantaHat());
    case Figures.Heart:
      return ReactDOMServer.renderToStaticMarkup(Stickers.Heart());
    case Figures.WitchHat:
      return ReactDOMServer.renderToStaticMarkup(Stickers.WitchHat());
    case Figures.Ghost:
      return ReactDOMServer.renderToStaticMarkup(Stickers.Ghost());
    default:
      return "";
  }
}

const SYMBOL_REPLACEMENT: { code: string, symbol: string }[] = [
  { code: "&nbsp;", symbol: " " },
  { code: "&amp;", symbol: "&" },
  { code: "&lt;", symbol: "<" },
  { code: "&gt;", symbol: ">" }
]

async function drawText(ctx: CanvasRenderingContext2D, text: Text): Promise<void> {
  function drawUnderline(line: string): void {
    const width = ctx.measureText(line).width;
    const yPos = text.position.y + text.fontSize + lineStart + UNDERLINE_OFFSET - .5; //Subtract .5 to make line distinct
    ctx.strokeStyle = text.color;
    ctx.lineWidth = 5;
  
    ctx.beginPath();
    ctx.moveTo(text.position.x, yPos);
    ctx.lineTo(text.position.x + width, yPos);
    ctx.stroke();
    ctx.closePath();
  }

  const LINE_HEIGHT = 1.2;
  const UNDERLINE_OFFSET = 8;
  
  const div = document.createElement("div");
  div.innerHTML = text.text;
  let lineStart = 0;
  
  const lines: string[] = div.innerHTML.split("<br>");
  for (let line of lines) {
    SYMBOL_REPLACEMENT.forEach((element) => {
      line = line.replaceAll(element.code, element.symbol);
    });

    ctx.fillStyle = text.color;
    
    const fontStyle = makeFontStyle(text);
    ctx.font = fontStyle;
    ctx.fillText(line, text.position.x, text.position.y + text.fontSize + lineStart);

    if (text.underline) {
      drawUnderline(line);
    }

    lineStart += text.fontSize * LINE_HEIGHT;
  }
}

function makeFontStyle(text: Text): string {
  let fontStyle: string = "";

  if (text.italic) {
    fontStyle += "italic ";
  }

  if (text.bold) {
    fontStyle += "bold ";
  }
  
  fontStyle += text.fontSize + "px " + text.fontFamily;
  return fontStyle;
}

export { saveAsImage }