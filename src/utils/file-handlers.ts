type ImageInfo = {
  height: number,
  width: number,
  data: string
}

async function uploadImage(file: File): Promise<ImageInfo> {
  const promise = new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });
  const img = new Image();
  img.src = await promise as string;
  await img.decode();

  return {
    height: img.height,
    width: img.width,
    data: img.src
  }
}

export { uploadImage };
export type { ImageInfo };
