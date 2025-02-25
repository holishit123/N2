//img
(function () {
  const baseUrl1 = `../img/14/Fugou Ichizoku no Muko ~ Tsuma Igai Zenin Ore no Onna/1/`;
  const baseUrl2 = `../img/14/Fugou Ichizoku no Muko ~ Tsuma Igai Zenin Ore no Onna/2/`;
  const baseUrl3 = `../img/14/Fugou Ichizoku no Muko ~ Tsuma Igai Zenin Ore no Onna/3/`;
  const baseUrl4 = `../img/14/Fugou Ichizoku no Muko ~ Tsuma Igai Zenin Ore no Onna/4/`;
  const baseUrl5 = `../img/14/Fugou Ichizoku no Muko ~ Tsuma Igai Zenin Ore no Onna/5/`;
  const baseUrl6 = `../img/14/Fugou Ichizoku no Muko ~ Tsuma Igai Zenin Ore no Onna/6/`;


  const imgList = [];
  for (let i = 0; i <= 27; i++) {
    imgList.push(`${baseUrl1}${i}.jpg`);
  }

  for (let i = 0; i <= 23; i++) {
    imgList.push(`${baseUrl2}${i}.jpg`);
  }

  for (let i = 0; i <= 26; i++) {
    imgList.push(`${baseUrl3}${i}.jpg`);
  }

  for (let i = 0; i <= 23; i++) {
    imgList.push(`${baseUrl4}${i}.jpg`);
  }

  for (let i = 0; i <= 15; i++) {
    imgList.push(`${baseUrl5}${i}.jpg`);
  }

  for (let i = 0; i <= 23; i++) {
    imgList.push(`${baseUrl6}${i}.jpg`);
  }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
