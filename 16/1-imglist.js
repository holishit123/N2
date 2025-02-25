//img
(function () {
  const baseUrl1 = `../img/16/If My Wife Cheats On Me/1/`;
  const baseUrl2 = `../img/16/If My Wife Cheats On Me/2/`;
  const baseUrl3 = `../img/16/If My Wife Cheats On Me/3/`;

  const imgList = [];
  for (let i = 0; i <= 22; i++) {
    imgList.push(`${baseUrl1}${i}.jpg`);
  }

  for (let i = 0; i <= 20; i++) {
    imgList.push(`${baseUrl2}${i}.jpg`);
  }

  for (let i = 0; i <= 23; i++) {
    imgList.push(`${baseUrl3}${i}.jpg`);
  }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
