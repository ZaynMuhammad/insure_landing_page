// Run checkForShowList() every time toggleDropdown is executed to maintain margins.
function toggleDropdown() {
  document.getElementById("nav-list").classList.toggle("show-list");
  checkForShowList();
}

function checkForShowList() {
  if (document.getElementById("nav-list").classList.contains("show-list")) {
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

function removeMobileNav() {
  if (window.innerWidth === 768) {
    document.getElementById("nav-list").classList.remove("show-list");
  }
}

// Run it once on window start up
checkForShowList();
removeMobileNav();
