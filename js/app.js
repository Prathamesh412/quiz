(function () {                      //IIFE created for execution
 
    var player = function(name,score){ // player function created.
    this.name = name;
    this.score = score;
}

var player1 = new player("prath",0);
    
    
//var frame = function(){
//    
//        this.drawBoard = function(){
//        var boardDiv = document.createElement('div');
//        boardDiv.className = 'board';
//        boardDiv.setAttribute('id','board');
//        document.body.appendChild(boardDiv);
//            
//       };
//    
//    scoreDiv = document.createElement('div');
//    scoreDiv.className ='score';
//    scoreDiv.innerHTML='<span id="player1">' + player1.name +'<br/><b class="playerscore">'+ player1.score +'</b>       </span>';
//    document.body.appendChild(scoreDiv);
//};
    
 var init = function()
 {
 	//json object
 	var questions = '[{"name" : "what is the color of fruit?","options":["Red","Green","Blue"],"answer" : 0},{"name" : "what is the color of banana?","options":["Red","Yellow","Blue"],"answer" : 1},{"name" : "what is the middle color of Indian flag?","options":["Red","Yellow","white"],"answer" : 2}]';
 	json = JSON.parse(questions);
 
     //first screen
 	questDiv = document.createElement('div');
 	questDiv.className = 'board';
 	questDiv.style.border = "black";
 	questDiv.innerHTML = '<p align = "center">Welcome to the quizzy quiz</p><span id ="questid" span class="btn" onclick="show()" align="center"> Start </span>';
 	document.body.appendChild(questDiv);
 
 	//loop for all questions
   // c[0].parentElement.removeChild(c[0])
         
         
         document.querySelector('#questid').addEventListener('click', function(event) {
   for (var i = 0; i < 1; i++) {
         div = document.createElement('div');
         div.className = 'board';
 		div.setAttribute('id', 'json['+i+']');

      div.innerHTML = '<span class="questMain">' + json[i].name + '</br></br></span><span class="answerList" onclick = "ansStore()"><input type = "radio" id = "radioOptions" value = "1">' + json[i].options[0] + '</br><input type = "radio" id = "radioOptions" value = "2">' + json[i].options[1] + '</br><input type = "radio" id = "radioOptions" value = "3">' + json[i].options[2] + '</br></br></br></br></br><span id="dude" span class="btn" onclick="show('+i+')">Next</span>';
         document.body.appendChild(div);
		
		var answer = document.getElementById('radioOptions');
	   console.log(answer);
   }
   });
 
 
 //hide/show div
 this.show=function()
 {
 	
 
 }
 
//storing answers
this.ansStore = function()  
{
    
    console.log(questions[0])
	var answers = [];
	answer = document.getElementById('radioOptions');
    for (var i = 0; i < 3; i++){
	   // if (answer[i].checked) 
	    {
	    	//if(answers[i].value == json)
	    	//    alert(answer[i].value);
            console.log(answer)
	    }
    }
}

 };//end init
 var init1=new init(); 
 init1.ansStore();
 init1.show();
    
})();