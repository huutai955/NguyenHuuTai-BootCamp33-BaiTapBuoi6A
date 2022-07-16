/* 
Bài 1:Tìm số nguyên dương nhỏ nhất sao cho 
1 + 2 + ... + n > 10000
Input: 

Process: Tạo vòng lặp for sau đó cho điều kiện tổng (sum) nhỏ hơn 
10000 sau đó cho sum = sum + i sau mỗi lần lặp.

Output:Số nguyên dương nhỏ nhất
*/

function findSmallestN() {
    var i = 1;
    var sum = 0;
    for (i = 1; sum < 10000; i++) {
        sum += i;
    }
    var spanTag = document.getElementById("soNguyenDuong");
    spanTag.innerText = `Số nguyên dương nhỏ nhất là: ${i}`;
}
findSmallestN();



/* 
Bài 2:Viết chương trình nhập vào 2 số x, n tính tổng: 
S(n) = x + x^2+ x^3 + … + x^n (Sử dụng vòng lặp và hàm)
Input: x, n;

Process:Tạo hàm cùng với vòng lặp for và áp dụng công thức 
S(n) = x + x^2+ x^3 + … + x^n sau đó xuất thông tin ra màn hình


Output:Tổng(S)
*/

function sum() {
    var inputX = document.getElementById("inputX").value;
    var inputY = document.getElementById("inputN").value;
    var tinhTong = document.getElementById("tinhTong");
    var i = 1;
    var sum = 0;
    var x = inputX;
    var n = inputY;
    for (i = 1; i <= n; i++) {
        sum += Math.pow(x, i);
    }

    tinhTong.innerText = sum;
}



/* 
Bài 3: Nhập vào n. Tính giai thừa 1*2*...n
Input: n

Process:Tạo vòng lặp sau đó cho biến i chạy từ 1 đến n và
chèn công thức tính giai thừa như đề bài đã cho và xuất kết
quả ra màn hình

Output:Tổng giai thừa
*/


function countSumFactorial() {
    var inputY = document.getElementById("inputN2").value;
    var tinhGiaiThua = document.getElementById("tinhGiaiThua");
    var n = inputY;
    var sum = 1;
    for (var i = 1; i <= n; i++) {
        sum = sum * i;
    }
    tinhGiaiThua.innerHTML = sum;
}


/*
Bài 4:Hãy viết chương trình khi click vào button sẽ in ra 10 
thẻ div.Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì
background màu xanh.

Input:

Process: Tạo 10 thẻ bên html sau đó dùng getElementsByClassName 
để lấy 10 thẻ qua. Sau đó tạo vòng lặp sau đó chèn if else vào 
vòng lặp nếu thẻ nào chia hết cho 2 thì là thẻ div chẵn còn thẻ
nào ở không chia hết cho 2 thì là thẻ div lẻ. Và thay đổi style 
như đề bài đã cho

Output: Thẻ div lẻ và chẵn
*/

function evenAndOddNumbers() {
    var number = document.getElementsByClassName("numbers")
    for (var i = 0; i < number.length;i++) {
      if (i % 2 == 0) {
        number[i].innerText = `Số lẻ ${i + 1}`;
        number[i].style.backgroundColor = "blue";
        number[i].style.color = "white";
        number[i].style.padding = "5px 10px";
      }else {
        number[i].innerText = `Số chẵn ${i + 1}`;
        number[i].style.backgroundColor = "red";
        number[i].style.color = "white";
        number[i].style.padding = "5px 10px";
      }
    }
}



