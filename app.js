const container =
  document.querySelector(
    ".div-container"
  ); /* takes HTML element with the class "div-container" and storing it in the container variable. */
const nextBtn =
  document.querySelector(
    ".next"
  ); /* selects the HTML elements with class "next" and stores it in the nextBtn variables */
const prevBtn =
  document.querySelector(
    ".previous"
  ); /* selects the HTML elements with class "previous" and stores it in the prevBtn variables */
let currentIndex = 0; /* The 'currentIndex' variable is initialized with a value of 0. This variable will keep track of the current slide index. */

const nextSlide = (inc) => {
  /* The nextSlide function is defined. It takes a parameter inc which represents the increment value for the slide index. */
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display =
      "none"; /*  all the HTML elements with the class "slide" and stores them in the slides variable. 
    It then loops over each slide element and sets their display CSS property to "none", effectively hiding all the slides. */
  }
  currentIndex =
    (currentIndex + slides.length + inc) %
    slides.length; /* The currentIndex is updated by adding the inc value, which represents the increment or decrement for the slide index. The modulus operator % is used to ensure that the index remains within the valid range of slides. */
  slides[currentIndex].style.display =
    "block"; /* the slide at the updated currentIndex is displayed by setting its display CSS property to "block". */
};

nextSlide(
  0
); /* The nextSlide(0) is called initially to display the first slide. */

nextBtn.addEventListener("click", () => {
  /* Event listeners are added to the next and previous buttons (nextBtn and prevBtn). 
                                             When the next button is clicked, the nextSlide function is called with an increment of 1, moving to the next slide. 
                                             Similarly, when the previous button is clicked, the nextSlide function is called with an increment of -1, moving to the previous slide. */
  nextSlide(1);
});

prevBtn.addEventListener("click", () => {
  nextSlide(-1);
});

/* Overall, this code sets up a simple slideshow functionality. 
When the next or previous buttons are clicked, it hides the current slide and shows the next or previous slide, respectively. */

/* Pop up event */
function showAlert() {
  alert("Verdens mest irriterende pop up alert!");
}

/* Available searches */
var trekkingRoute = [
  {
    name: "Salcantay",
    elevation: "6,271 m",
    category: ["challenging", "moderate"],
    location: "Peru",
  },
  {
    name: "John Muir Trail",
    elevation: "4.446 m",
    category: ["challenging", "moderate"],
    location: ["California", "USA"],
  },
  {
    name: "Mount Elgon",
    elevation: "4,321 m",
    category: ["average", "medium"],
    location: ["Kenya", "Uganda"],
  },
  {
    name: "Appalachian Trail",
    elevation: "2,025 m",
    category: ["average", "advanced", "challenging"],
    location: [
      "USA",
      "Maine",
      "New York",
      "Vermont",
      "Maryland",
      "West Virginia",
    ],
  },
  {
    name: "Tour du Mont Blanc",
    elevation: "2,665 m",
    category: ["difficult", "advanced"],
    location: ["Italy", "Switzerland", "France "],
  },
  {
    name: "Tiger’s Nest",
    elevation: "3,120 m",
    category: ["challenging", "advanced", "difficult"],
    location: ["Bhutan", "Asia"],
  },
  {
    name: "Larapinta Trail",
    elevation: "1,380m",
    category: ["medium", "average"],
    location: ["Australia"],
  },
  {
    name: "Mount Kilimanjaro",
    elevation: "5,895 m",
    category: ["average", "medium"],
    location: ["Tanzania"],
  },
  {
    name: "Atlas Mountains",
    elevation: "4,167 m",
    category: ["demanding", "average", "medium", "moderate"],
    location: ["Morocco"],
  },
  {
    name: "Great Ocean Walk",
    elevation: "276 m",
    category: ["easy", "medium", "average"],
    location: ["Australia"],
  },
];
// End of array

// Search function - virker ikke. Kan ikke løse det
function search() {
  const searchValue = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const resultList = document.getElementById("myList");

  const RESULTS = trekkingRoute.filter(function (route) {
    return (
      route.name.toLowerCase().includes(searchValue) ||
      route.elevation.toLowerCase().includes(searchValue) ||
      route.category.some((category) =>
        category.toLowerCase().includes(searchValue)
      ) ||
      route.location.toLowerCase().includes(searchValue)
    );
  });

  resultList.innerHTML = "";

  RESULTS.forEach(function (result) {
    const li = document.createElement("li");

    const h3 = document.createElement("h3");
    h3.textContent = "Name: " + result.name;
    li.appendChild(h3);

    const spanElevation = document.createElement("span");
    spanElevation.textContent = "Elevation: " + result.elevation;
    li.appendChild(spanElevation);

    const ul = document.createElement("ul");

    const liCategory = document.createElement("li");
    liCategory.textContent = "Category: " + result.category.join(", ");
    ul.appendChild(liCategory);

    const liLocation = document.createElement("li");
    liLocation.textContent = "Location: " + result.location;
    ul.appendChild(liLocation);

    li.appendChild(ul);

    resultList.appendChild(li);
  });
}

function searchTitle(keyword, title) {
  return title.toLowerCase().includes(keyword);
}

const compare = (a, b) => a == b;

function findInArray(haystack, needle) {
  return haystack.find(function (item) {
    return item.toLowerCase().includes(needle);
  });
}
