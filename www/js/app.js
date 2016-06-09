function getParam(name){
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if(results == null){
        return "";
    }else{
        return results[1];
    }
                                                       
}
        
function getUrlData(){
    var id = getParam("id");
}

function getPassageId(){
    var id = getParam("id");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
          var result = JSON.parse(xhr.responseText);
          for(var i=0; i<result.length; i++){
              var selections = document.getElementById("passageSelections");
              
              var choice = document.createElement('a');
              
              var br = document.createElement('br');
              
              choice.setAttribute('href', 'passage.html?id='+result[i].id);
              choice.setAttribute('class','btn btn-primary btn-block');
              
              choice.innerHTML = result[i].title;
              
              selections.appendChild(choice);
              selections.appendChild(br);
          }
//          alert(xhr.responseText);
      }
    };
    xhr.open("GET","http://smartgreen.my/bitdwilson/api/getPassageSelections.php?cid="+id, true);
    xhr.send();
    
}


function readPassage(){
    var id = getParam("id");
    var nxtBtn = document.getElementById("nextBtn");
    nxtBtn.href = "questions.html?id="+id;
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
           
            var result = JSON.parse(xhr.responseText);
            document.getElementById("passage_content").innerHTML = result.content;
            
            document.getElementById("passage_title").innerHTML = result.title;
        }
    };
    xhr.open("GET","http://smartgreen.my/bitdwilson/api/getPassage.php?pid="+id, true);
    xhr.send();
    
}


function login(){
    var username = document.getElementById("username").value.trim();
    var password  = document.getElementById("password").value.trim()
    
//    var xhr = new XMLHttpRequest();
//    xhr.onreadystatechange = function(){
//        if(xhr.readyState == 4 && xhr.status == 200){
//            var result = xhr.responseText;
//            if(result == 1){
//                 alert("Welcome "+username);
//                window.location.href = "index.html";
//            }else{
//                alert("Wrong Username or Password");
//            }
//            
//            alert(result);
//        }else{
//            alert(xhr.responseText);
//        }
//    };
//    xhr.open("GET","http://smartgreen.my/bitdwilson/api/userlogin.php?username="+username+"&password="password, true);
//    xhr.send();
    
    if(username == "wilo" && password == "123"){
         alert("Welcome "+username);
          window.location.href = "index.html";
    }else{
        alert("Wrong Username or Password");
    }
    
}