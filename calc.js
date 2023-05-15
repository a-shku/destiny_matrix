const dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\.](0?[1-9]|1[012])[\/\.]\d{4}$/;

const svgNS = "http://www.w3.org/2000/svg";
var svgLayer;

const svg_x = document.getElementById("svg_x");

const svg_0 = elementFromHTMLString(getMatrixTemplate("svg_0"));
const svg_1 = elementFromHTMLString(getMatrixTemplate("svg_1"));
const svg_2 = elementFromHTMLString(getMatrixTemplate("svg_2"));

/* ------------------------------------------------------------------------- */

var dotLL0 = [];
var dotLL20 = [];
var dotLL40 = [];
var dotLL60 = [];

var dotCenter = [];

let dotCenterGen = [];

var dotLL10 = [];
var dotLL30 = [];
var dotLL50 = [];
var dotLL70 = [];

var dotMM01 = [];
var dotMM02 = [];
var dotMM21 = [];
var dotMM22 = [];
var dotMM41 = [];
var dotMM42 = [];
var dotMM61 = [];
var dotMM62 = [];

var dotSS11 = [];
var dotSS12 = [];
var dotSS13 = [];
var dotSS51 = [];
var dotSS52 = [];
var dotSS53 = [];

var dotMMC1 = [];
var dotSSC1 = [];

var dotXS5 = [];
var dotXS3 = [];
var dotXS7 = [];
var dotXS2 = [];
var dotXS4 = [];
var dotXS6 = [];
var dotXS8 = [];

var dotXS15 = [];
var dotXS13 = [];
var dotXS17 = [];
var dotXS12 = [];
var dotXS14 = [];
var dotXS16 = [];
var dotXS18 = [];

var dotXS25 = [];
var dotXS23 = [];
var dotXS27 = [];
var dotXS22 = [];
var dotXS24 = [];
var dotXS26 = [];
var dotXS28 = [];

var dotXS35 = [];
var dotXS33 = [];
var dotXS37 = [];
var dotXS32 = [];
var dotXS34 = [];
var dotXS36 = [];
var dotXS38 = [];

var dotXS45 = [];
var dotXS43 = [];
var dotXS47 = [];
var dotXS42 = [];
var dotXS44 = [];
var dotXS46 = [];
var dotXS48 = [];

var dotXS55 = [];
var dotXS53 = [];
var dotXS57 = [];
var dotXS52 = [];
var dotXS54 = [];
var dotXS56 = [];
var dotXS58 = [];

var dotXS65 = [];
var dotXS63 = [];
var dotXS67 = [];
var dotXS62 = [];
var dotXS64 = [];
var dotXS66 = [];
var dotXS68 = [];

var dotXS75 = [];
var dotXS73 = [];
var dotXS77 = [];
var dotXS72 = [];
var dotXS74 = [];
var dotXS76 = [];
var dotXS78 = [];

/* ------------------------------------------------------------------------- */

var dotLL0_x;
var dotLL20_x;
var dotLL40_x;
var dotLL60_x;

var dotCenter_x;

var dotLL10_x;
var dotLL30_x;
var dotLL50_x;
var dotLL70_x;

var dotMM41_x;
var dotMM42_x;
var dotMM61_x;
var dotMM62_x;

var dotSS51_x;
var dotSS52_x;
var dotSS53_x;

let sky = [];
let earth = [];
let personalDestinationResult = [];

let paternity = [];
let maternity = [];
let genResult = [];

let commonResult = [];

/* ------------------------------------------------------------------------- */
/* --------- CALCULATE ----------------------------------------------------- */
/* ------------------------------------------------------------------------- */

function calc(personIndex, dateVal) {
    console.log("person", personIndex, dateVal);

    var dd = dateVal.split(".")[0];
    var mm = dateVal.split(".")[1];
    var yyyy = dateVal.split(".")[2];

    dotLL0[personIndex] = parseInt(sum22(dd));
    dotLL20[personIndex] = parseInt(sum22(mm));
    dotLL40[personIndex] = parseInt(sum22(yyyy.toString()));
    dotLL60[personIndex] = parseInt(sum22(dd + mm + yyyy));

    dotCenter[personIndex] = base22(dotLL0[personIndex] + dotLL20[personIndex] + dotLL40[personIndex] + dotLL60[personIndex]);

    dotLL10[personIndex] = base22(dotLL0[personIndex] + dotLL20[personIndex]);
    dotLL30[personIndex] = base22(dotLL20[personIndex] + dotLL40[personIndex]);
    dotLL50[personIndex] = base22(dotLL40[personIndex] + dotLL60[personIndex]);
    dotLL70[personIndex] = base22(dotLL0[personIndex] + dotLL60[personIndex]);

    dotCenterGen[personIndex] = base22(dotLL10[personIndex] + dotLL30[personIndex] + dotLL50[personIndex] + dotLL70[personIndex]);

    dotMM02[personIndex] = base22(dotCenter[personIndex] + dotLL0[personIndex]);
    dotMM01[personIndex] = base22(dotMM02[personIndex] + dotLL0[personIndex]);
    dotMM22[personIndex] = base22(dotCenter[personIndex] + dotLL20[personIndex]);
    dotMM21[personIndex] = base22(dotMM22[personIndex] + dotLL20[personIndex]);
    dotMM42[personIndex] = base22(dotCenter[personIndex] + dotLL40[personIndex]);
    dotMM41[personIndex] = base22(dotMM42[personIndex] + dotLL40[personIndex]);
    dotMM62[personIndex] = base22(dotCenter[personIndex] + dotLL60[personIndex]);
    dotMM61[personIndex] = base22(dotMM62[personIndex] + dotLL60[personIndex]);

    dotSS11[personIndex] = base22(dotLL0[personIndex] + dotLL20[personIndex]);
    dotSS12[personIndex] = base22(dotMM01[personIndex] + dotMM21[personIndex]);
    dotSS13[personIndex] = base22(dotMM02[personIndex] + dotMM22[personIndex]);
    dotSS51[personIndex] = base22(dotLL40[personIndex] + dotLL60[personIndex]);
    dotSS52[personIndex] = base22(dotMM41[personIndex] + dotMM61[personIndex]);
    dotSS53[personIndex] = base22(dotMM42[personIndex] + dotMM62[personIndex]);

    dotMMC1[personIndex] = base22(dotLL10[personIndex] + dotLL30[personIndex] + dotLL50[personIndex] + dotLL70[personIndex]);
    dotSSC1[personIndex] = base22(dotCenter[personIndex] + dotLL40[personIndex]);

    dotXS5[personIndex] = base22(dotLL0[personIndex] + dotLL10[personIndex]);
    dotXS3[personIndex] = base22(dotLL0[personIndex] + dotXS5[personIndex]);
    dotXS7[personIndex] = base22(dotXS5[personIndex] + dotLL10[personIndex]);
    dotXS2[personIndex] = base22(dotLL0[personIndex] + dotXS3[personIndex]);
    dotXS4[personIndex] = base22(dotXS3[personIndex] + dotXS5[personIndex]);
    dotXS6[personIndex] = base22(dotXS5[personIndex] + dotXS7[personIndex]);
    dotXS8[personIndex] = base22(dotXS7[personIndex] + dotLL10[personIndex]);

    dotXS15[personIndex] = base22(dotLL10[personIndex] + dotLL20[personIndex]);
    dotXS13[personIndex] = base22(dotLL10[personIndex] + dotXS15[personIndex]);
    dotXS17[personIndex] = base22(dotXS15[personIndex] + dotLL20[personIndex]);
    dotXS12[personIndex] = base22(dotLL10[personIndex] + dotXS13[personIndex]);
    dotXS14[personIndex] = base22(dotXS13[personIndex] + dotXS15[personIndex]);
    dotXS16[personIndex] = base22(dotXS15[personIndex] + dotXS17[personIndex]);
    dotXS18[personIndex] = base22(dotXS17[personIndex] + dotLL20[personIndex]);

    dotXS25[personIndex] = base22(dotLL20[personIndex] + dotLL30[personIndex]);
    dotXS23[personIndex] = base22(dotLL20[personIndex] + dotXS25[personIndex]);
    dotXS27[personIndex] = base22(dotXS25[personIndex] + dotLL30[personIndex]);
    dotXS22[personIndex] = base22(dotLL20[personIndex] + dotXS23[personIndex]);
    dotXS24[personIndex] = base22(dotXS23[personIndex] + dotXS25[personIndex]);
    dotXS26[personIndex] = base22(dotXS25[personIndex] + dotXS27[personIndex]);
    dotXS28[personIndex] = base22(dotXS27[personIndex] + dotLL30[personIndex]);

    dotXS35[personIndex] = base22(dotLL30[personIndex] + dotLL40[personIndex]);
    dotXS33[personIndex] = base22(dotLL30[personIndex] + dotXS35[personIndex]);
    dotXS37[personIndex] = base22(dotXS35[personIndex] + dotLL40[personIndex]);
    dotXS32[personIndex] = base22(dotLL30[personIndex] + dotXS33[personIndex]);
    dotXS34[personIndex] = base22(dotXS33[personIndex] + dotXS35[personIndex]);
    dotXS36[personIndex] = base22(dotXS35[personIndex] + dotXS37[personIndex]);
    dotXS38[personIndex] = base22(dotXS37[personIndex] + dotLL40[personIndex]);

    dotXS45[personIndex] = base22(dotLL40[personIndex] + dotLL50[personIndex]);
    dotXS43[personIndex] = base22(dotLL40[personIndex] + dotXS45[personIndex]);
    dotXS47[personIndex] = base22(dotXS45[personIndex] + dotLL50[personIndex]);
    dotXS42[personIndex] = base22(dotLL40[personIndex] + dotXS43[personIndex]);
    dotXS44[personIndex] = base22(dotXS43[personIndex] + dotXS45[personIndex]);
    dotXS46[personIndex] = base22(dotXS45[personIndex] + dotXS47[personIndex]);
    dotXS48[personIndex] = base22(dotXS47[personIndex] + dotLL50[personIndex]);

    dotXS55[personIndex] = base22(dotLL50[personIndex] + dotLL60[personIndex]);
    dotXS53[personIndex] = base22(dotLL50[personIndex] + dotXS55[personIndex]);
    dotXS57[personIndex] = base22(dotXS55[personIndex] + dotLL60[personIndex]);
    dotXS52[personIndex] = base22(dotLL50[personIndex] + dotXS53[personIndex]);
    dotXS54[personIndex] = base22(dotXS53[personIndex] + dotXS55[personIndex]);
    dotXS56[personIndex] = base22(dotXS55[personIndex] + dotXS57[personIndex]);
    dotXS58[personIndex] = base22(dotXS57[personIndex] + dotLL60[personIndex]);

    dotXS65[personIndex] = base22(dotLL60[personIndex] + dotLL70[personIndex]);
    dotXS63[personIndex] = base22(dotLL60[personIndex] + dotXS65[personIndex]);
    dotXS67[personIndex] = base22(dotXS65[personIndex] + dotLL70[personIndex]);
    dotXS62[personIndex] = base22(dotLL60[personIndex] + dotXS63[personIndex]);
    dotXS64[personIndex] = base22(dotXS63[personIndex] + dotXS65[personIndex]);
    dotXS66[personIndex] = base22(dotXS65[personIndex] + dotXS67[personIndex]);
    dotXS68[personIndex] = base22(dotXS67[personIndex] + dotLL70[personIndex]);

    dotXS75[personIndex] = base22(dotLL70[personIndex] + dotLL0[personIndex]);
    dotXS73[personIndex] = base22(dotLL70[personIndex] + dotXS75[personIndex]);
    dotXS77[personIndex] = base22(dotXS75[personIndex] + dotLL0[personIndex]);
    dotXS72[personIndex] = base22(dotLL70[personIndex] + dotXS73[personIndex]);
    dotXS74[personIndex] = base22(dotXS73[personIndex] + dotXS75[personIndex]);
    dotXS76[personIndex] = base22(dotXS75[personIndex] + dotXS77[personIndex]);
    dotXS78[personIndex] = base22(dotXS77[personIndex] + dotLL0[personIndex]);
}

function calc_x() {
    dotLL0_x = base22(dotLL0[0] + dotLL0[1]);
    dotLL20_x = base22(dotLL20[0] + dotLL20[1]);
    dotLL40_x = base22(dotLL40[0] + dotLL40[1]);
    dotLL60_x = base22(dotLL60[0] + dotLL60[1]);

    dotCenter_x = base22(dotCenter[0] + dotCenter[1]);

    dotLL10_x = base22(dotLL10[0] + dotLL10[1]);
    dotLL30_x = base22(dotLL30[0] + dotLL30[1]);
    dotLL50_x = base22(dotLL50[0] + dotLL50[1]);
    dotLL70_x = base22(dotLL70[0] + dotLL70[1]);

    dotMM42_x = base22(dotLL40_x + dotCenter_x);
    dotMM41_x = base22(dotLL40_x + dotMM42_x);
    dotMM62_x = base22(dotLL60_x + dotCenter_x);
    dotMM61_x = base22(dotLL60_x + dotMM62_x);

    dotSS51_x = base22(dotLL40_x + dotLL60_x);
    dotSS52_x = base22(dotMM41_x + dotMM61_x);
    dotSS53_x = base22(dotMM42_x + dotMM62_x);
}

/*personal destination*/
function calcPersonalDestination(personIndex, _sky1, _sky2, _earth1, _earth2) {
    sky[personIndex] = base22(_sky1 + _sky2);
    earth[personIndex] = base22(_earth1 + _earth2);
    personalDestinationResult[personIndex] = base22(sky[personIndex] + earth[personIndex]);
}

/*------------------------ */

/* ------------------------------------------------------------------------- */
/* --------- BASE 22 ------------------------------------------------------- */
/* ------------------------------------------------------------------------- */

_limitValue = function (value) {
    var result = parseInt(value);
    while (result > 22) {
        result = (result + "")
            .split("")
            .map((i) => (x += parseInt(i)), (x = 0))
            .reverse()[0];
    }
    return result;
};

function sum22(value) {
    if (value <= 22) {
        return value;
    }

    var result = 0;
    for (var i = 0; i < value?.length; i++) {
        result += value.charCodeAt(i) - 48;
    }
    if (result > 22) {
        return sum22(result.toString());
    } else {
        return result;
    }
}

function base22(value) {
    if (value <= 22) {
        return value;
    } else {
        return sum22(value.toString());
    }
}

/* ------------------------------------------------------------------------- */
/* --------- POPULATE ------------------------------------------------------ */
/* ------------------------------------------------------------------------- */

function addSvgText(x, y, value, fontSize, color = "#fff") {
    var svgText = document.createElementNS(svgNS, "text");
    svgText.setAttributeNS(null, "font-family", "Verdana");
    svgText.setAttributeNS(null, "font-size", fontSize);
    svgText.setAttributeNS(null, "alignment-baseline", "middle");
    svgText.setAttributeNS(null, "text-anchor", "middle");
    svgText.setAttributeNS(null, "x", x);
    svgText.setAttributeNS(null, "y", y);
    svgText.setAttributeNS(null, "fill", color);
    svgText.innerHTML = value;
    svgLayer.appendChild(svgText);
}

function addAgeValue(x, y, value) {
    addSvgText(x, y, value, "3", "#666");
}

function fillSvgX() {
    // --- main years old -----
    addSvgText(37, 127, dotLL0_x, 8);
    addSvgText(63.36039, 63.36039, dotLL10_x, 8);
    addSvgText(127, 37, dotLL20_x, 8);
    addSvgText(190.63961, 63.36039, dotLL30_x, 8);
    addSvgText(217, 127, dotLL40_x, 8);
    addSvgText(190.63961, 190.63961, dotLL50_x, 8);
    addSvgText(127, 217, dotLL60_x, 8);
    addSvgText(63.36039, 190.63961, dotLL70_x, 8);

    // --- center value -----
    addSvgText(127, 127, dotCenter_x, 8);

    // --- medium values -----
    addSvgText(200.5, 127, dotMM41_x, 5);
    addSvgText(187.5, 127, dotMM42_x, 5);
    addSvgText(127, 200.5, dotMM61_x, 5);
    addSvgText(127, 187.5, dotMM62_x, 5);

    // --- small values -----
    addSvgText(158.5, 158.5, dotSS53_x, 4);
    addSvgText(165, 165, dotSS52_x, 4);
    addSvgText(172, 172, dotSS51_x, 4);
}

function fillSvg(i) {
    // --- main years old -----
    addSvgText(37, 127, dotLL0[i], 8);
    addSvgText(63.36039, 63.36039, dotLL10[i], 8);
    addSvgText(127, 37, dotLL20[i], 8);
    addSvgText(190.63961, 63.36039, dotLL30[i], 8);
    addSvgText(217, 127, dotLL40[i], 8);
    addSvgText(190.63961, 190.63961, dotLL50[i], 8);
    addSvgText(127, 217, dotLL60[i], 8);
    addSvgText(63.36039, 190.63961, dotLL70[i], 8);

    // --- center value -----
    addSvgText(127, 127, dotCenter[i], 8);

    // --- medium values -----
    addSvgText(53.5, 127, dotMM01[i], 5);
    addSvgText(66.5, 127, dotMM02[i], 5);
    addSvgText(127, 53.5, dotMM21[i], 5);
    addSvgText(127, 66.5, dotMM22[i], 5);
    addSvgText(200.5, 127, dotMM41[i], 5);
    addSvgText(187.5, 127, dotMM42[i], 5);
    addSvgText(127, 200.5, dotMM61[i], 5);
    addSvgText(127, 187.5, dotMM62[i], 5);

    // --- small values -----
    addSvgText(82, 82, dotSS11[i], 4);
    addSvgText(89, 89, dotSS12[i], 4);
    addSvgText(95.5, 95.5, dotSS13[i], 4);
    addSvgText(158.5, 158.5, dotSS53[i], 4);
    addSvgText(165, 165, dotSS52[i], 4);
    addSvgText(172, 172, dotSS51[i], 4);

    // --- new values -----
    addSvgText(144, 127, dotMMC1[i], 5);
    addSvgText(155, 127, dotSSC1[i], 4);

    // --- years old -----
    addAgeValue(33.218854, 112.512988, dotXS2[i]);
    addAgeValue(34.735378, 104.888909, dotXS3[i]);
    addAgeValue(36.845405, 97.407318, dotXS4[i]);
    addAgeValue(39.535926, 90.11434, dotXS5[i]);
    addAgeValue(42.790354, 83.054941, dotXS6[i]);
    addAgeValue(46.588624, 76.272642, dotXS7[i]);
    addAgeValue(50.907318, 69.80926, dotXS8[i]);
    addAgeValue(70.80926, 50.907318, dotXS12[i]);
    addAgeValue(77.272642, 46.588624, dotXS13[i]);
    addAgeValue(84.054941, 42.790354, dotXS14[i]);
    addAgeValue(91.11434, 39.535926, dotXS15[i]);
    addAgeValue(98.407318, 36.845405, dotXS16[i]);
    addAgeValue(105.888909, 34.735378, dotXS17[i]);
    addAgeValue(113.512988, 33.218854, dotXS18[i]);
    addAgeValue(141.487012, 33.218854, dotXS22[i]);
    addAgeValue(149.111091, 34.735378, dotXS23[i]);
    addAgeValue(156.592682, 36.845405, dotXS24[i]);
    addAgeValue(163.88566, 39.535926, dotXS25[i]);
    addAgeValue(170.945059, 42.790354, dotXS26[i]);
    addAgeValue(177.727358, 46.588624, dotXS27[i]);
    addAgeValue(184.19074, 50.907318, dotXS28[i]);
    addAgeValue(203.092682, 69.80926, dotXS32[i]);
    addAgeValue(207.411376, 76.272642, dotXS33[i]);
    addAgeValue(211.209646, 83.054941, dotXS34[i]);
    addAgeValue(214.464074, 90.11434, dotXS35[i]);
    addAgeValue(217.154595, 97.407318, dotXS36[i]);
    addAgeValue(219.264622, 104.888909, dotXS37[i]);
    addAgeValue(220.781146, 112.512988, dotXS38[i]);
    addAgeValue(220.781146, 141.487012, dotXS42[i]);
    addAgeValue(219.264622, 149.111091, dotXS43[i]);
    addAgeValue(217.154595, 156.592682, dotXS44[i]);
    addAgeValue(214.464074, 163.88566, dotXS45[i]);
    addAgeValue(211.209646, 170.945059, dotXS46[i]);
    addAgeValue(207.411376, 177.727358, dotXS47[i]);
    addAgeValue(203.092682, 184.19074, dotXS48[i]);
    addAgeValue(184.19074, 203.092682, dotXS52[i]);
    addAgeValue(177.727358, 207.411376, dotXS53[i]);
    addAgeValue(170.945059, 211.209646, dotXS54[i]);
    addAgeValue(163.88566, 214.464074, dotXS55[i]);
    addAgeValue(156.592682, 217.154595, dotXS56[i]);
    addAgeValue(149.111091, 219.264622, dotXS57[i]);
    addAgeValue(141.487012, 220.781146, dotXS58[i]);
    addAgeValue(113.512988, 220.781146, dotXS62[i]);
    addAgeValue(105.888909, 219.264622, dotXS63[i]);
    addAgeValue(98.407318, 217.154595, dotXS64[i]);
    addAgeValue(91.11434, 214.464074, dotXS65[i]);
    addAgeValue(84.054941, 211.209646, dotXS66[i]);
    addAgeValue(77.272642, 207.411376, dotXS67[i]);
    addAgeValue(70.80926, 203.092682, dotXS68[i]);
    addAgeValue(50.907318, 184.19074, dotXS72[i]);
    addAgeValue(46.588624, 177.727358, dotXS73[i]);
    addAgeValue(42.790354, 170.945059, dotXS74[i]);
    addAgeValue(39.535926, 163.88566, dotXS75[i]);
    addAgeValue(36.845405, 156.592682, dotXS76[i]);
    addAgeValue(34.735378, 149.111091, dotXS77[i]);
    addAgeValue(33.218854, 141.487012, dotXS78[i]);
}

/* ------------------------------------------------------------------------- */

function setCellValue22(id, value) {
    document.getElementById(id).innerHTML = base22(value);
}

function populateA(i) {
    paternity[i] = base22(dotLL30[i] + dotLL70[i]);
    maternity[i] = base22(dotLL10[i] + dotLL50[i]);
    genResult[i] = base22(paternity[i] + maternity[i]);
    setCellValue22("mat1_" + i, dotLL30[i]);
    setCellValue22("mat2_" + i, dotLL70[i]);
    setCellValue22("mat3_" + i, dotLL30[i] + dotLL70[i]);
    setCellValue22("pat1_" + i, dotLL10[i]);
    setCellValue22("pat2_" + i, dotLL50[i]);
    setCellValue22("pat3_" + i, dotLL10[i] + dotLL50[i]);

    setCellValue22("genResult_" + i, base22(genResult[i]));
}

function populatePersonalDestination(personIndex) {
    setCellValue22("sky_" + personIndex, sky[personIndex]);
    setCellValue22("earth_" + personIndex, earth[personIndex]);
    setCellValue22("personalDestination_" + personIndex, personalDestinationResult[personIndex]);
}

function calcSpiritualDestination(personIndex) {
    commonResult[personIndex] = personalDestinationResult[personIndex] + genResult[personIndex];
    setCellValue22(`common${personIndex}_1`, personalDestinationResult[personIndex]);
    setCellValue22(`common${personIndex}_2`, genResult[personIndex]);
    setCellValue22(`spiritualDestination_${personIndex}`, commonResult[personIndex]);
}

function populateB(i) {
    setCellValue22("cell_a1_" + i, dotLL0[i]);
    setCellValue22("cell_a2_" + i, dotLL20[i]);
    setCellValue22("cell_a3_" + i, dotSS11[i]);

    setCellValue22("cell_b1_" + i, dotMM01[i]);
    setCellValue22("cell_b2_" + i, dotMM21[i]);
    setCellValue22("cell_b3_" + i, dotSS12[i]);

    setCellValue22("cell_c1_" + i, dotMM02[i]);
    setCellValue22("cell_c2_" + i, dotMM22[i]);
    setCellValue22("cell_c3_" + i, dotSS13[i]);

    setCellValue22("cell_d1_" + i, dotCenter[i]);
    setCellValue22("cell_d2_" + i, dotCenter[i]);
    setCellValue22("cell_d3_" + i, base22(dotCenter[i] * 2));

    setCellValue22("cell_e1_" + i, dotMM42[i]);
    setCellValue22("cell_e2_" + i, dotMM62[i]);
    setCellValue22("cell_e3_" + i, dotSS53[i]);

    setCellValue22("cell_f1_" + i, dotMM41[i]);
    setCellValue22("cell_f2_" + i, dotMM61[i]);
    setCellValue22("cell_f3_" + i, dotSS52[i]);

    setCellValue22("cell_g1_" + i, dotLL40[i]);
    setCellValue22("cell_g2_" + i, dotLL60[i]);
    setCellValue22("cell_g3_" + i, dotSS51[i]);

    var total_h1 = dotLL0[i] + dotMM01[i] + dotMM02[i] + dotCenter[i] + dotMM42[i] + dotMM41[i] + dotLL40[i];
    setCellValue22("cell_h1_" + i, total_h1);
    var total_h2 = dotLL20[i] + dotMM21[i] + dotMM22[i] + dotCenter[i] + dotMM62[i] + dotMM61[i] + dotLL60[i];
    setCellValue22("cell_h2_" + i, total_h2);
    var total_h3 = base22(total_h1) + base22(total_h2);
    setCellValue22("cell_h3_" + i, total_h3);
}

/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */

function setSvgUniversal(svg, id) {
    let svgContent$ = svg.getElementById(id);

    if (typeof svgContent$ != "undefined" && svgContent$ != null) {
        svgContent$.parentNode.removeChild(svgContent$);
    }

    svgContent$ = document.createElementNS(svgNS, "g");
    svgContent$.setAttributeNS(null, "id", id);
    svg.appendChild(svgContent$);

    return svgContent$;
}

// ---------------------------------------------------------------

function getAge(date) {
    var arr = date.split(".");
    var value = (new Date() - new Date(arr[2] + "-" + arr[1] + "-" + arr[0] + "T00:00")) / (1000 * 60 * 60 * 24 * 365);
    var message = "";
    if (value < 1) {
        message = "0 лет";
    } else if (value > 1 && value < 2) {
        message = parseInt(value) + " год";
    } else {
        message = Math.floor(value) + " лет";
    }

    return message;
}

// ---------------------------------------------------------------

function calculatePersonal(personDate) {
    if (!personDate?.match(dateformat)) {
        return;
    }

    const personIndex = 0;
    /*title of person section */
    var age_personal = document.getElementById("age_personal");
    age_personal.innerHTML = getAge(personDate);

    calc(personIndex, personDate);

    svgLayer = setSvgUniversal(svg_0, "svgGroupLayer_0");
    fillSvg(personIndex);

    populateA(personIndex);
    populateB(personIndex);

    calcPersonalDestination(personIndex, dotLL20[personIndex], dotLL60[personIndex], dotLL0[personIndex], dotLL40[personIndex]);

    populatePersonalDestination(personIndex);

    calcSpiritualDestination(personIndex);

    document.getElementById("svgContainerPersonal").appendChild(svg_0);
    document.querySelector("#panel_personal").classList.remove("d-none");
}

function calculate(person1, person2) {
    if (person1?.match(dateformat) && person2?.match(dateformat)) {
        const personIndex_1 = 1;
        const personIndex_2 = 2;
        var age_partner_1 = document.getElementById("age_partner_1");
        age_partner_1.innerHTML = getAge(person1);

        calc(personIndex_1, person1);
        calc_x();

        svgLayer = setSvgUniversal(svg_1, "svgGroupLayer_1");
        fillSvg(personIndex_1);

        svgLayer = setSvgUniversal(svg_x, "svgGroupLayer_compatibility");
        fillSvgX();

        document.getElementById("svgContainerPartner_1").appendChild(svg_1);

        //////////////////////////
        var age_partner_2 = document.getElementById("age_partner_2");
        age_partner_2.innerHTML = getAge(person2);

        calc(personIndex_2, person2);
        calc_x();

        svgLayer = setSvgUniversal(svg_2, "svgGroupLayer_2");
        fillSvg(personIndex_2);

        document.getElementById("svgContainerPartner_2").appendChild(svg_2);
        ///////////////
        document.querySelector("#panelX").classList.remove("d-none");
    }
}
