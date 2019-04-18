

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
    else
    {
        if(fromcurrency == "vietnam" && tocurrency == "usd")
        {
            result = Amount/23;
            document.getElementById("ketqua").innerHTML = result;
        }
        else if(fromcurrency == "usd" && tocurrency == "vietnam")
        {
            result = Amount*23;
            document.getElementById("ketqua").innerHTML = result;
        }
        else
        {
            alert("vui lòng kiểm tra lại");
        }
    }
}