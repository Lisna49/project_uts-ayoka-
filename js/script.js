const $stack = $(".stack");
const $cards = $stack.children(".card").get().reverse();

// Append the reversed cards back to the stack
$stack.append($cards);

function moveCard() {
  const $lastCard = $stack.children(".card").last();

  // Add the 'swap' class for animation
  $lastCard.addClass("swap");

  // Remove the class and move the card to the top after the animation ends
  setTimeout(() => {
    $lastCard.removeClass("swap");
    $stack.prepend($lastCard);
  }, 1200);
}

// Set an interval to autoplay the card movement
let autoplayInterval = setInterval(moveCard, 4000);

// Add click event listener to the cards
$stack.on("click", ".card", function () {
  const $clickedCard = $(this);
  const $lastCard = $stack.children(".card").last();

  // Check if the clicked card is the last card
  if ($clickedCard.is($lastCard)) {
    $clickedCard.addClass("swap");

    setTimeout(() => {
      $clickedCard.removeClass("swap");
      $stack.prepend($clickedCard);
    }, 1200);
  }
});
