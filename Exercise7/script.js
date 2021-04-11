
function displayNav(){
	var el = document.getElementById('main_header_nav');
  	if (el.className === "header_nav") {
    	el.className += " responsive";
  	} else {
    	el.className = "header_nav";
  	}
}

function getNewsDisplay(){
	if(sessionStorage.getItem('newsShown')){
		displayNews();
	}else{
		var el = document.getElementById('btn_news');
		el.style.display ="flex";
	}
}
function displayNews(){
	sessionStorage.setItem('newsShown', 1);
	var el_hide = document.getElementById('btn_news');
	var el_show = document.getElementById('news_displayed');
	el_hide.style.display ="none";
	el_show.style.display = "block";

}

function displayTutorial_nav(el){
  	if (el.className === "tutorial_nav") {
    	el.className += " show_tutorial_nav";
  	} else {
    	el.className = "tutorial_nav";
  	}
}

function applyChosenColorScheme(){
	if(localStorage.colorScheme){
		changeColorScheme(localStorage.colorScheme);
	}
}

function changeColorScheme(color_index){
	localStorage.setItem("colorScheme", color_index);
	if(color_index == '1'){
		document.getElementById('my_index_header').style.backgroundColor = "#000000";
		document.getElementById('my_rights_footer').style.backgroundColor = "#000000";
		var elements = document.querySelectorAll('[class^="side_content"]');
			for(var i = 0; i < elements.length; i++){
				elements[i].style.backgroundColor = "#E1E1E1";
			}
		}
		else{
			document.getElementById('my_index_header').style.backgroundColor = "#06042E";
			document.getElementById('my_rights_footer').style.backgroundColor = "#06042E";
			var elements = document.querySelectorAll('[class^="side_content"]');
			for(var i = 0; i < elements.length; i++){
				elements[i].style.backgroundColor = "#CAE0CF";
			}
		}
}

function getDailyFact(){
	var current_date = new Date();
	var current_day = current_date.getDay();
	var el = document.querySelector('#fun_fact');
	el.innerHTML = current_day;
	
	switch(current_day) {
	  case 0:
	    el.innerHTML = 'SQL Server is one of the market leaders in database technology.';
	    break;
	  case 1:
	      el.innerHTML = "SQL Server's main competitors are Oracle and PostgreSQL.";
	      break;
	  case 2:
	    el.innerHTML = 'SQL was initially developed at IBM.';
	    break;
	  case 3:
	    el.innerHTML = 'SQL is Turing complete.';
	    break;
	  case 4:
	    el.innerHTML = 'SQL is a little more than 50 years old.';
	    break;
	  case 5:
	    el.innerHTML = 'The last stable release of the SQL Server was in <em>4 November 2019</em>.';
	    break;
	  case 6:
	    el.innerHTML = 'SQl Server is wirtten in the programmig languages <em>C</em> and <em>C++</em>';
	}
}

window.getNewsDisplay = getNewsDisplay();