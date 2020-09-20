// Animation



window.addEventListener('load', () => {
	const preload = document.querySelector('.preload');
	preload.classList.add('preload-finish');
});



const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');


	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
		

		navLinks.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation = '';
			}
			else{
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});

		burger.classList.toggle('toggle');
	});

}

navSlide();







// Form Validation




function indexvalidate(){
	var dat = document.querySelector('input[type="date"]');
	var q = new Date();
     var date = new Date(q.getFullYear(),q.getMonth(),q.getDate());
     var mydate = new Date(document.getElementById('datee').value);

	if(document.index.source.selectedIndex==0){
		sou.style.border = "solid 2px #b30000";
		document.getElementById("source").innerHTML = "** Enter your Source";
		return false;
	}

	else if(document.index.destination.selectedIndex==0){
		des.style.border = "solid 2px #b30000";
		document.getElementById("destination").innerHTML = "** Enter your Destination";
		return false;
	}

	else if(dat.value == ""){
		datee.style.border = "solid 2px #b30000";
		document.getElementById("dd").innerHTML = "** Enter Date";
		return false;
	}

	else if(date > mydate){
		datee.style.border = "solid 2px #b30000";
		document.getElementById("dd").innerHTML = "** Enter Valid Date";
		return false;
	}

	else{
		return true;
	}
}


function checkbox1(){
	sou.style.border = "solid 1px #33cc33";
	document.getElementById("source").innerHTML = "";

	des.style.border = "solid 1px #33cc33";
	document.getElementById("destination").innerHTML = "";

	datee.style.border = "solid 1px #33cc33";
	document.getElementById("dd").innerHTML = "";
}








//Login Vaidate





function loginvalidate(){
	var username = document.getElementById("username");
	var password = document.getElementById("password");

	if (username.value.trim() == "") {
		username.style.border = "solid 2px #b30000";
		document.getElementById("uname").innerHTML = "** Please Enter Username";
		return false;
	}

	else if (password.value.trim() == "") {
		password.style.border = "solid 2px #b30000";
		document.getElementById("pass").innerHTML = "** Please Enter Password";
		return false;
	}

	else{
		return true;
	}
}


function checkbox(){
	username.style.border = "solid 1px #33cc33";
	document.getElementById("uname").innerHTML = "";
	
	password.style.border = "solid 1px #33cc33";
	document.getElementById("pass").innerHTML = "";

}





// Sign Up Validation




function signupvalidate(){
	var firstname = document.getElementById("firstname");
	var lastname = document.getElementById("lastname");
	var emailid = document.getElementById("emailid");
	var age = document.getElementById("age");
	var password = document.getElementById("password");
	var cpassword = document.getElementById("cpassword");
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;



	if (firstname.value.trim() == "") {
		firstname.style.border = "solid 2px #b30000";
		document.getElementById("fname").innerHTML = "**Enter Firstname";
		return false;
	}

	else if (lastname.value.trim() == "") {
		lastname.style.border = "solid 2px #b30000";
		document.getElementById("lname").innerHTML = "** Enter Lastname";
		return false;
	}

	else if (emailid.value.trim() == "") {
		emailid.style.border = "solid 2px #b30000";
		document.getElementById("eid").innerHTML = "** Enter Email Id";
		return false;
	}

	if (reg.test(emailid.value) == false) {
		emailid.style.border = "solid 2px #b30000";
		document.getElementById("eid").innerHTML = "** Enter Valid Email Id";
		return (false);
    }

	else if ((document.getElementById("male").checked == false) && (document.getElementById("female").checked == false)) {
		document.getElementById("radio").innerHTML = "** Select Gender";
		return false;
	}

	else if (age.value.trim() == "") {
		age.style.border = "solid 2px #b30000";
		document.getElementById("agee").innerHTML = "** Enter Age";
		return false;
	}

	else if (age.value <= 0 ) {
		age.style.border = "solid 2px #b30000";
		document.getElementById("agee").innerHTML = "** Enter Valid Age";
		return false;
	}

	else if (password.value.trim() == "") {
		password.style.border = "solid 2px #b30000";
		document.getElementById("pass").innerHTML = "** Enter Password";
		return false;
	}

	else if (password.value.length <5) {
		password.style.border = "solid 2px #b30000";
		document.getElementById("pass").innerHTML = "** Enter Minimun 5 Letter Password";
		return false;
	}

	else if (cpassword.value.trim() == "") {
		cpassword.style.border = "solid 2px #b30000";
		document.getElementById("cpass").innerHTML = "** Enter Password Again";
		return false;
	}

	else if (!(cpassword.value == password.value)) {
		cpassword.style.border = "solid 2px #b30000";
		document.getElementById("cpass").innerHTML = "** Password Not Matching";
		return false;
	}

	else{
		return true;
	}
}


function checkbox2(){
	firstname.style.border = "solid 1px #33cc33";
		document.getElementById("fname").innerHTML = "";

	lastname.style.border = "solid 1px #33cc33";
		document.getElementById("lname").innerHTML = "";

	emailid.style.border = "solid 1px #33cc33";
		document.getElementById("eid").innerHTML = "";

	age.style.border = "solid 1px #33cc33";
		document.getElementById("agee").innerHTML = "";

	password.style.border = "solid 1px #33cc33";
		document.getElementById("pass").innerHTML = "";
	
	cpassword.style.border = "solid 1px #33cc33";
		document.getElementById("cpass").innerHTML = "";

	document.getElementById("radio").innerHTML = "";
}





//Coutact Us Validate





function contactvalidate(){
	var firstname = document.getElementById("firstname");
	var lastname = document.getElementById("lastname");
	var emailid = document.getElementById("emailid");
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;



	if (firstname.value.trim() == "") {
		firstname.style.border = "solid 2px #b30000";
		document.getElementById("fname").innerHTML = "**Enter Firstname";
		return false;
	}

	else if (lastname.value.trim() == "") {
		lastname.style.border = "solid 2px #b30000";
		document.getElementById("lname").innerHTML = "** Enter Lastname";
		return false;
	}

	else if (emailid.value.trim() == "") {
		emailid.style.border = "solid 2px #b30000";
		document.getElementById("eid").innerHTML = "** Enter Email Id";
		return false;
	}

	if (reg.test(emailid.value) == false) {
		emailid.style.border = "solid 2px #b30000";
		document.getElementById("eid").innerHTML = "** Enter Valid Email Id";
		return (false);
    }

    else if (textarea.value.trim() == "") {
		textarea.style.border = "solid 2px #b30000";
		document.getElementById("ta").innerHTML = "** Enter your Subject";
		return false;
	}
	

	else{
		return true;
	}
}



function checkbox3(){
	firstname.style.border = "solid 1px #33cc33";
		document.getElementById("fname").innerHTML = "";

	lastname.style.border = "solid 1px #33cc33";
		document.getElementById("lname").innerHTML = "";

	emailid.style.border = "solid 1px #33cc33";
		document.getElementById("eid").innerHTML = "";

	textarea.style.border = "solid 1px #33cc33";
		document.getElementById("ta").innerHTML = "";

}