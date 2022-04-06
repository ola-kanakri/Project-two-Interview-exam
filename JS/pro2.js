function user(name, email, password, result, answers) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.result = result;
  this.answers = answers;
}
var users = { userdata: [] }

if (localStorage.getItem("users") === null) {
  var x = new user("abood khashahsneh", "smsmspy@gmail.com", "khashashneh123*", 0, [])
  localStorage.setItem("users", JSON.stringify(users));
  var x1 = JSON.parse(localStorage.getItem("users"))
  x1.userdata.push(x)
  localStorage.setItem("users", JSON.stringify(x1));
}


const signup = (e) => {
  let formdata = {
    fname: document.getElementById("fname").value.trim(),
    lname: document.getElementById("lname").value.trim(),
    email: document.getElementById("email").value.trim(),
    pwd: document.getElementById("pwd").value.trim(),
    pwd2: document.getElementById('pwd2').value.trim(),
  };
  e.preventDefault();
  var op = true;

  var namePattern = /^[A-Za-z]+$/;
  var fn1 = namePattern.test(formdata.fname);
  if (fn1 == false) {
    document.getElementById("1").style.color = "red";
    document.getElementById("1").innerHTML = "Only letters";
    op = false;
  } else {
    document.getElementById("1").style.color = "green";
    document.getElementById("1").innerHTML = "&#10003;";
  }

  var fn2 = namePattern.test(formdata.lname);
  if (fn2 == false) {
    op = false;
    document.getElementById("2").style.color = "red";
    document.getElementById("2").innerHTML = "Only letters";
  } else {
    document.getElementById("2").style.color = "green";
    document.getElementById("2").innerHTML = "&#10003;";
  }

  var mailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var fn4 = mailpattern.test(formdata.email);
  if (fn4 == false) {
    op = false;
    document.getElementById("4").style.color = "red";
    document.getElementById("4").innerHTML = "invalid!";
  } else {
    document.getElementById("4").style.color = "green";
    document.getElementById("4").innerHTML = "&#10003;";
  }


  var capital = /^[A-Z]+$/
  var symbol = /~`!@#$%^&*()-_+={}[]|\;:"<>,.?/
  var num = /^[0-9]+$/


  if (!(capital.test(formdata.pwd))) {

    document.getElementById("3").style.color = "red";
    document.getElementById("3").innerHTML = "password must have one capital letter at least"
  } else {
    document.getElementById("3").style.color = "green";
    document.getElementById("3").innerHTML = "&#10003;";
  }
  if (!(symbol.test(formdata.pwd))) {

    document.getElementById("3").style.color = "red";
    document.getElementById("3").innerHTML = "password must have one special character at least"
  } else {
    document.getElementById("3").style.color = "green";
    document.getElementById("3").innerHTML = "&#10003;";
  }
  if (!(num.test(formdata.pwd))) {

    document.getElementById("3").style.color = "red";
    document.getElementById("3").innerHTML = "password must have one number at least"
  } else {
    document.getElementById("3").style.color = "green";
    document.getElementById("3").innerHTML = "&#10003;";
  }
  if (!(formdata.pwd.length >= 8)) {
    op = false;
    document.getElementById("3").style.color = "red";
    document.getElementById("3").innerHTML = "password must have 8 character at least"
  }
  else {
    document.getElementById("3").style.color = "green";
    document.getElementById("3").innerHTML = "&#10003;";
  }


  if (!(formdata.pwd === formdata.pwd2)) {
    op = false;
    document.getElementById("5").style.color = "red";
    document.getElementById("5").innerHTML = "password do not match"
  }
  else {
    document.getElementById("5").style.color = "green";
    document.getElementById("5").innerHTML = "&#10003;";

  }

  if (op) {


    var input = document.getElementsByClassName('in')
    var n = formdata.fname + formdata.lname;
    var a = []
    var x = new user(n, formdata.email, formdata.pwd, 0, a)

    var x1 = JSON.parse(localStorage.getItem("users"))
    for (i = 0; i < x1.userdata.length; i++) {
      var check = x1.userdata[i]
      if (check.email == formdata.email) {
        alert("user is exisist")
        location.href = "login.html"

      }
      else {
        op = false;
      }
    }
    if (!op) {
      x1.userdata.push(x)
      localStorage.setItem("users", JSON.stringify(x1));
      location.href = "login.html"
    }
  }

};


/*var check1 = /\b^([A-Z])/g;
if (check1.test(formdata.pwd) == true) {
  document.getElementById("3").style.color = "green";
  document.getElementById("3").innerHTML = "&#10003;";
} else {
  document.getElementById("3").style.color = "red";
  document.getElementById("3").innerHTML = "must begin with capital letter";
}
var check2 = /[0-9]/g;
if (check2.test(formdata.pwd) == true) {
  document.getElementById("3").style.color = "green";
  document.getElementById("3").innerHTML = "&#10003;";
} else {
  document.getElementById("3").style.color = "red";
  document.getElementById("3").innerHTML = "one number at least";
}
var check3 = /[?=.*[\]\\{}!@#$%^&*]/;
if (check3.test(formdata.pwd) == true) {
  document.getElementById("3").style.color = "green";
  document.getElementById("3").innerHTML = "&#10003;";
} else {
  document.getElementById("3").style.color = "red";
  document.getElementById("3").innerHTML = "add one symbol at least";
}
var check4 = formdata.pwd.length < 8;
if (check4.test(formdata.pwd) == false) {
  document.getElementById("3").style.color = "green";
  document.getElementById("3").innerHTML = "&#10003;";
  erHTML = "";
} else {
  document.getElementById("3").style.color = "red";
  document.getElementById("3").innerHTML = "at least 8 characters";
}*/