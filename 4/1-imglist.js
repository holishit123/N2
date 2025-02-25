//img
(function () {
  const baseUrl = `../img/4/Chichiue ga Charao ni Oil Massage de Otosareru Hon/`;
  const imgList = [];
  for (let i = 1; i <= 24; i++) {
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
