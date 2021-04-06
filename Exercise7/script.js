
function displayNav(){
	console.log('in');
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