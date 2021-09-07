// Run checkForShowList() every time toggleDropdown is executed to maintain margins.
function toggleDropdown() {
  document.getElementById("dropdown-content").classList.toggle("show-list");
  checkForShowList();
}

function checkForShowList() {
  if (
    document.getElementById("dropdown-content").classList.contains("show-list")
  ) {
    document.querySelector("header").style.marginBottom = "1em";
    document.querySelector(".dropbtn").style.marginBottom = "0";

    // Nav is closed, so switch icon back to hamburger icon
    document
      .querySelector(".nav-icon")
      .setAttribute("src", "images/icon-hamburger.svg");
    console.log("true");
  } else {
    document.querySelector("header").style.marginBottom = "0";
    document.querySelector(".dropbtn").style.marginBottom = "1em";

    // Nav is opened, so switch icon to X icon
    document
      .querySelector(".nav-icon")
      .setAttribute("src", "images/icon-close.svg");
    console.log("false");
  }
}

// Run it once on window start up
checkForShowList();
