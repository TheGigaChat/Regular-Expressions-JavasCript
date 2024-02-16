let inputChecker;

//check the phoneNum pattern
document.getElementById("phoneNum").addEventListener("input", (event) => {
  const input = document.getElementById("phoneNum");
  const regex =
    /^(\(\+[3][7][2]\))?[+]?([3][7][2])?[ -.]?(\d{4})[ -.]?(\d{4})$/g;
  const phoneNumber = input.value;
  const test = regex.test(phoneNumber);
  const glue = document.querySelector(".glue");
  console.log(test);

  //check the input
  if (!test && phoneNumber.length) {
    input.classList.add("invalid");
    glue.classList.add("normal");
    inputChecker = false;
  } else {
    input.classList.remove("invalid");
    glue.classList.remove("normal");
    inputChecker = true;
  }
});

//save the phoneNum if it passes our test
document.getElementById("phoneForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("phoneNum");
  const regex = /[- .()+]/g;
  const phoneNumber = input.value;
  const savedNumber = phoneNumber.replaceAll(regex, "");

  if (inputChecker) {
    console.log(savedNumber);
  } else {
    console.log("Please write a phone.");
  }
});
