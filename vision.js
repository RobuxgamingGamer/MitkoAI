// vision.js — Turbo Image Reader 👁️

export function analyzeImage(img) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // Downscale for performance
  const MAX = 300;
  const scale = Math.min(1, MAX / Math.max(img.width, img.height));
  canvas.width = img.width * scale;
  canvas.height = img.height * scale;

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

  let r = 0, g = 0, b = 0;
  let bright = 0;
  let contrast = 0;

  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i+1] + data[i+2]) / 3;
    r += data[i];
    g += data[i+1];
    b += data[i+2];
    bright += avg;
    contrast += Math.abs(avg - 128);
  }

  const px = data.length / 4;
  r = Math.round(r / px);
  g = Math.round(g / px);
  b = Math.round(b / px);
  bright = Math.round(bright / px);
  contrast = Math.round(contrast / px);

  const color =
    r > g && r > b ? "reddish" :
    g > r && g > b ? "greenish" :
    b > r && b > g ? "bluish" :
    "mixed";

  const exposure =
    bright > 190 ? "very bright" :
    bright > 120 ? "balanced" :
    "dark";

  const texture =
    contrast < 20 ? "very smooth" :
    contrast < 50 ? "moderately detailed" :
    "highly detailed";

  const textLikely =
    contrast > 55 && bright > 80 && bright < 200;

  return {
    avgColor: `rgb(${r}, ${g}, ${b})`,
    color,
    brightness: bright,
    exposure,
    texture,
    textLikely
  };
}