const https = require('https');

function fetchPost(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const desc = data.match(/property="og:description"\s+content="([^"]*)"/);
        console.log(url, '=> OG Description:', desc ? desc[1] : 'none');
        const regex = /<div class="tgme_widget_message_text[^>]*>([\s\S]*?)<\/div>/g;
        let match;
        while ((match = regex.exec(data)) !== null) {
          console.log('   Message:', match[1].replace(/<[^>]+>/g, ' ').trim());
        }
        resolve();
      });
    });
  });
}

async function run() {
  await fetchPost('https://t.me/s/serkdesign/8');
  await fetchPost('https://t.me/s/serkdesign/49');
}
run();
