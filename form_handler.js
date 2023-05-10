const inputDatePersonal = document.getElementById("inputDatePersonal");
inputDatePersonal.addEventListener("input", dateEventMask);

const inputDatePartner1 = document.getElementById("inputDatePartner1");
inputDatePartner1.addEventListener("input", dateEventMask);

const inputDatePartner2 = document.getElementById("inputDatePartner2");
inputDatePartner2.addEventListener("input", dateEventMask);

function calcPersonal() {
    // inputDate2.value = "";
    calculate(inputDatePersonal.value);
}
function calc_compatibility() {
    calculate(inputDatePartner1.value, inputDatePartner2.value);
}

function dateEventMask(e) {
    var val = e.data;
    var str = e.target.value;
    var len = e.target.value.length;

    /**remove unallowed characters */
    if (val && !val.match(/[0-9.]/)) {
        e.target.value = str.substring(0, str.length - 1);
    }

    if (len !== 1 || len !== 3) {
        if (val == ".") {
            e.target.value = str.substring(0, str.length - 1);
        }
    }
    if (len === 2) {
        e.target.value += ".";
    }
    if (len === 5) {
        e.target.value += ".";
    }
}
