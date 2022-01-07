const arr=[
    {
        Question : "Ques 1:What position does Harry play on his Quidditch team?",
        a :'Keeper', 
        b :'Buldger',
        c :'Seeker',
        d :'Chaser'	,
        correct :"ansc"
    },
    {
        Question:'Ques 2: Who is Fluffy?',
        a:'Hagrid\'s dragon', 
        b:'A three headed dog',
        c:'Hermione\'s cat ',
        d:'Harry\'s owl',
        correct:"ansa"	
    },
    {
        Question: 'Ques 3: What does the Sorcerer\'s Stone do?',
        a:'tell the ones who hold it their future', 
        b:'transforms the one who hold it into an animal',
        c:'transforms any metal into gold and produces the elixer of life',
        d:'makes the one that hold it invisible'	,
        correct:"ansc"
    },
    {
        Question: 'Ques 4: What does the Imperius curse do?',
        a:'Kills',
        b:'Tortures',
        c:'Turns the person into a pig',
        d:'Control',
        correct:"ansd"	
    },
    {
        Question: 'Ques 5: What does the Mirror of Erised do?',
        a:'Tells the future',
        b:'Shows your heart dezire',
        c:'Tells the future',
        d:'Makes you appear beautiful to others',
        correct:"ansb"	
    },
    {
        Question: 'Ques 6: Who is Grawp?',
        a:'Sirius\'s house elf',
        b:'A Cenatur',
        c:'Hagrid\'s half brother',
        d:'Ron\'s owl',
        correct:"ansc"	
    },
    {
        Question: 'Ques 7: Which is not a method of transport for wizards?',
        a:'A Portkey',
        b:'Apraceium',
        c:'Floo powder',
        d:'Apparition',
        correct:"ansb"	
    },
    {
        Question: 'Ques 8: How does Rita Skeeter find out secrets about the Hogwarts students and staff?',
        a:'She turns into a bettle',
        b:'With the extendable ear',
        c:'With the quick quotes kill',
        d:'She pays Crab and Goyle',
        correct:"ansa"	
    },
    {
        Question: 'Ques 9: What is a thestral?',
        a:'An invisible winged horse',
        b:'An old pixie',
        c:'A half giant',
        d:'A three-headed dog',
        correct:"ansa"	
    },
    {
        Question: 'Ques 10: Which character became a professional Quidditch player?',
        a:'Ron',
        b:'Hermione',
        c:'Draco',
        d:'Ginny',
        correct:"ansd"	
    }

];
	
let ques=document.querySelector('.question');
let submit=document.querySelector("button");


let optiona=document.querySelector('#optiona');
let optionb=document.querySelector('#optionb');
let optionc=document.querySelector('#optionc');
let optiond= document.querySelector('#optiond');

let answer=document.querySelectorAll(".potentialAnswer");
const showscore=document.querySelector('#showScore');

let count=0;
let ind=0;
let score=0;


function disp(){
   ques.innerHTML=arr[ind].Question;
   optiona.innerHTML= arr[ind].a;
   optionb.innerHTML= arr[ind].b;
   optionc.innerHTML= arr[ind].c;
   optiond.innerHTML= arr[ind].d; 
   ind++;
}

disp();

const getCheckAnswer = () =>{
    let fanswer;
    answer.forEach((curAns)=>{
        if(curAns.checked){
            fanswer=curAns.id;
        }
    });
    return fanswer;
}

const deselectAll=()=>{
    answer.forEach((curAns) => curAns.checked=false);
}

submit.addEventListener('click',()=>{
    console.log(`${count} iterated `)
    const checkedAnswer=getCheckAnswer();
    if(checkedAnswer === arr[count].correct){
        score++;
        
    }
    count++;
    deselectAll();
    if(count<arr.length)
        disp();
    else{
        //ques.classList.remove('question');
        showscore.innerHTML=`<h3>SCORE: ${score}/${arr.length} </h3>
        <button class = "btn" onclick = "location.reload()">Take Quiz Again</button>
        `;
        //document.getElementsByClassName("showArea")[0].getElementsByClassName.visible='visibility';
        showscore.classList.remove('showArea');
        
       
    }


});

