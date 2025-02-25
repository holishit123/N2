//img
(function () {
  const baseUrl = `../img/15/Bộ Sưu Tập Phụ Nữ Dưới Danh Nghĩa Điều Trị Hiếm Muộn/`;
  const imgList = [];
  for (let i = 0; i <= 40; i++) {
    const formattedNumber = String(i).padStart(2, "0");
    imgList.push(`${baseUrl}${formattedNumber}.jpg`);
  }
  for (let i = 10; i <= 40; i++) {
    const formattedNumber = String(i).padStart(3, "0");
    imgList.push(`${baseUrl}${formattedNumber}.jpg`);
  }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
