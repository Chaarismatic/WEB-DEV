const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: [
      "HTML",
      "CSS",
      "Python",
      "C++"
    ],
    answer: "CSS"
  },
  {
    question: "Which language is primarily used to make web pages interactive?",
    options: [
      "Java",
      "Python",
      "JavaScript",
      "C"
    ],
    answer: "JavaScript"
  },
  {
    question: "Which company developed JavaScript?",
    options: [
      "Google",
      "Microsoft",
      "Netscape",
      "Apple"
    ],
    answer: "Netscape"
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: [
      "//",
      "/*",
      "#",
      "<!--"
    ],
    answer: "//"
  },
  {
    question: "Which method prints output to the browser console?",
    options: [
      "console.print()",
      "console.log()",
      "print()",
      "echo()"
    ],
    answer: "console.log()"
  },
  {
    question: "Which keyword is used to declare a constant variable in JavaScript?",
    options: [
      "var",
      "let",
      "const",
      "static"
    ],
    answer: "const"
  },
  {
    question: "Which array method adds an element to the end of an array?",
    options: [
      "pop()",
      "shift()",
      "push()",
      "unshift()"
    ],
    answer: "push()"
  },
  {
    question: "Which CSS property changes the text color?",
    options: [
      "font-color",
      "background-color",
      "color",
      "text-style"
    ],
    answer: "color"
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: [
      "<link>",
      "<a>",
      "<href>",
      "<url>"
    ],
    answer: "<a>"
  },
  {
    question: "Which HTML tag is used to insert an image?",
    options: [
      "<image>",
      "<img>",
      "<picture>",
      "<src>"
    ],
    answer: "<img>"
  },
  {
    question: "Which CSS property is used to make text bold?",
    options: [
      "font-weight",
      "text-weight",
      "font-style",
      "weight"
    ],
    answer: "font-weight"
  },
  {
    question: "Which JavaScript method removes the last element from an array?",
    options: [
      "shift()",
      "pop()",
      "splice()",
      "delete()"
    ],
    answer: "pop()"
  },
  {
    question: "Which keyword is used to declare a block-scoped variable?",
    options: [
      "var",
      "let",
      "const",
      "int"
    ],
    answer: "let"
  },
  {
    question: "Which HTML element is used to create a line break?",
    options: [
      "<lb>",
      "<break>",
      "<br>",
      "<hr>"
    ],
    answer: "<br>"
  },
  {
    question: "Which CSS property controls the size of text?",
    options: [
      "font-style",
      "font-size",
      "text-size",
      "size"
    ],
    answer: "font-size"
  },
  {
    question: "Which JavaScript function converts a JSON string into an object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.object()"
    ],
    answer: "JSON.parse()"
  },
  {
    question: "Which loop is guaranteed to execute at least once?",
    options: [
      "for",
      "while",
      "do...while",
      "for...of"
    ],
    answer: "do...while"
  },
  {
    question: "Which operator is used for strict equality in JavaScript?",
    options: [
      "=",
      "==",
      "===",
      "!="
    ],
    answer: "==="
  },
  {
    question: "Which method is used to select an element by its ID in JavaScript?",
    options: [
      "querySelectorAll()",
      "getElementsByClassName()",
      "getElementById()",
      "getElementsByTagName()"
    ],
    answer: "getElementById()"
  },
  {
    question: "Which HTML tag is used to create an unordered list?",
    options: [
      "<ol>",
      "<ul>",
      "<li>",
      "<list>"
    ],
    answer: "<ul>"
  },
  {
    question: "Which CSS property is used to round the corners of an element?",
    options: [
      "border-style",
      "border-radius",
      "corner-radius",
      "radius"
    ],
    answer: "border-radius"
  },
  {
    question: "Which JavaScript method joins all elements of an array into a string?",
    options: [
      "concat()",
      "join()",
      "merge()",
      "combine()"
    ],
    answer: "join()"
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: [
      "==",
      "=",
      "===",
      ":="
    ],
    answer: "="
  },
  {
    question: "Which HTML tag is used for the largest heading?",
    options: [
      "<h6>",
      "<heading>",
      "<head>",
      "<h1>"
    ],
    answer: "<h1>"
  },
  {
    question: "Which CSS property changes the background color of an element?",
    options: [
      "color",
      "background-color",
      "bg-color",
      "background-style"
    ],
    answer: "background-color"
  },
  {
    question: "Which JavaScript method checks whether an array contains a specific value?",
    options: [
      "find()",
      "search()",
      "includes()",
      "contains()"
    ],
    answer: "includes()"
  },
  {
    question: "Which HTML attribute provides alternative text for an image?",
    options: [
      "src",
      "title",
      "alt",
      "href"
    ],
    answer: "alt"
  },
  {
    question: "Which JavaScript method removes the first element of an array?",
    options: [
      "pop()",
      "shift()",
      "slice()",
      "splice()"
    ],
    answer: "shift()"
  },
  {
    question: "Which CSS layout system is one-dimensional?",
    options: [
      "Grid",
      "Flexbox",
      "Float",
      "Position"
    ],
    answer: "Flexbox"
  }
];

{/* <div class="question" id="question10">
        <h2 id="question-text-10">10. Question goes here?</h2>

        <label for="q10a"><input type="radio" id="q10a" name="q10" value="A"> Option A</label>
        <label for="q10b"><input type="radio" id="q10b" name="q10" value="B"> Option B</label>
        <label for="q10c"><input type="radio" id="q10c" name="q10" value="C"> Option C</label>
        <label for="q10d"><input type="radio" id="q10d" name="q10" value="D"> Option D</label>
</div>/ */}

{/* <div class="container">

    <h1>🧠 Quiz Challenge</h1>

    <div id="quiz-container"></div>

    <button id="submit">Submit Quiz</button>

    <div id="result">
      <h2>Your Result</h2>
      <p>Score: <span id="score">0 / 10</span></p>
    </div>

</div> */}
const used = new Set();

while (used.size < 10) {
    used.add(Math.floor(Math.random() * 30));
}

const arr = [...used]
console.log(arr)
let i = 0
const ans = []
const div = document.getElementById("quiz-container")
function DisplayQuestion(q){
  const q1 = document.createElement("div")
  const question = document.createElement("h2")
  const option1  =  document.createElement("input")
  const option2  =  document.createElement("input")
  const option3  =  document.createElement("input")
  const option4  =  document.createElement("input")
  option1.name = `q${q}`;
  option2.name = `q${q}`;
  option3.name = `q${q}`;
  option4.name = `q${q}`;
  option1.type = 'radio'
  option2.type = 'radio'
  option3.type = 'radio'
  option4.type = 'radio'
  option1.value = questions[arr[i]].options[0]
  option2.value = questions[arr[i]].options[1]
  option3.value = questions[arr[i]].options[2]
  option4.value = questions[arr[i]].options[3]




const label1 = document.createElement("label");
const label2 = document.createElement("label");
const label3 = document.createElement("label");
const label4 = document.createElement("label");
option1.id = `q${q}a`;
option2.id = `q${q}b`;
option3.id = `q${q}c`;
option4.id = `q${q}d`;
label1.htmlFor = option1.id;
label2.htmlFor = option2.id;
label3.htmlFor = option3.id;
label4.htmlFor = option4.id;
label1.textContent = questions[arr[i]].options[0];
label2.textContent = questions[arr[i]].options[1];
label3.textContent = questions[arr[i]].options[2];
label4.textContent = questions[arr[i]].options[3];


  question.textContent = questions[arr[i]].question
  ans.push(questions[arr[i]].answer)

q1.append(question);

q1.append(option1, label1);
q1.append(option2, label2);
q1.append(option3, label3);
q1.append(option4, label4);
  div.append(q1)
  i++
}

DisplayQuestion(1)
DisplayQuestion(2)
DisplayQuestion(3)
DisplayQuestion(4)
DisplayQuestion(5)
DisplayQuestion(6)
DisplayQuestion(7)
DisplayQuestion(8)
DisplayQuestion(9)
DisplayQuestion(10)
// DisplayQuestion(2)
const button = document.getElementById("submit")
button.addEventListener('click',(e)=>{
  e.preventDefault()
  let score =0
  for (let i = 1; i <= 10; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);

    if (selected && selected.value === ans[i - 1]) {
        score++;
    }
}
    const result = document.getElementById("score")
    result.textContent = `${score} / 10`
})

