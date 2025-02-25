//img
(function () {
  const baseUrl1 = `../img/12/The Good Wife/`;

  const imgList = [];
  for (let i = 0; i <= 57; i++) {
    imgList.push(`${baseUrl1}${i}.jpg`);
  }

 

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
