	function mouseOver1() {
		submit.style.background = "blue";
		submit.style.color = "white";
	}

	function mouseLeave1() {
		submit.style.background = "white";
		submit.style.color = "black"
	}

	function mouseOver2() {
		ticketprice.style.background = "blue";
		ticketprice.style.color = "white";
	}

	function mouseLeave2() {
		ticketprice.style.background = "white";
		ticketprice.style.color = "black"
	}

	function mouseOver3() {
		printticket.style.background = "blue";
		printticket.style.color = "white";
	}

	function mouseLeave3() {
		printticket.style.background = "white";
		printticket.style.color = "black"
	}

	function mouseOver4() {
		onemore.style.background = "blue";
		onemore.style.color = "white";
	}

	function mouseLeave4() {
		onemore.style.background = "white";
		onemore.style.color = "black"
	}

// alert for buttons
    function submitInfo() {
    	var fullname = document.getElementById("fullName").value;
    	window.alert("Thank you, " + fullname + "!" + " Please proceed to the next station.");
    }

    function checkDiscount() {
    	let seatType = document.getElementById("seatArrangment").value;
    	let userType = document.getElementById("options").value;
    	// gets original price based on the type of city
    	let originalPrice;
    	if (seatType === "greenhills") {originalPrice = 250;}
    	if (seatType === "fairview") {originalPrice = 350;}
    	if (seatType === "las pinas") {originalPrice = 450;}
    	// adds the discount
    	let discountMultiplier = (userType === "student") * 0.3;
    	let discountedPrice = originalPrice - (originalPrice * discountMultiplier);

    	window.alert('Your total price is ₱' + discountedPrice.toFixed(2) + "!" + " Please proceed to the next station.");
    }

    function printingTicket() {
    	var emailaddress = document.getElementById("emailAddress").value;
    	window.alert("Your ticket has been sent to your email, " + emailaddress + "! Thanks for booking! Please proceed to the Schedules Tab!");
    }
