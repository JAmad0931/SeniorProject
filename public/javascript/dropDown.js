// Function for drop down menu account links
function dropDownFunc() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown account menu if the user clicks outside of it
window.addEventListener("click", function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
})
// Function for drop down menu of navbar links if the webpage is a certain width
function burgerDropdown() {
  document.getElementById("burgerDropdown").classList.toggle("show");
}

// Close the dropdown burger menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var burgerdropdowns = document.getElementsByClassName("burgerDropdown-content");
    var i;
    for (i = 0; i < burgerdropdowns.length; i++) {
      var openburgerDropdown = burgerdropdowns[i];
      if (openburgerDropdown.classList.contains('show')) {
        openburgerDropdown.classList.remove('show');
      }
    }
  }
}
