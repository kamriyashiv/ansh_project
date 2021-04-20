var que = [{
    qus: '1. Any nike name for ',
    id: 'ans01',
}, {
    qus: '2. Colour which suits ',
    id: 'ans02',
}, {
    qus: '3. One Thing You Like in',
    id: 'ans03',
}, {
    qus: '4. One Thing You Dislike in',
    id: 'ans04'
}];
//console.log(typeof(ans))
var myname = document.getElementById('myname');
var createName = document.getElementById('name');
var btn = document.getElementById('create').addEventListener("click", function() {
    //console.log(createName.value);
    var question_list = document.querySelector('.questions').innerHTML += `
        <h3>Answers By ${createName.value}</h3>
    `;
    for (var i in que) {
        var question_list = document.querySelector('.questions').innerHTML += `
          <p class="question">
             ${que[i].qus}  ${myname.value} ?
          </p>
          <span>Ans.</span> <input type="text" id="${que[i].id}">
    `;
    }
    //finish btn
    var questions = document.querySelector('.questions');
    var finishbtn = document.createElement('input');
    questions.appendChild(finishbtn);
    finishbtn.setAttribute('value', 'Finish');
    finishbtn.setAttribute('type', 'button');
    finishbtn.setAttribute('class', 'startbtn');
    finishbtn.addEventListener('click', function() {
        document.querySelector('.show').innerHTML += `
        <h3>Answers By ${createName.value}</h3>
        `;
        //console.log("hello");
        var showans01 = document.getElementById('ans01');
        var showans02 = document.getElementById('ans02');
        var showans03 = document.getElementById('ans03');
        var showans04 = document.getElementById('ans04');
        var ansArrey = [showans01, showans02, showans03, showans04];
        for (var i in ansArrey) {
            document.querySelector('.show').innerHTML += `
            <p><span>Q.</span> ${que[i].qus} ${myname.value} ?</p>
            <p class="color_black"><span>Ans.</span> ${ansArrey[i].value}</p>
            <br>
        `;
        }
        qust.style.display = "none";
        alert("Send Screenshot to " + myname.value)
    });
});
//show & Hide
var qutaion = document.querySelector('.qutaion');
var qust = document.querySelector('.questions');
var blur = document.querySelector('.blur');
var firstbtn = document.querySelector('.startbtn').addEventListener("click", function() {
    (qutaion.style.display === "none") ? qutaion.style.display = "block":
        qutaion.style.display = "block"
    blur.style.display = "none";
});
var secbtn = document.querySelector('.secbtn').addEventListener("click", function() {
    (qutaion.style.display === "none") ? qutaion.style.display = "none":
        qutaion.style.display = "none"
    blur.style.display = "none"
    qust.style.display = "block";;
});