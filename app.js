// this array contains all 16 hexadecimal digits
const hexArr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

// a javascript function we will use when our HTML button is clicked
function updateColor() {
  // create the color string
  let colorString = "#";
  // use a for loop to create a random hex color
  for (let i = 0; i <= 6; i++) {
    // generate random number
    const randomNumber = Math.floor(Math.random() * 17);
    // add random hex digit by using the random number as an index on hexArr
    colorString += hexArr[randomNumber];
    // change the background color of the body to the randomly generated hex color
    document.body.style.backgroundColor = colorString;
  }
}

// I kinda went a little further with this than needed but hopefully that is okay.
