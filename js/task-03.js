const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulGallery = document.querySelector("ul.gallery");

const galleryContent = images.map(image => `
  <li>
    <img src="${image.url}" alt="${image.alt}" style="max-width: 100%; height: auto;">
  </li>
`).join(""); 

ulGallery.insertAdjacentHTML("beforeend", galleryContent);

ulGallery.classList.add("flex-gallery");

// Dodaj style CSS
ulGallery.style.display = "flex";
ulGallery.style.flexWrap = "none";
ulGallery.style.justifyContent = "space-between";
ulGallery.style.listStyle = "none";
ulGallery.style.padding = "0";
ulGallery.style.margin = "0";
ulGallery.style.gap = "10px";
ulGallery.style.alignItems = "center";
ulGallery.style.alignContent = "flex-start";
ulGallery.style.maxWidth = "auto";