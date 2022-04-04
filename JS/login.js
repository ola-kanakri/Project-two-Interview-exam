var id = localStorage.getItem("user_id")
if (id) {
    location.href = "Result_page.html"
}
else {
    var rege = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var x1 = JSON.parse(localStorage.getItem("users"))
    var user_id = 0;
    var ale = document.getElementsByClassName("ale")
    function check() {

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;


        var ob = obreturn(x1, email);
        if (ob) {
            var em = ob.email;
            var pas = ob.password;
            if (checkemail(email, em) && checkpass(password, pas)) {
                localStorage.setItem("user_id", user_id)
                if (ob.result == 0) {
                    location.href = "welcomepage.html"
                }
                else {
                    location.href = "Result_page.html"
                }
            }
            else {
                ale[0].innerHTML = "invalid email or password"
            }
        }
        else {
            ale[0].innerHTML = "invalid email or password"

        }

    }

    function obreturn(a, email) {
        for (i = 0; i < a.userdata.length; i++) {
            var check = a.userdata[i]
            if (check.email == email) {
                user_id = i;
                return a.userdata[i]
            }
        }
        return false;
    }

    function checkemail(email, em) {

        if (email.match(rege)) {
            if (email == em) {
                return true
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    }
    function checkpass(password, pass) {
        var regchar = /\w/
        var regsp = /\d/
        var op = true;

        if (!(password.match(regchar))) {
            ale[1].innerHTML = "you have at least one charcter"
            op = false;
        } else {
            ale[1].innerHTML = ""
        }
        if (!(password.match(regsp))) {
            ale[2].innerHTML = "password must have at least 1 spisal character "
            op = false
        } else {
            ale[2].innerHTML = ""
        }
        if (!(password.length >= 8)) {
            ale[3].innerHTML = "password must have at least 8 character"
            op = false;
        }
        else {
            ale[3].innerHTML = ""
        }
        if (!(password == pass)) {
            op = false;
        }
        return op;
    }
}