// Get DOM elements
const gameContainer = document.querySelector(".container"), // The container holding the game
  userResult = document.querySelector(".usuario_resultado img"), // Image element showing the user's choice
  cpuResult = document.querySelector(".cpu_resultado img"), // Image element showing the CPU's choice
  result = document.querySelector(".resultado"), // Element displaying the result of the game
  optionImages = document.querySelectorAll(".opcion_imagen"); // All the option images (Rock, Paper, Scissors)

// Loop through each option image element
optionImages.forEach((image, index) => {
  // Add a click event listener to each option image
  image.addEventListener("click", (e) => {
    // Add "active" class to the clicked image
    image.classList.add("active");

    // Reset user and CPU result images to default Rock image
    userResult.src = cpuResult.src = "img/piedra.png";
    result.textContent = "Pensando..."; // Display waiting text

    // Loop through each option image again
    optionImages.forEach((image2, index2) => {
      // Remove "active" class from all option images except the clicked one
      index !== index2 && image2.classList.remove("active");
    });

    // Add "start" class to container to trigger animations
    gameContainer.classList.add("start");

    // Set a timeout to delay the result calculation
    let time = setTimeout(() => {
      // Remove "start" class from container to stop animations
      gameContainer.classList.remove("start");

      // Get the source of the clicked option image
      let imageSrc = e.target.querySelector("img").src;
      // Set the user image to the clicked option image
      userResult.src = imageSrc;

      // Generate a random number between 0 and 2
      let randomNumber = Math.floor(Math.random() * 3);
      // Create an array of CPU image options
      let cpuImages = [
        "img/piedra.png",
        "img/papel.png",
        "img/tijera.png"
      ];
      // Set the CPU image to a random option from the array
      cpuResult.src = cpuImages[randomNumber];

      // Assign a letter value to the CPU option (R for Rock, P for Paper, S for Scissors)
      let cpuValue = ["R", "P", "T"][randomNumber];
      // Assign a letter value to the clicked option (based on index)
      let userValue = ["R", "P", "T"][index];

      // Create an object with all possible outcomes
      let outcomes = {
        RR: "Empate", // Rock vs Rock
        RP: "Cpu", // Rock vs Paper
        RT: "Usuario", // Rock vs Scissors
        PP: "Empate", // Paper vs Paper
        PR: "Usuario", // Paper vs Rock
        PT: "Cpu", // Paper vs Scissors
        TT: "Empate", // Scissors vs Scissors
        TR: "Cpu", // Scissors vs Rock
        TP: "Usuario" // Scissors vs Paper
      };

      // Look up the outcome value based on user and CPU options
      let outComeValue = outcomes[userValue + cpuValue];

      // Display the result
      result.textContent =
        userValue === cpuValue ? "Empate" : `${outComeValue} Ganador !!`;
    }, 2500); // 2.5 seconds delay before showing result
  });
});