function openTab(tabName) {
  var i;
  var x = document.getElementsByClassName("tab");
  var y = document.getElementsByClassName('bt')
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
}
for (i = 0; i < x.length; i++) {
    y[i].style.backgroundColor = "rgba(0, 0, 0, 0.8)";
}
  document.getElementById(tabName).style.display = "block"; 
  document.getElementsByClassName(tabName)[0].style.backgroundColor = 'rgba(40, 40, 40, 0.9)';  
}

function remove_item(th){
	ul = document.getElementById("p".concat(th.id));
	if (ul.style.display == "none") {
		ul.style.display = "block";
		th.classList.add("black")
	} else {
		ul.style.display = "none";
		th.classList.remove("black")
	}

}


function clicked() {
       if (confirm('Do you want to delete this Item?')) {
           console.log("Deleted");
       } else {
           return false;
       }
    }

function fade_p(){
	document.getElementById('myPopup').classList.toggle("show");
}

function hideid(cls) {
	inp = document.getElementsByClassName(cls)

	
	for (inpx of inp){
		console.log(inpx.style.display)
		if (inpx.style.display != "none") {
			inpx.style.display = "none"
			
		}
		else {
			inpx.style.display = "block"
		}
	}
}

function intSearch() {
  // Declare variables
  var input, filter, ul, li, a, i, b, txtValue, active=0;
 
  input = document.getElementById('myInput');
  
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');
  none = document.getElementById("none");
  none.style.display= "none";
  
  res = filter.split('/');
  

  
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
		li[i].style.display = "none";
		a = li[i].getElementsByTagName("a")[0];
		txtValue = a.textContent || a.innerText;
		if (txtValue.toUpperCase().indexOf(res[0]) > -1) {
			li[i].style.display = "block";
			active++;
			if (res[1]){
				if (txtValue.toUpperCase().indexOf(res[1]) > -1) {
					li[i].style.display = "block";
					active++;
					} else {
					li[i].style.display = "none";
				}
			}
		}
	}

	if (active == 0){
	none.style.display= 'block';}
	document.getElementById('label').style.display = 'block';
	}

function sortTableABC(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("mytable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
function sortTable123(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("mytable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      

      x= parseInt(x.innerHTML.replace(/\D/g,''))
      y= parseInt(y.innerHTML.replace(/\D/g,''))
      if (dir == "asc") {
        if (x > y) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x < y) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/

      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function tableSearch() {
  // Declare variables
  var input, filter, ul, li, a, i, b, txtValue, active=0;
 
  input = document.getElementById('myInput');

  
  filter = input.value.toUpperCase();
  table = document.getElementById("mytable");

  li = table.getElementsByTagName('tr');

  res = filter.split('/');
  

  console.log('')
  // Loop through all list items, and hide those who don't match the search query
  for (i = 1; i < (li.length); i++) {
  		if (filter ){li[i].style.display = "none";} else {li[i].style.display = "table-row";}
		
		a = li[i].getElementsByTagName("td");
		match1 = false
		match2 = false
		match3 = false
		
		for (m = 0; m<a.length; m++){

			txtValue = a[m].textContent || a[m].innerText;
			if (txtValue.toUpperCase().indexOf(res[0]) > -1) {				
				match1=true				
			}
			if (res[1]){
					if (txtValue.toUpperCase().indexOf(res[1]) > -1) {						
						match2 = true
						console.log("2", txtValue)						
					} 
				}

		if (match1){
			if (res[1]){
				if (match2) {li[i].style.display = "table-row";}				
			}
			else {li[i].style.display = "table-row";}
		}
		}
	}


}
