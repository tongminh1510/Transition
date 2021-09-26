let weight = parseFloat(prompt("Nhập cân nặng của bạn" +" "));
let height = parseFloat(prompt("Nhập chiều cao của bạn"+ " "));
let BMI = weight / (height * height);
if ( BMI > 40 ) {
    alert ("Béo phì độ III");
}else if ( BMI >= 35) {
    alert ("Béo phì độ II");
}else if ( BMI >= 30) {
    alert ("Béo phì độ 1");
} else if ( BMI >=25 ) {
    alert ("Thừa cân") ;
} else if ( BMI >=18.5) {
    alert("Bình thường") ;
} else if ( BMI >= 17) {
    alert ("Gầy độ I") ;
} else if ( BMI >=16 ) {
    alert ( "Gầy độ II");
} else {
    alert ("gầy độ III");
}