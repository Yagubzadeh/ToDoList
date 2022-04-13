const input = document.querySelector('.inptblck');

function addtoDo(e) {

  const inpVal = input.value;
  const todo = {
    text: inpVal,
    isCompleted: false,
  };
  if (input.value == '' || input.value == ' ') {
    alert('Mətn daxil edin!');
  }
  else {
    let commonDiv = document.getElementById('azer');
    commonDiv.style.display = 'block';

    const commonUl = document.getElementById('ul123');

    const litags = document.createElement('li');
    litags.classList.add('liler');
    litags.textContent = todo.text;

    const silmek = document.createElement('span');
    silmek.classList.add('duyme');
    silmek.innerText = '';
    let duyme = document.querySelectorAll('.duyme');
    commonUl.appendChild(litags);
    litags.appendChild(silmek);
    input.value = ""
    commonUl.addEventListener("click", deleteItem)
    function deleteItem(e) {
      console.log(e.target.className);
      if (e.target.className === "duyme") {
        e.target.parentElement.remove();
        function a() {
          const commonUl = document.getElementById('ul123');
          if (commonUl.children.length == 0) {
            commonDiv.style.display = "none"
          }
        }
        a()
      }
      e.preventDefault();
    }

  }
};

input.addEventListener('keyup', (e) => {
  if (e.keyCode == 13) {
    addtoDo();
  };
})

function sortListDir() {
  let img = document.querySelector('.imgblck');
  var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
  list = document.getElementById("ul123");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("LI");
    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (dir == "asc") {
        img.style.transform = 'rotate(180deg)';
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;

        }
      } else if (dir == "desc") {
        img.style.transform = 'rotate(0deg)';
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
} 