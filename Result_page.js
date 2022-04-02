
let result = 70;
let f = document.getElementById("fail");
let p = document.getElementById("pass");
let btn = document.getElementById("ans_btn");
let ans = document.getElementById("ans_table");

if (result>= 50)
{
    p.style.display = "inline";
}

else
{
    f.style.display = "inline";
}


/***************************************************************** */

btn.onclick = function showAnswers()
{
    ans.style.display="block";


}



