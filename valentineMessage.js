function toggleMessage() {
  // Get the Valentine message, envelope elements, More button, More message, and flying hearts container
  const message = document.getElementById('valentineMessage');
  const envelope = document.getElementById('envelope');
  const moreBtn = document.getElementById('moreBtn');
  const moreMessage = document.getElementById('moreMessage');
  const flyingHeartsContainer = document.getElementById('flyingHearts');

  // Toggle the visibility of the message and envelope
  if (message.classList.contains('hidden')) {
    // Show the Valentine message
    message.classList.remove('hidden');
    envelope.innerHTML = "<p>Click the heart to close the message! ❤️</p>";
    
    moreMessage.classList.remove('hidden'); // Hide extra message initially
    
    // Trigger the flying hearts animation
    createFlyingHearts(flyingHeartsContainer);
  } else {
    // Hide the Valentine message
    message.classList.add('hidden');
    envelope.innerHTML = "<p>Click the heart to open the message!</p>";
    
    moreMessage.classList.add('hidden');
  }
}

function createFlyingHearts(container) {
  // Create flying hearts
  for (let i = 0; i < 15; i++) {  // Create more hearts
    const heart = document.createElement('div');
    heart.classList.add('flying-heart');
    heart.innerHTML = '❤️';
    heart.style.left = `${Math.random() * 100}%`;  // Random horizontal position
    heart.style.bottom = `${Math.random() * 50}%`;  // Random vertical position
    heart.style.animationDuration = `${Math.random() * 2 + 4}s`;  // Random duration for the animation
    heart.style.animationDelay = `${Math.random() * 2}s`;  // Random delay for starting animation
    container.appendChild(heart);

    // Remove the heart after animation ends
    heart.addEventListener('animationend', () => {
      heart.remove();
    });
  }
}