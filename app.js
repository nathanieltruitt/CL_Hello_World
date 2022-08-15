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

function updateColor() {
  let colorString = "#";
  for (let i = 0; i <= 6; i++) {
    const randomNumber = Math.floor(Math.random() * 16);
    colorString += hexArr[randomNumber];
    document.body.style.backgroundColor = colorString;
  }
}
