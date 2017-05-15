var validf=false, validl=false, valide=false, validp=false, validmatch=false, validpn=false;


function validfname() {
	var x = document.getElementById("first").value;

	var valid1 = true, valid2 = true, valid3 = true;

	if(x=="")
	{
		document.getElementById("fname").classList.add("has-error");
		document.getElementById("frequired").style.display = "block";
		valid1 = false;
	}

	if(x.length < 2)
	{
		document.getElementById("fmin2").style.display = "block";
		document.getElementById("fname").classList.add("has-error");
		valid2 = false;
	}

	if(!(/^[a-zA-Z]+$/.test(x)))
	{
		document.getElementById("fonly-letters").style.display = "block";
		document.getElementById("fname").classList.add("has-error");
		valid3 = false;
	}

	if(valid1===true && valid2 ===true && valid3===true && document.getElementById("fname").classList.contains('has-error') )
	{
		document.getElementById("fname").classList.remove("has-error");
		validf = true;
	}

	if(valid1===true)
	{
		document.getElementById("frequired").style.display = "none";
	}

	if(valid2===true)
	{
		document.getElementById("fmin2").style.display = "none";
	}

	if(valid3===true)
	{
		document.getElementById("fonly-letters").style.display = "none";
	}
	
};

function validlname() {
	var x = document.getElementById("last").value;

	var valid1 = true, valid2 = true;

	if(x=="")
	{
		document.getElementById("lname").classList.add("has-error");
		document.getElementById("lrequired").style.display = "block";
		valid1 = false;
	}

	if(!(/^[a-zA-Z]+$/.test(x)))
	{
		document.getElementById("lonly-letters").style.display = "block";
		document.getElementById("lname").classList.add("has-error");
		valid2 = false;
	}

	if(valid1===true && valid2 ===true && document.getElementById("lname").classList.contains('has-error') )
	{
		document.getElementById("lname").classList.remove("has-error");
		validl = true;
	}

	if(valid1===true)
	{
		document.getElementById("lrequired").style.display = "none";
	}

	if(valid2===true)
	{
		document.getElementById("lonly-letters").style.display = "none";
	}

};

function validphno() {
	
	var x = document.getElementById("phno").value;

	var valid1 = true, valid2 = true, valid3 = true;

	if(x=="")
	{
		document.getElementById("pno").classList.add("has-error");
		document.getElementById("prequired").style.display = "block";
		valid1 = false;
	}

	if(x.length != 10)
	{
		document.getElementById("dig10").style.display = "block";
		document.getElementById("pno").classList.add("has-error");
		valid2 = false;
	}

	if(!(/^[0-9]+$/.test(x)))
	{
		document.getElementById("only-numbers").style.display = "block";
		document.getElementById("pno").classList.add("has-error");
		valid3 = false;
	}

	if(valid1===true && valid2 ===true && valid3===true && document.getElementById("pno").classList.contains('has-error') )
	{
		document.getElementById("pno").classList.remove("has-error");
		validpn = true;
	}

	if(valid1===true)
	{
		document.getElementById("prequired").style.display = "none";
	}

	if(valid2===true)
	{
		document.getElementById("dig10").style.display = "none";
	}

	if(valid3===true)
	{
		document.getElementById("only-numbers").style.display = "none";
	}
	
};

function validemail() {
	var x = document.getElementById("email").value;

	var valid1 = true, valid2 = true;

	if(x=="")
	{
		document.getElementById("mail").classList.add("has-error");
		document.getElementById("erequired").style.display = "block";
		valid1 = false;
	}

	if( !( /([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/.test(x) ) )
	{
		document.getElementById("etype").style.display = "block";
		document.getElementById("mail").classList.add("has-error");
		valid2 = false;
	}

	if(valid1===true && valid2 ===true && document.getElementById("mail").classList.contains('has-error') )
	{
		document.getElementById("mail").classList.remove("has-error");
		valide = true;
	}

	if(valid1===true)
	{
		document.getElementById("erequired").style.display = "none";
	}

	if(valid2===true)
	{
		document.getElementById("etype").style.display = "none";
	}

};

function passvalid() {
	var x = document.getElementById("pass").value;

	var valid1 = true, valid2 = true, valid3 = true, valid4 = true;

	if(x=="")
	{
		document.getElementById("pgroup").classList.add("has-error");
		document.getElementById("passrequired").style.display = "block";
		valid1 = false;
	}

	if(x.length < 6)
	{
		document.getElementById("short").style.display = "block";
		document.getElementById("pgroup").classList.add("has-error");
		valid2 = false;
	}

	if(x.length > 15)
	{
		document.getElementById("long").style.display = "block";
		document.getElementById("pgroup").classList.add("has-error");
		valid3 = false;
	}

	if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/.test(x)))
	{
		document.getElementById("pattern").style.display = "block";
		document.getElementById("pgroup").classList.add("has-error");
		valid4 = false;
	}

	if(valid1===true && valid2 ===true && valid3===true  && valid4===true && document.getElementById("pgroup").classList.contains('has-error') )
	{
		document.getElementById("pgroup").classList.remove("has-error");
		validp = true;
	}

	if(valid1===true)
	{
		document.getElementById("passrequired").style.display = "none";
	}

	if(valid2===true)
	{
		document.getElementById("short").style.display = "none";
	}

	if(valid3===true)
	{
		document.getElementById("long").style.display = "none";
	}

	if(valid4===true)
	{
		document.getElementById("pattern").style.display = "none";
	}

	matchpass();
	
};

function matchpass()
{
	var pass = document.getElementById("pass").value;
	var cpass = document.getElementById("cpass").value;

	var valid = true;

	if(!(cpass===pass))
	{
		document.getElementById("pamatch").classList.add('has-error');
		valid = false;
		document.getElementById("match").style.display = "block";
	}

	if(valid)
	{
		document.getElementById("pamatch").classList.remove('has-error');
		document.getElementById("match").style.display = "none";
		validmatch = true;
	}
};

function submitter()
{
	
	validfname();
	validlname();
	validphno();
	validemail();
	passvalid();

	console.log(validf);
	console.log(validl);
	console.log(valide);
	console.log(validp);
	console.log(validpn);
	console.log(validmatch);

	if(validmatch===true)
	{
		alert("Form Submitted Successfully");
	}
}