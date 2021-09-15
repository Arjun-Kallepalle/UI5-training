var fact;

function determine() {
  //   var operation = document.getElementsByName("operation");
  var Factorial = document.getElementById("Fact").checked;
  var Fibonacci = document.getElementById("Fibo").checked;
  var Squareroot = document.getElementById("Sqrt").checked;
  var n = document.getElementById("numb");
  n = n.value;
  if (n.length > 3) {
    window.alert("Enter a number with 3 digits or less");
    return 0;
  } else {
    if (Factorial == true) {
      fact = factorial(n);
      window.alert(fact);
    } else if (Fibonacci == true) {
      Fibonacci = fibo(n);
      window.alert(Fibonacci);
    } else {
      Squareroot = Math.sqrt(n);
      window.alert(Squareroot);
    }
  }
}

function fibo(n) {
  var a = [0, 1];
  var sum = 0;
  if (n == 0) {
    window.alert("Select a number greater than 0");
  } else if (n == 1) {
    return a[0];
  } else {
    for (i = 1; i < n - 1; i++) {
      sum = a[i] + a[i - 1];
      a.push(sum);
    }
    return a;
  }
}
function factorial(n) {
  if (n == 1||n==0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
