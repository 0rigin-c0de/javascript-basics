for (let [idx, btn] of buttons.entries()) {
  // loop is using let declaration each iteration gets new block scoped
  btn.addEventListener("click", function onClick() {
    // the loop also creates a new inner onclick();
    console.log(`Clicked on button (${idx})!`);
  });
}
