const download = require('image-downloader');

// download 500 images 1- 500
for (let i = 1; i < 501; i++) {
  download.image({
    url: 'https://loremflickr.com/1280/720?random=1',
    dest: `./backgroundImg/wudu-background-${i}.jpg`,
  })
    .then(({ filename, image }) => {
      console.log('File saved to', filename);
    })
    .catch((err) => {
      console.error(err);
    });
}
