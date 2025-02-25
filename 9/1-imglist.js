//img
(function () {
  const imgList = [];
  const baseUrl1 = `../img/9/Hachishaku Hachiwa Keraku Meguri/1/`;
  const baseUrl2 = `../img/9/Hachishaku Hachiwa Keraku Meguri/2/`;
  const baseUrl3 = `../img/9/Hachishaku Hachiwa Keraku Meguri/3/`;
  const baseUrl4 = `../img/9/Hachishaku Hachiwa Keraku Meguri/4/`;
  const baseUrl5 = `../img/9/Hachishaku Hachiwa Keraku Meguri/5/`;
  const baseUrl6 = `../img/9/Hachishaku Hachiwa Keraku Meguri/6/`;
  const baseUrl7 = `../img/9/Hachishaku Hachiwa Keraku Meguri/7/`;
  const baseUrl8 = `../img/9/Hachishaku Hachiwa Keraku Meguri/8/`;

  for (let i = 0; i <= 34; i++) {
    imgList.push(`${baseUrl1}${i}.jpg`);
  }

  for (let i = 0; i <= 23; i++) {
    imgList.push(`${baseUrl2}${i}.jpg`);
  }

  for (let i = 0; i <= 23; i++) {
    imgList.push(`${baseUrl3}${i}.jpg`);
  }

  for (let i = 0; i <= 26; i++) {
    imgList.push(`${baseUrl4}${i}.jpg`);
  }
  for (let i = 0; i <= 25; i++) {
    imgList.push(`${baseUrl5}${i}.jpg`);
  }
  for (let i = 0; i <= 26; i++) {
    imgList.push(`${baseUrl6}${i}.jpg`);
  }
  for (let i = 0; i <= 22; i++) {
    imgList.push(`${baseUrl7}${i}.jpg`);
  }
  for (let i = 0; i <= 27; i++) {
    imgList.push(`${baseUrl8}${i}.jpg`);
  }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
