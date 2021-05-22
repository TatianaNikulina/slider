renderImg = (event) => {
  // const bigImageSrc = event.target.src;
  // const bigImageId = +event.target.id.split("_")[1];
  const down = document.querySelector("#down");
  down.innerHTML = "";
  const picture = document.createElement("img");
  picture.src = event.target.src;
  // picture.src = bigImageSrc;
  picture.style.width = "60%";
  down.appendChild(picture);
};

const images = document.querySelectorAll("#images img");
images.forEach((img) =>
  img.addEventListener("click", (event) => {
    event.preventDefault();
    renderImg(event);
  })
);
