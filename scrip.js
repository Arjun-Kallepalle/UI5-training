function add() {
  var Name = document.getElementById("Name");
  var Email = document.getElementById("Email");
  var Phone = document.getElementById("Phone");

  var Name1 = Name.value;
  var returnn = validate(Name1, Name);
  display(returnn, Name1);
  var Email1 = Email.value;
  var returne = validate(Email1, Email);
  display(returne, Email1);
  var Phone1 = Phone.value;
  var returnp = validate(Phone1, Phone);
  if (returnp == 1);
  var returnp1 = validatep(Phone);
  if (returnp1 == 1);
  display(returnp1, Phone1);
}

function validate(e, f) {
  if (e == "") {
    f = f.name;
    window.alert("Please enter the " + f + " value!");
  } else return 1;
}
function validatep(f) {
  if (f.name == "Phone") {
    var fname = f.value;
    for (i = 0; i < fname.length; i++) {
      if (
        fname[i] !== "0" &&
        fname[i] !== "1" &&
        fname[i] !== "2" &&
        fname[i] !== "3" &&
        fname[i] !== "4" &&
        fname[i] !== "5" &&
        fname[i] !== "6" &&
        fname[i] !== "7" &&
        fname[i] !== "8" &&
        fname[i] !== "9"
      ) {
        window.alert("Not a number");
        return 0;
      }
    }
    return 1;
  }
}

function display(e, f) {
  if (e == 1) console.log(f);
}
