/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
let imgRef = [
  "./assets/carousel/mountains.jpeg", 
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
]
function carouselMaker(imgRef) {
  const carousel = document.createElement('div').classList.add('carousel')
  const leftBtn = document.createElement('div').classList.add('left-button')
  const img1 = document.createElement('img').src = imgRef[0]
  const img2 = document.createElement('img').src = imgRef[1]
  const img3 = document.createElement('img').src = imgRef[2]
  const img4 = document.createElement('img').src = imgRef[3]
  const rightBtn = document.createElement('div').classList.add('right-button')

  // carousel.appendChild(leftBtn)
  // carousel.appendChild(img1)
  // carousel.appendChild(img2)
  // carousel.appendChild(img3)
  // carousel.appendChild(img4)
  // carousel.appendChild(rightBtn)

  return carousel
}

console.log(carouselMaker())