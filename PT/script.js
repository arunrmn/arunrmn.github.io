var blank1SelectedOption = null;
var blank2SelectedOption = null;

function updateBlank(blankNum, selectedOption) {
  if (blankNum === 1) {
    blank1SelectedOption = selectedOption;
  } else if (blankNum === 2) {
    blank2SelectedOption = selectedOption;
  }
  updatePassageText();
}

function updatePassageText() {
  var passageText = "This is an example ";
  if (blank1SelectedOption !== null) {
    passageText += blank1SelectedOption + " ";
  } else {
    passageText += "<span id='blank1' class='dropdown-container'>" +
      "<select onchange='updateBlank(1, this.value)'>" +
      "<option value='none'>Select an option</option>" +
      "<option value='fill'>fill</option>" +
      "<option value='blank'>blank</option>" +
      "<option value='completion'>completion</option>" +
      "</select>" +
      "</span> ";
  }
  passageText += "question. In this type of question, you ";
  if (blank2SelectedOption !== null) {
    passageText += blank2SelectedOption + " ";
  } else {
    passageText += "<span id='blank2' class='dropdown-container'>" +
      "<select onchange='updateBlank(2, this.value)'>" +
      "<option value='none'>Select an option</option>" +
      "<option value='need'>need</option>" +
      "<option value='must'>must</option>" +
      "<option value='should'>should</option>" +
      "</select>" +
      "</span> ";
  }
  passageText += "to <span class='highlight'>the missing words or phrases</span> with the correct answers.";

  document.getElementById("passage").innerHTML = passageText;
}

function showResult() {
  var resultText = "This is an example ";
  if (blank1SelectedOption !== null) {
    resultText += blank1SelectedOption + " ";
  } else {
    resultText += "___ ";
  }
  resultText += "question. In this type of question, you ";
  if (blank2SelectedOption !== null) {
    resultText += blank2SelectedOption + " ";
  } else {
    resultText += "___ ";
  }
  resultText += "to the missing words or phrases with the correct answers.";

  document.getElementById("resultText").textContent = resultText;
}

