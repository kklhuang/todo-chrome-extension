function getChecked() {
    const checkBox = document.getElementById('check1').checked;
    if (checkBox === true) {
      console.log(true);
      } else {
        console.log(false);
    }
  }
  
  function getVal() {
    const val = document.querySelector('input').value;
    console.log(val);
  }