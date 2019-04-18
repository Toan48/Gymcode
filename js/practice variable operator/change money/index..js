

let Amount = " ";
let fromcurrency = " ";
let tocurrency = " ";
let result = " ";

function changeMoney()
{
    Amount = document.getElementById("amount").value;
    fromcurrency = document.getElementById("from_currency").value;
    tocurrency = document.getElementById("to_currency").value;
    if(Amount == "" )
    {
        alert("vui lòng nhập số tiền cần chuyển đổi")
    }
    if(Amount != "" )
    {
        if(fromcurrency == "vietnam" && tocurrency == "usd")
        {
            result = Amount/23;
            document.getElementById("ketqua").innerHTML = result;
        }
        if(fromcurrency == "usd" && tocurrency == "vietnam")
        {
            result = Amount*23;
            document.getElementById("ketqua").innerHTML = result;
        }
    }
}