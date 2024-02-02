// Get the reference to the original navbar
let originalNavbar = document.getElementById("navbar");

// Clone the navbar
let clonedNavbar1 = originalNavbar.cloneNode(true); // true indicates deep cloning

// Clone the navbar again
let clonedNavbar2 = originalNavbar.cloneNode(true);

// Insert cloned navbars into different places on the webpage
document.getElementById("navbarContainer1").appendChild(clonedNavbar1);
document.getElementById("navbarContainer2").appendChild(clonedNavbar2);
