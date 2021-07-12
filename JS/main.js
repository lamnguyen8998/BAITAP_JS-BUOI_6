
function timSoNguyen(){

var S = 0
var n = 0
var soNguyenEL = document.getElementById('soNguyen')
  while(S < 10000)
  {
    
    n++;
    S = S + n;
  }
  console.log(n);
var pEL = document.createElement('p')
pEL.innerHTML = "Sô nguyên dương nhỏ nhất :" + n;

soNguyenEL.appendChild (pEL);

soNguyenEL.style.display = "block";

}


function tinhTong(x,n) {
    var x = document.getElementById('nhapSoX').value;
    var n = document.getElementById('nhapSoN').value;
    var ketQua = 0;
    var soMu = 1;
    var ketQuaTinhEL = document.getElementById('ketQuaTinh')
    while(soMu <= n) {
        ketQua += Math.pow(x,soMu); 
        soMu++;
    }
  
    var pEL = document.createElement('p')
pEL.innerHTML =  ketQua;

ketQuaTinhEL.appendChild (pEL);

ketQuaTinhEL.style.display = "block";


}


function giaiThua() {
  var tinhGiaTHuaN = document.getElementById('tinhN').value;

  gt = 1;
			for (i = 1	; i <= tinhGiaTHuaN; i++) {
				gt = gt * i;
			}

var tinhGiaiThuaEL = document.getElementById("tinhGiaiThua");

var pEL = document.createElement('p')
pEL.innerHTML = gt;

tinhGiaiThuaEL.appendChild(pEL);

tinhGiaiThuaEL.style.display = "block";
}


function taoTheDiv10() {

  var divs = document.getElementsByTagName("div");
     for (var i = 0; i < divs.length; i++){
                   
        if ((i + 1) % 2 == 0){
            divs[i].style.background = "red";
                    }
        else {
             divs[i].style.background = "blue";
              }
            }

            taoTheDiv.style.display = "block";

}




