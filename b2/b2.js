//1. Viết hàm với tham số đầu vào là 1 số bất kỳ, kiểm tra và in ra màn hình là số chẵn hay lẽ. Ví dụ: Số 3 là số lẽ.
function KTra(x) {
    if (x % 2 == 0) {
      return 1;
    }
    return 0;
  }
  function sochanle(x) {
    if (KTra(x) == 1) {
      console.log(`số ${x} là số chẵn `);
    } else {
      console.log(`số ${x} là số lẻ `);
    }
  }
  sochanle(10);
  console.log('-------------------');
//1.2 Dựa vào hàm ở bài 1, kiểm tra thêm số đó là số âm hay dương. Ví dụ: Số 3 là số âm và lẽ.
function KTraSo(x1){
    if(KTra(x1)==1 && x1>0){
        console.log(`số ${x1} là số dương và là số chẵn`)
    }else if(KTra(x1)==1 && x1<0){
        console.log(`số ${x1} là số âm và là số chẵn`)
    }else if(KTra (x1)==0 && x1>0){
        console.log(`số ${x1} là số dương và là số lẻ`)
    }else if(KTra (x1)==0 && x1<0){
        console.log(`số ${x1} là số âm và là số lẻ`)
}}
KTraSo(15);
console.log('--------------------');
//2. Viết hàm với tham số đầu vào là 1 số trong tháng (1 tới 12), kiểm tra và in ra tháng đó có bao nhiều ngày? Ví dụ Tháng 1 có 31 ngày
function KTraMonth(month){
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log(`tháng ${month} có 31 ngày `);
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log(`tháng ${month} có 30 ngày `);
      break;
    case 2:
      console.log(`tháng ${month} có 28 ngày `);
      //   console.log(`tháng ${month} có 29 ngày `);
      break;
    default:
      console.log(" vui lòng nhập vào tháng là số  > 0 ");
  }
}
KTraMonth(2)
console.log('----------------------');
//2. Viết hàm với đầu vào là 1 số bất kỳ, kiểm tra số đó và in ra là số nguyên dương hay số nguyên âm, nếu không phải cả 2 thì in ra không phải số cần kiểm tra.
function ktraSoNguyen(x2) {
  if (x2 > 0 && x2 % 1 == 0) {
    console.log(`số ${x2} là số nguyên dương`);
  } else if (x2 < 0 && x2 % 1 == 0) {
    console.log(`số ${x2} là số nguyên âm`);
  } else {
    console.log("không phải số cần kiểm tra");
  }
}
ktraSoNguyen("d");
console.log('---------------');
//3. Viết hàm tính tổng 2 số với tất cả các phép tính (+ - * / %) thông qua tham số truyền vào
//Yêu cầu của bài 2: a muốn có 1 hàm mà truyền vào 3 tham số a, b là 2 số muốn tính, tham số thứ 3 (+ - * / %) sẽ quyết định kết quả. Kiểm tra kỹ đầu vào của 2 số muốn tính, nếu không phải số thì exit và thông báo số nhập không đúng.
function tongpheptinh(number1, number2, x) {
  if (typeof number1 == "string" || typeof number2 == "string") {
    console.log(" đầu vào nhập không hợp lệ");
  } else {
    let result;
    switch (x) {
      case "+":
        result = number1 + number2;
        console.log(`tổng của 2 số là ${result}`);
        break;
      case "-":
        result = number1 - number2;
        console.log(`hiệu của 2 số là ${result}`);
        break;
      case "*":
        result = number1 * number2;
        console.log(`tích của 2 số là ${result}`);
        break;
      case "/":
        result = number1 / number2;
        console.log(`thương của 2 số là ${result}`);
        break;
      case "%":
        result = number1 % number2;
        console.log(`số dư của 2 số là ${result}`);
        break;
      default:
        console.log("phép tính không hợp lệ");
    }
  }
}
// tongpheptinh("a", "2", "+"); // quăn lỗi đầu vào
tongpheptinh(14, 2, "+");
// tongpheptinh(2, 3, "-");
// tongpheptinh(2, 3, "*");
// tongpheptinh(2, 3, "/");

