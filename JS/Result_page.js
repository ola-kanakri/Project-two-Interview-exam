
var id = localStorage.getItem("user_id")

if (id === null) {
    location.href = ("/Index.html")
}
else {

    var x1 = JSON.parse(localStorage.getItem("users"))
    var x2 = JSON.parse(localStorage.getItem("question"))
    var a = x1.userdata[id];
    var a2 = x2.q;
    var result = a.result;


    let f = document.getElementById("fail");
    let p = document.getElementById("pass");
    let btn = document.getElementById("ans_btn");
    let Pass_img = document.getElementById("Pass_img");
    let Fail_imoji = document.getElementById("Fail_imoji");
   


    document.getElementById("result").innerHTML = " Result : "  + result + " out of  20 " ;

    if (50 >= 10) {
        p.style.display = "block";
        Pass_img.style.display = "inline";
        
    }
    else {
        f.style.display = "block";
        Fail_imoji.style.display = "inline";
        
    }


    /***************************************************************** */
    var op = true;

    btn.onclick = function showAnswers() {
        if (op) {

            for (let i = 0; i < a2.length; i++) {
                document.getElementById("card-rev").innerHTML += `<div class="card-rev">
                 <div class="q">${a2[i].question}</div> 
                 <div class="a">${"a. " + a2[i].a}</div> 
                 <div class="b">${"b. " + a2[i].b}</div>
                 <div class="c">${"c. " + a2[i].c}</div> 
                 <div class="d">${"d. " + a2[i].d}</div> 
                 
                 </div>`
            }

            document.getElementById("card-rev").style.display = "flex";
            op = false
            var a1 = document.getElementsByClassName("a")
            var b1 = document.getElementsByClassName("b")
            var c1 = document.getElementsByClassName("c")
            var d1 = document.getElementsByClassName("d")


            for (i = 0; i < a.answers.length; i++) {
                if (a.answers[i] == "a") {
                    a1[i].style.backgroundColor = "#ff6c6c"
                    a1[i].style.color = "white"
                   // a1[i].innerHTML += "    your anwser "
                }
                if (a.answers[i] == "b") {
                    b1[i].style.backgroundColor = "#ff6c6c"
                    b1[i].style.color = "white"
                   // b1[i].innerHTML += "    your anwser "
                }
                if (a.answers[i] == "c") {
                    c1[i].style.backgroundColor = "#ff6c6c"
                    c1[i].style.color = "white"
                   // c1[i].innerHTML += "    your anwser "
                }
                if (a.answers[i] == "d") {
                    d1[i].style.backgroundColor = "#ff6c6c"
                    d1[i].style.color = "white"
                   // d1[i].innerHTML += "    your anwser "
                }
            }

            for (i = 0; i < a.answers.length; i++) {

                if (a2[i].correct == "a") {
                    a1[i].style.backgroundColor = "#43d843"
                    a1[i].style.color = "white"
                  //  a1[i].innerHTML += "  correct anwser "
                }
                if (a2[i].correct == "b") {
                    b1[i].style.backgroundColor = "#43d843"
                    b1[i].style.color = "white"
                    //b1[i].innerHTML += "  correct anwser "
                }
                if (a2[i].correct == "c") {
                    c1[i].style.backgroundColor = "#43d843"
                    c1[i].style.color = "white"
                  //  c1[i].innerHTML += "  correct anwser "
                }
                if (a2[i].correct == "d") {
                    d1[i].style.backgroundColor = "#43d843"
                    d1[i].style.color = "white"
                  //  d1[i].innerHTML += "  correct anwser "
                }
            }
        }

    }



    function home() {
        
        var id = localStorage.getItem("user_id")
        if (id) {

            localStorage.removeItem("user_id");
            location.href = "../Index.html";
            //location.href = "login.html"

        }
        // else {

        //     location.href = "../Index.html";

        // }
    }
}