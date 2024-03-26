function toDataURL(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    var reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}



const upload = (data) => {
  let size = data.files[0].size.toFixed(2);
  let count = 0;

  if (size > 2000000000) {
    document.querySelector("#err").innerHTML = `Không được up file quá 2GB!`;
    return;
  } else document.querySelector("#err").innerHTML = "";



  if (/^image/gim.test(data.files[0].type)) {
    document.querySelector("img").src = `${URL.createObjectURL(data.files[0])}`;
    document.querySelector("img").style.zIndex = 10;
  }

  toDataURL(URL.createObjectURL(data.files[0]), function (dataUrl) {
    console.log('RESULT:', dataUrl)
  })

  for (let i = 0; i < 3; i++) {
    if (size.length >= 6) {
      size /= 1024;
      size = size.toFixed(2);
      count++;
    }
  }

  if (data.files[0].name.length >= 30) {
    document.querySelector("#name").innerHTML = `${data.files[0].name.slice(
      0,
      30
    )}...`;
  } else document.querySelector("#name").innerHTML = `${data.files[0].name}`;

  if (count == 1) {
    document.querySelector("#size").innerHTML = `${size} KB`;
  } else if (count == 2) {
    document.querySelector("#size").innerHTML = `${size} MB`;
  } else document.querySelector("#size").innerHTML = `${size} GB`;
};
