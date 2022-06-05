const processAvatar = (data: string): Promise<string | null> => {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;

    const img = document.createElement("img");

    img.onload = () => {
      const width = img.width;
      const height = img.height;

      const scaleWidth = 45 / width;
      const scaleHeight = 45 / height;

      const scale = Math.min(scaleWidth, scaleHeight);

      canvas.width = width * scale;
      canvas.height = height * scale;

      ctx.drawImage(img, 0, 0, width * scale, height * scale);

      const dataURL = canvas.toDataURL("image/png");

      resolve(dataURL);
    };

    img.onerror = () => resolve(null);

    img.src = data;
  });
};

export { processAvatar };
