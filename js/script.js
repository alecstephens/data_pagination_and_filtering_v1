/*
Treehouse Techdegree: Data Pagination and Filtering
*/
const studentList = document.querySelector('.student-list');


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
      if(i > startIndex ) {
         const display = 
         <li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src={list[i].picture.medium} alt="Profile Picture">
           <h3>${list[i].name.first} ${list[i].name.last}</h3>
           <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
           <span class="date">Joined ${list[i].registered.date}</span>
         </div>
       </li>
       studentList.insertAdjacentHTML('beforeend', display);
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
