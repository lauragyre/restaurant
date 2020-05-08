import {mainPage} from './mainpage.js';
import {menuPage} from './menu.js';
import {contactPage} from './contact.js';



let buttons = document.querySelectorAll('.tab');
buttons[0].style.backgroundColor = 'white';

mainPage();

let main = document.querySelector('#content');

for (let i = 0; i < buttons.length; i++ ) {
      buttons[i].addEventListener('click', function () {
         while (main.firstChild) {
              main.removeChild(main.firstChild);
          }
          if (event.target.id == 'home') {
            buttons[1].style.backgroundColor = 'lightgrey';
            buttons[2].style.backgroundColor = 'lightgrey';
            mainPage()
          }
          else if (event.target.id == 'menu') {
            buttons[0].style.backgroundColor = 'lightgrey';
            buttons[2].style.backgroundColor = 'lightgrey';
            menuPage();
          }
          else {
            buttons[0].style.backgroundColor = 'lightgrey';
            buttons[1].style.backgroundColor = 'lightgrey';
            contactPage();
          }
          
          
          event.target.style.backgroundColor = "white";
          
        
        });
      }
