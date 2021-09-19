function Entered(e) {
  var Screen = document.getElementById("screen");
  if (e.id != "=" && e.id != "_") {
    document.getElementById("screen").value =
      Screen.value.trim() + e.innerHTML.trim();
  } else if (e.id == "_") {
    var str = Screen.value.toString();
    Screen.value = str.substr(0, str.length - 1);
  } else if (e.id == "=") {
    Process();
  }
}

function Process() {
  var a = document.getElementById("screen").value;
  if (
    a.includes("+") ||
    a.includes("-") ||
    a.includes("*") ||
    a.includes("/")
  ) {
    document.getElementById("screen").value = eval(a);
  } else {
    window.alert("Please enter any arithmetic operation");
  }
}

function clean() {
  document.getElementById("screen").value = null;
}
