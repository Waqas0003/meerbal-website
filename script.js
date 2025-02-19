// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("External GitHub JS file loaded successfully!");

    // Create a new button element
    let btn = document.createElement("button");
    btn.innerText = "Click Me!";
    btn.style.padding = "10px 20px";
    btn.style.fontSize = "16px";
    btn.style.cursor = "pointer";
    btn.style.backgroundColor = "#007BFF";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.borderRadius = "5px";

    // Append button to the body
    document.body.appendChild(btn);

    // Add click event listener
    btn.addEventListener("click", function () {
        alert("Hello! This is a dummy JavaScript file from GitHub.");
    });
});
