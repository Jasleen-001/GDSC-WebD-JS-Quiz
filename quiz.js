const arr=[
		{
			Question : "What does HTML stand for?",
			a :'Hyperlinks and Text Markup Language', 
			b :'Hyper Text Markup Language',
			c :'Home Tool Markup Language',
			d :'Hyper Text Markup Land'	,
			ans :"ansb"
		},
		{
			Question:' What is the correct HTML tag for inserting a line break?',
			a:'p', 
			b:'break',
			c:'br',
			d:'hr',
			ans:"ansc"	
		},
		{
			Question: 'What is the correct HTML for creating a hyperlink?',
			a:'<a url="http://www.lezzquizz.com">lezzquizz.com</a>', 
			b:'<a name="http://www.lezzquizz.com">lezzquizz.com</a>',
			c:'<a href="http://www.lezzquizz.com">lezzquizz</a>',
			d:'<a>http://www.lezzquizz.com</a>'	,
			ans:"ansc"
		},
		{
			Question: 'Which of these tags are all <table> tags?',
			a:'<table><tr><td>',
			b:'<table><head><tfoot>',
			c:'<thead><body><tr>',
			d:'<table><tr><tt>',
			ans:"ansa"	
		},
		{
			Question: 'What is the correct HTML for making a checkbox?',
			a:'<check>',
			b:'<checkbox>',
			c:'<input type="check">',
			d:'<input type="checkbox">',
			ans:"ansd"	
		},
		{
			Question: 'Which is the correct CSS syntax?',
			a:'body {color: black;}',
			b:'{body:color=black;}',
			c:'{body:color=black;}',
			d:'{body;color:black;}',
			ans:"ansa"	
		}



	];
//(
	
	const Question=document.querySelector('.Question');
	const optiona=document.querySelector('#optiona');
	const optionb=document.querySelector('#optionb');
	const optionc=document.querySelector('#optionc');
	const optiond= document.querySelector('#optiond');
	const submit= document.querySelector('#submit');

	const answers= document.querySelectorAll('.answ');

	const showScore=document.querySelector('#showScore');

	let questionCount=0;
	let score=0;

	const loadQuestion = () => {
		
	
		const list=arr[questionCount]; //question list

		Question.innerText = list.Question;

		optiona.innerText= list.a;
		optionb.innerText= list.b;
		optionc.innerText= list.c;
		optiond.innerText= list.d;
	}	

	loadQuestion();

	const getCheckAnswer = () =>{
		let answer;
		answers.forEach((curAns)=>{
			if(curAns.checked){
				answer=curAns.id;
			}
			
		});
    	return answer;
	}

	const deselectAll= () =>{
		answers.forEach((curAns) => curAns.checked=false);
	}

	submit.addEventListener('click',() =>{
		const checkedAnswer = getCheckAnswer();
		if(checkedAnswer == arr[questionCount].ans){
			score++;
		}
		
		questionCount++;
		deselectAll();

		if(questionCount < arr.length)
			loadQuestion();
		else{
			showScore.innerHTML =
			'<h3> you scored '+ score +'/'+arr.length+'</h3>';
		}
	});
