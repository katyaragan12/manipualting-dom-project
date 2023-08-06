
const pButton = document.getElementById("p-button");
const imgButton = document.getElementById("img-button");
const pDiv = document.getElementById("p-div");
const imgDiv = document.getElementById("img-div");


pButton.addEventListener("click", function () {
  
  pDiv.style.display = "block";
  imgDiv.style.display = "none";


  const newParagraph = document.createElement("p");
  newParagraph.textContent = "This is a new paragraph added dynamically!";
  pDiv.appendChild(newParagraph);
});

imgButton.addEventListener("click", function () {
  // Show img-div and hide p-div
  imgDiv.style.display = "block";
  pDiv.style.display = "none";

  // Add a new image to img-div
  const newImage = document.createElement("img");
  newImage.src = "Image.png"; 
  newImage.alt = "Image";
  imgDiv.appendChild(newImage);
});
