const fs = require('fs');

async function downloadPreview() {
  const imgUrl = 'https://i.pinimg.com/736x/4d/85/d7/4d85d7b11f2b9acd9f26b4fdbdc0c797.jpg';
  const res = await fetch(imgUrl);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync('scratch/pin_image.jpg', buffer);
  console.log('Saved preview image to scratch/pin_image.jpg, size:', buffer.length);
}

downloadPreview().catch(console.error);
