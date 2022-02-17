// asynchronous javascript

// callback functions


function download(url, success, failure) {
  setTimeout(() => {
    console.log('downloading the' + url);
    let error = url.length === 0 | !url;
    error ? failure(url) : success(url);
  }, 3000);
}

let url = 'https://linkedin.com/in/mmkvarma/';

download(url, function (url) {
  console.log(`processing the ${url}`);
  download (url , function (url) {
    console.log(`processing the ${url}`);
    download(url, function (url) {
      console.log(`processing the ${url}`);
    })
  }) 
}, function (url) {
  console.log('handling errors');
});