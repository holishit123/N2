//img
(function () {
  const imgList = [];
  const baseUrl1 = `../img/3/Ntr Midnight Pool Season 2/1/`;
  for (let i = 1; i <= 64; i++) {
    imgList.push(`${baseUrl1}${i}.jpg`);
  }

  const baseUrl2 = `../img/3/Ntr Midnight Pool Season 2/2/`;
  for (let i = 1; i <= 64; i++) {
    imgList.push(`${baseUrl2}${i}.jpg`);
  }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
