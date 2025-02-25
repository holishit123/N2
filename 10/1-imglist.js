//img
(function () {
  const baseUrl0 = `../img/10/Có Thai Nhưng Tử Cung Tôi Vẫn Đầy Ứ/0/`;
  const baseUrl1 = `../img/10/Có Thai Nhưng Tử Cung Tôi Vẫn Đầy Ứ/1/`;
  const baseUrl2 = `../img/10/Có Thai Nhưng Tử Cung Tôi Vẫn Đầy Ứ/2/`;

  const imgList = [];
  for (let i = 0; i <= 21; i++) {
    imgList.push(`${baseUrl0}${i}.jpg`);
  }

  for (let i = 0; i <= 22; i++) {
    imgList.push(`${baseUrl1}${i}.jpg`);
  }

  for (let i = 0; i <= 21; i++) {
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
