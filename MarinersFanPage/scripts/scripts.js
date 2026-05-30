	/*
		Student Name: Jose Camacho
		File Name: script.js
		Date: 5/25/26
	*/
	
	//Hamburger menu function
	function hamburger() {
		var menu = document.getElementById("menu-links");
		var logo = document.getElementById("ms-logo");
		if (menu.style.display === "block" && logo.style.display === "none") {
			menu.style.display = "none";
			logo.style.display = "block";
		} else {
			menu.style.display = "block";
			logo.style.display = "none";
		}
	}