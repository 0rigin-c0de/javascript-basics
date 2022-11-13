const Icons = [
  { Name: "Elon Musk", position: "1" },
  { Name: "Bill Gates", position: "2" },
  { Name: "Ratan Tata", position: "3" },
  { Name: "Sundar Pichai", position: "4" },
  { Name: "Rishi Sonak", position: "5" },
  { Name: "Mark Zuckerberg", position: "6" },
];
/* filter the icons who are on the top 3 position */
const icons = Icons.filter(function (icon) {
  if (Icons.position >= 1 && Icons.position <= 3) {
    return true;
  }
});
console.table(icons);
