/*
Treehouse Techdegree: Data Pagination and Filtering
*/
// Global variables
const itemsPerPage = 9;
const head = document.querySelector('.header h2');
const linkList = document.querySelector('.link-list');

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';

   for(let i = 0; i < list.length; i++) {
      if(i >= startIndex && i < endIndex) {
         let display = 
         `<li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src=${list[i].picture.medium} alt="Profile Picture">
               <h3>${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">${list[i].registered.date}</span>
            </div>
          </li>`;
       studentList.insertAdjacentHTML('beforeend', display);
      }
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   let numberOfPages = Math.ceil(list.length / itemsPerPage);
   linkList.innerHTML = '';

   for(let i = 1; i <= numberOfPages; i++) {
      let button = 
         `<li>
            <button type="button">${i}</button>
          </li>`;
      linkList.insertAdjacentHTML('beforeend', button);
   }
   const firstButton = document.querySelector('button:first-child').className = 'active';

   linkList.addEventListener('click', (e) => {
      if(e.target.tagName === 'BUTTON') {
         document.querySelector('.active').className = '';
         e.target.className = 'active';
         showPage(list, e.target.textContent);
      }
   });
}

// Call functions
showPage(data, 1);
addPagination(data);

// This creates a search bar
const searchBar = 
   `<label for="search" class="student-search">
      <span>Search by name</span>
      <input id="search" placeholder="Search by name...">
      <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>`;

document.querySelector('.header').insertAdjacentHTML('beforeend', searchBar);

// These variables will be used to store the user's input
const search = document.querySelector('#search');
const submit = document.querySelector('.student-search button');

// This function willi take the user's input and the array of names as parameters
let match = [];
function searchMatches(input, names) {
   match = [];
   for(let i = 0; i < names.length; i++) {
      const studentName = names[i].name.first.toLowerCase() + ' ' + names[i].name.last.toLowerCase();
      if(studentName.includes(input.value.toLowerCase())) {
         match.push(names[i]);
      }
   }
}

// Event handlers
submit.addEventListener('click', () => {
   searchMatches(search, data);
   showPage(match, 1);

   if(match.length >= 1) {
      addPagination(match);
      head.innerText = 'STUDENTS';
   } else {
      linkList.innerHTML = '';
      head.innerText = 'No results found';
   }
});

search.addEventListener('keyup', () => {
   searchMatches(search, data);
   showPage(match, 1);

   if(match.length >= 1) {
      addPagination(match);
      head.innerText = 'STUDENTS';
   } else {
      linkList.innerHTML = '';
      head.innerText = 'No results found';
   }
});