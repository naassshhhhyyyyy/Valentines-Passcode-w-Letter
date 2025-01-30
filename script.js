// Global variable to store the passcode
let passcode = "";

// Function to handle user's name and birthday answer
function handleUserName() {
  const userName = document.getElementById('userName').value;

  // Check if name is entered
  if (!userName.trim()) {
    alert("Please enter your name.");
    return;
  }

  // Store the name and check birthday
  localStorage.setItem('userName', userName);
  setTimeout(() => {
    window.location.href = "valentinePasscode.html"; // Redirect to passcode page
  }, 3000); // Wait for 3 seconds
}

// Add number to the passcode input
function appendNumber(num) {
  if (passcode.length < 4) {
    passcode += num;
    document.getElementById('passcode').value = passcode;
  }
}

// Validate the entered passcode
function validatePasscode() {
  const correctPasscodeYes = "0424"; // Correct passcode for "Yes"
  const message = document.getElementById('message');

  // Validate passcode only for the 'Yes' case
  if (passcode === correctPasscodeYes) {
    message.textContent = "Access Granted ❤️";
    message.style.color = "green";
    setTimeout(() => {
      window.location.href = "valentine.html"; // Redirect to the actual content page
    }, 1500); // Redirect after 1.5 seconds
  } else {
    message.textContent = "Incorrect passcode. Try again!";
    message.style.color = "red";
    passcode = ""; // Clear the entered passcode
    document.getElementById('passcode').value = "";
  }
}

// Display the user name if redirected to second page
if (window.location.pathname.includes("valentinePasscode.html")) {
  const userName = localStorage.getItem('userName');
  document.getElementById('userNameDisplay').textContent = userName;
}