
function getDiemTb()
{
    let a = document.getElementById("vatly").value;
    let b = document.getElementById("hoahoc").value;
    let c = document.getElementById("sinhhoc").value;
    let d = parseInt(a);
    let g = parseInt(b);
    let f = parseInt(c);
    let TB = (d+g+f)/3;
    let sum = d + g + f;
    document.write("điểm trung bình là: " + TB );
    document.write("tổng điểm: " + sum);
}