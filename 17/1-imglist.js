//img
(function () {
  const baseUrl = `../img/17/Vợ Cấp Dưới Của Tôi/`;
  const imgList = [];
  for (let i = 0; i <= 66; i++) {
    imgList.push(`${baseUrl}${i}.jpg`);
  }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
