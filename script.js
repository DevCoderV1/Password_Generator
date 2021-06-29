const passLength = document.getElementById("passln");
const passNumber = document.getElementById("passNum");
const includeUpper = document.getElementById("upper_box");
const includeNumber = document.getElementById("num_box");
const includeSymbol = document.getElementById("sym_box");
const GeneratePW = document.getElementById("btn1");
const DisplayText = document.getElementById("DisplayResults");

//Auto-adjust value on either of the input
passLength.addEventListener("input", ValueChange);
passNumber.addEventListener("input", ValueChange);

//Assign Character to Upper, Number, Symbol
const LOWER_CASE = ConvertCharCode(97, 122);
const UPPER_CASE = ConvertCharCode(65, 90);
const ADD_NUM = ConvertCharCode(48, 57);
const ADD_SYM = ConvertCharCode(33, 37);

//Display generated password on website
GeneratePW.addEventListener("click", () => {
  const charlength = passLength.value;
  const UpperOne = includeUpper.checked;
  const NumberOne = includeNumber.checked;
  const SymbolOne = includeSymbol.checked;
  const Mypassword = GeneratePassword(
    charlength,
    UpperOne,
    NumberOne,
    SymbolOne
  );
  DisplayText.innerHTML = Mypassword;
  passLength.innerHTML = "Checked";
});

//Function that generate the password
function GeneratePassword(charlength, UpperOne, NumberOne, SymbolOne) {
  let CharCodeValue = LOWER_CASE;
  const password = [];
  if (NumberOne) CharCodeValue = CharCodeValue.concat(ADD_NUM);
  if (SymbolOne) CharCodeValue = CharCodeValue.concat(ADD_SYM);
  if (UpperOne) CharCodeValue = CharCodeValue.concat(UPPER_CASE);

  for (let i = 0; i < charlength; i++) {
    const generateCode =
      CharCodeValue[Math.floor(Math.random() * CharCodeValue.length)];
    password.push(String.fromCharCode(generateCode));
  }
  return password.join("");
}

//
function ConvertCharCode(low, high) {
  const ArrayList = [];
  for (let x = low; x <= high; x++) {
    ArrayList.push(x);
  }
  return ArrayList;
}

function ValueChange(e) {
  const input = e.target.value;
  passNumber.value = input;
  passLength.value = input;
}
