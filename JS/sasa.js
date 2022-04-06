var x1 = JSON.parse(localStorage.getItem("users"))
var id = localStorage.getItem("user_id")

if (id) {

    var a = x1.userdata[id];
    if (a.result == 0) {
        var an = [];
        const qu = { q: [] }

        const quizData = [
            {
                question: " 1.What does HTML stand for?",
                a: "Hyper Text Preprocessor",
                b: "Hyper Text Markup Language",
                c: "Hyper Text Multiple Language",
                d: "Hyper Tool Multi Language",
                correct: "b",
            },
            {
                question: "2-What does CSS stand for?",
                a: "Common Style Sheet",
                b: "Colorful Style Sheet",
                c: "Computer Style Sheet",
                d: "Cascading Style Sheet",
                correct: "d",
            },
            {
                question: "3-Which of these elements are all < table > elements?",
                a: "table,tr,tt",
                b: "table,tr,td",
                c: "table,head,tfoot",
                d: "thead,body,tr",
                correct: "b",
            },
            {
                question: "4-Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
                a: "title",
                b: "src",
                c: "alt",
                d: "longdesc",
                correct: "c",
            },
            {
                question: "5-In HTML, onblur and onfocus are?",
                a: "Event attribute",
                b: "HTML element",
                c: "Style attribute",
                d: "all of the above",
                correct: "a",
            },
            {
                question: "6-Which is the correct CSS syntax?",
                a: "body{color:red;}",
                b: "{body:color=red;}",
                c: "{body;color:red;",
                d: "body:color=red;",
                correct: "a",
            },
            {
                question: "7-What year was JavaScript launched?",
                a: "1996",
                b: "1995",
                c: "1994",
                d: "none of the above",
                correct: "b",
            },
            {
                question: "8-How do you call a function named (myFunction)?",
                a: "call myFunction()",
                b: "call function myFunction()",
                c: "myFunction()",
                d: "none of the above",
                correct: "c",
            },
            {
                question: "9-How to write an IF statement in JavaScript?",
                a: "if i = 5",
                b: "if i = 5 then",
                c: "if i == 5 then",
                d: "if (i==5)",
                correct: "d",
            },
            {
                question: "10-How does a WHILE loop start?",
                a: "while (i <= 10;i++)",
                b: "while (i <= 10)",
                c: "while i = 1 to 10",
                d: "none of the above",
                correct: "b",
            },
            {
                question: "1-I prefer coffee ___ tea.",
                a: "to",
                b: "than",
                c: "like",
                d: "then",
                correct: "a",
            },
            {
                question: "2-My dog hasn't eaten anything ___ yesterday.",
                a: "for",
                b: "from",
                c: "than",
                d: "since",
                correct: "d",
            },
            {
                question: "3-If she comes, I ___ call you.",
                a: "have",
                b: "would have",
                c: "would",
                d: "will",
                correct: "d",
            },
            {
                question: "4-you look absolutely ___.",
                a: "beautiful",
                b: "beauty",
                c: "beautifully",
                d: "very beautifully",
                correct: "a",
            },
            {
                question: "5-Do you ___ chocolate milk ?",
                a: "like",
                b: "likes",
                c: "liking",
                d: "be like",
                correct: "a",
            },
            {
                question: "1-Which number logically follows this series? (4 6 9 6 14 6 ...)",
                a: "6",
                b: "17",
                c: "19",
                d: "21",
                correct: "c",
            },
            {
                question: "2-Sequential reasoning is often tested in IQ exams. 3, 7, 13, 21, 31. What number comes next in the sequence?",
                a: "37",
                b: "43",
                c: "39",
                d: "49",
                correct: "b",
            },
            {
                question: "3-Which number should come next in the pattern? (37, 34, 31, 28,...)",
                a: "25",
                b: "26",
                c: "23",
                d: "37",
                correct: "a",
            },
            {
                question: "4-Which of the following can be arranged into a 5-letter English word?",
                a: "H R G S T",
                b: "W Q R G S",
                c: "T O O M T",
                d: "all of the above",
                correct: "c",
            },
            {
                question: "5-What number best completes the analogy ? 8:4 as 10:_",
                a: "3",
                b: "7",
                c: "24",
                d: "5",
                correct: "d",
            },
        ];
        qu.q = quizData;
        if (localStorage.getItem("question") === null) {
            localStorage.setItem("question", JSON.stringify(qu))
        }
        const quiz = document.getElementById('quiz');
        const answerEl = document.querySelectorAll('.answer');
        const questionEl = document.getElementById('question');
        const a_text = document.getElementById('a_text');
        const b_text = document.getElementById('b_text');
        const c_text = document.getElementById('c_text');
        const d_text = document.getElementById('d_text');
        const nextBtn = document.getElementById('submit');
        const finish = document.getElementById('finish');
        const start =document.getElementById('st');
        const letGo =document.getElementById('letGo');

        let currentQuiz = 0;
        let score = 0;

        loadQuiz();

        function loadQuiz() {

            deselectAnswers();

            const currentQD = quizData[currentQuiz];
            questionEl.innerText = currentQD.question;
            a_text.innerText = currentQD.a;
            b_text.innerText = currentQD.b;
            c_text.innerText = currentQD.c;
            d_text.innerText = currentQD.d;
        }

        function deselectAnswers() {
            answerEl.forEach(answerEl => answerEl.checked = false)
        }

        function getSelected() {
            let answer;
            answerEl.forEach(answerEl => {
                if (answerEl.checked) {
                    answer = answerEl.value;
                    an.push(answer);
                }
            })
            return answer;
        }


        nextBtn.addEventListener('click', () => {
            const answer = getSelected();
            if (answer) {
                if (answer === quizData[currentQuiz].correct) {
                    score++;
                }

                let y = 0;
                let x = quizData[y].question;

                currentQuiz++;

             
                if (currentQuiz == 9) {

                    nextBtn.innerText = 'Finish';

                    start.addEventListener('click', () =>{
                        quiz.style.display ='block';
                        letGo.style.display ='none';
                        
                    })
                    
                }
                

                if (currentQuiz == 14) {
                    nextBtn.innerText = 'Finish';

                    start.addEventListener('click', () =>{
                        quiz.style.display ='block';
                        letGo.style.display ='none';
                        
                    })
                }
                
              

                if (currentQuiz == 10) {

                    quiz.style.display ='none';
                    letGo.style.display ='block'

                    nextBtn.innerText = 'Next';
                    document.getElementById('title').innerHTML = '<h2 style =" font-weight: 900; font-size: xx-large; ">English Test :</h2>  <img src="../img/eng.jpg" width="150px" height="100px">';
                }
                
                

                if (currentQuiz == 15) {
                    document.getElementById('title').innerHTML = '<h2 style =" font-weight: 900; font-size: xx-large; ">IQ Test :</h2>  <img src="../img/IQ.jpg" width="150px" height="100px">';
                    nextBtn.innerText = 'Next';

                        quiz.style.display ='none';
                        letGo.style.display ='block';
                        finish.innerText='You are finish English Quiz ,Be ready to IQ Quiz'
                }


                if (currentQuiz < quizData.length) {
                    loadQuiz();
                } else {
                    a.result = score;
                    a.answers = an;
                    localStorage.setItem("users", JSON.stringify(x1));
                    location.href = "Result_page.html"
                }
            }
        })
    }
    else {
        location.href = "Result_page.html"
    }
}
else {
    location.href = "login.html"
}