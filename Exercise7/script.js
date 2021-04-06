
function displayNav(){
	var el = document.getElementById('main_header_nav');
  	if (el.className === "header_nav") {
    	el.className += " responsive";
  	} else {
    	el.className = "header_nav";
  	}
}

function changeColorScheme(color_index){
	switch(color_index){
		case 1:
			document.getElementById('my_index_header').style.backgroundColor = "#000000";
			document.getElementById('my_rights_footer').style.backgroundColor = "#000000";
			var elements = document.querySelectorAll('[class^="side_content"]');
			for(var i = 0; i < elements.length; i++){
				elements[i].style.backgroundColor = "#E1E1E1";
			}
		    break;
		case 2:
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
	var el = document.getElementById('fun_fact');
	el.innerHTML = current_day;

	switch(current_day) {
	  case 1:
	    el.innerHTML = 'SQL Server is one of the market leaders in database technology';
	    break;
	  case 2:
	      el.innerHTML = "SQL Server's main competitors are Oracle and PostgreSQL.";
	  case 3:
	    el.innerHTML = 'SQL is Turing complete.';
	    break;
	    break;
	  case 4:
	    el.innerHTML = 'SQL was initially developed at IBM.';
	    break;
	  case 5:
	    el.innerHTML = 'SQL is a little more than 50 years old.';
	    break;
	  case 6:
	    el.innerHTML = 'The last stable release of the SQL Server was in <em>4 November 2019</em>.';
	    break;
	  case 7:
	    el.innerHTML = 'SQl Server is wirtten in the programmig languages <em>C</em> and <em>C++</em>';
	}
}