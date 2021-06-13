function getEle(id){
    return document.querySelector(id);
};
function getEleValue(id){
    return document.querySelector(id).value;
};

// Bài 1: Tìm số nguyên dương nhỏ nhất n sao cho
// 1 + 2 + ... + n > 10,000

// Input dãy số 1, 2, 3, ..., n với n >= 1
var n = 0;
var total = 0;
while(total <= 10000) { // Operation tính total = tổng dãy số, cộng dồn khi n tăng 1
    n ++;   // total = 1 + 2 + 3, n = 3...
    total += n; // total = 1 + 2 + 3, n = 3...

} // Dừng khi total > 10000

/** Kiểm tra bằng công thức
 * 1 + 2 + ... + n = (n + 1) * n / 2 > 10,000
 * Output vào collapse
*/

if((n + 1) * n / 2 > 10000){
    getEle('#spanBai1').innerHTML = n;
} else{
    alert(n);
}

// Bài 2: Tính tổng S(n) = x + x^2 + x^3 + … + x^n

// Trigger button
var btnBai2 = function() {
    // Input x và n
    var x = getEleValue('#inputX');
    var n = getEleValue('#inputN');
    // console.log(x,n);

    // Operation tính S(n)
    var Sn = 0;
    for(var i = 1; i <= n; i++){ // i = 1,2,...,n
        Sn += x**i; // Sn = x^1 + x^2 + ..., i = 1, 2, ...
    }

    // Output S(n)
    getEle('#spanBai2').innerHTML = Sn;
};

// Bài 3: Tính giai thừa cho n
// Trigger button
var btnBai3 = function() {
    // Input n
    var inputBai3 = getEleValue('#inputBai3');
    var nGiaiThua = 1;
    // Operation tính giai thừa
    for(i = 1; i <= inputBai3; i++){
        nGiaiThua *= i;
    };

    // Output giai thừa
    getEle('#spanBai3').innerHTML = nGiaiThua;
};


// Bài 4: Thêm 10 thẻ div đổi màu
/** Điều kiện cho div lẻ/chẵn được thêm vào text
 * để đặt vào .innerHTML
 * Syntax lấy từ html dòng 60-61
 */
var preTxtLe = '<div style="padding: 5px; background-color: #007BFF; color: aliceblue;"><span>Div lẻ ';
var preTxtChan = '<div style="padding: 5px; background-color: #DC3545; color: aliceblue;"><span>Div chẵn ';
var subTxt = '</span></div>';

function btnBai4(){ // trigger  button
    for(var i = 1; i <= 10; i++){ // Thêm tối đa 10 thẻ div
        // Tạo 1 thẻ div
        const div = document.createElement('div');
        
        if(i % 2 === 1){ // Check thứ tự thẻ div
            div.innerHTML = preTxtLe + i + subTxt;
        }else{
            div.innerHTML = preTxtChan + i + subTxt;
        }
        // Output Thêm thẻ div hiện tại vào html
        getEle('#showOnClick').appendChild(div);
    }// Lặp lại 10 lần để thêm div chẵn lẻ

}