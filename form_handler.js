const inputDate1 = document.getElementById('inputDate1');
inputDate1.addEventListener('input', dateEventMask);

const inputDate2 = document.getElementById('inputDate2');
inputDate2.addEventListener('input', dateEventMask);

function calcPersonal() {
	inputDate2.value = "";
	calculate();
}
function calc_2() {
	calculate();
}

function dateEventMask(e) {
	var val = e.data;
	var str = e.target.value;
	var len = e.target.value.length;
	
	/**remove unallowed characters */
	if(val && !val.match(/[0-9.]/)) 
	{
		e.target.value = str.substring(0, str.length - 1);			
	}

	if(len !== 1 || len !== 3) {
		if(val == '.') {
			e.target.value = str.substring(0, str.length - 1);			
		}
	}
	if(len === 2) {
		e.target.value += '.';
	}
	if(len === 5) {
		e.target.value += '.';
	}		
};