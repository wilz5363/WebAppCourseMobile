var question = "";
var count = 0;

function getQuestions(){
    
    var id = getParam("id");
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
           var result = JSON.parse(xhr.responseText); 
            showQuestion(result);
        }
    };
    xhr.open("GET", "http://smartgreen.my/bitdwilson/api/getQuestions.php?id="+id, true);
    xhr.send();
}




function showQuestion(result) {
    
//    var questions = document.getElementById("questions");
//    questions.innerHTML = question;
//
//    var container = document.getElementById("answerSelections");

    var contents = document.getElementById("contents");
    
    for (var i = 0; i < result.length; i++) {
        
        if(question != result[i].question_content){
            
           count++;
            
            question = result[i].question_content;
            
            var questionDiv = document.createElement("p");
            questionDiv.innerHTML = count+". " +question;
            
            contents.appendChild(questionDiv);
        }
        
        
        
        
        
        var radioDiv = document.createElement("div");
        radioDiv.className+= "radio";

        var label = document.createElement("label");

        var radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "answerSelectionInput"+count;
        radioInput.id = "answerSelection"+i;
//        radioInput.setAttribute("onclick","javascript:check(this)");
        radioInput.value = result[i].selection_status;

        label.appendChild(radioInput);
        label.innerHTML += result[i].selection_content;
        radioDiv.appendChild(label);
        contents.appendChild(radioDiv);

    }
}

//var check = function checkAnswer(element){
//    if(element.value == 1){
//        correct += 1;
//    }
//    
//};

function showResult(){
   
//    var correct_count = 0;
//    
//    for(var i=0; i<question.length;i++){
//        var radios = document.getElementById("answerSelection"+i);
//        
//        if(radios.checked == true && radios.value == 1){
//            correct_count += 1;
//          
//        }
//    }
////    window.location.href = "www/index.html";
//      alert(correct_count);
    
    alert("Questions answered correctly: 5");
}