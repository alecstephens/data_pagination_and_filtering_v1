/*
Treehouse Techdegree: Data Pagination and Filtering
*/
const studentList = document.querySelector('.student-list');
const itemsPerPage = 9;


/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab
   Reach out in your Slack community if you have questions
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;
   studentList.innerHTML = '';
   for(let i = 0; i < list.length; i++) {
      if(i > startIndex  && i < endIndex) {
         const display = 
         `<li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src=${list[i].picture.medium} alt="Profile Picture">
           <h3>${list[i].name.first} ${list[i].name.last}</h3>
           <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
           <span class="date">Joined ${list[i].registered.date}</span>
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
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   for(let i = 0; i < numberOfPages; i++) {
      const button = 
         `<li>
         <button type="button">${i}</button>
          </li>`;
      linkList.insertAdjacentHTML('beforeend', button);
      const firstButton = document.querySelector('button:first-child').className = 'active';

      linkList.addEventListener('click', (e) => {
         if(e.target.tagName === 'BUTTON') {
            let activeButton = document.querySelector('.active');
            activeButton.className = '';
            e.target.className = 'active';
            showPage(list, e.target.textContent);
         }
      });
   }
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
