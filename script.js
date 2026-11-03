//your JS code here. If required.
let levelElement = document.getElementById("level");
      let count = 1;

      while (levelElement != document.documentElement) {
        levelElement = levelElement.parentElement;
        count++;
      }

      alert(`The level of the element is: ${count}`);