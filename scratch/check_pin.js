async function checkPin() {
  const res = await fetch('https://pin.it/7upgbghxz', { redirect: 'follow' });
  console.log('Final URL:', res.url);
  const html = await res.text();
  const title = html.match(/<title>([^<]+)<\/title>/i);
  console.log('Title:', title ? title[1] : 'No title');
  
  const ogMatches = html.match(/<meta property="og:[^"]+" content="[^"]+"/gi);
  console.log('OG tags:', ogMatches);

  const videoMatches = html.match(/https:\/\/[^"'\s]+\.(mp4|m3u8|webm)/gi);
  console.log('Video URLs:', videoMatches ? videoMatches.slice(0, 5) : 'No video matches');

  const imgMatches = html.match(/https:\/\/i\.pinimg\.com\/[^"'\s]+/gi);
  console.log('Pin images:', imgMatches ? imgMatches.slice(0, 5) : 'No image matches');
}

checkPin().catch(console.error);
