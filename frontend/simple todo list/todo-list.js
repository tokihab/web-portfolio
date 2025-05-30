
const todolist = JSON.parse(localStorage.getItem('List')) || [];

displaylist();

function displaylist()

{

  let todolistHTML = '';

  for (let i = 0; i < todolist.length; i++)

  {

    const todoObject = todolist[i];

    const txt = todoObject.name;

    const date = todoObject.duedate;

    const html =

    `
    
      <div class = "list-item">
      
        <div class = "added-txt">
        
          ${txt}
        
        </div>
        
        <div class = "added-date">
        
          ${date}
        
        </div>
        

        <button class = "delete-button" onclick = 
        
        "
        
          todolist.splice(${i}, 1);
          displaylist();
        
        "> 

          Delete

        </button>

      </div>

    `;

    todolistHTML += html;

  }

  document.querySelector('.js-list')
  .innerHTML = todolistHTML;

}

function addtodo()

{

  const inputtxt = document.querySelector('.js-txt-input');

  const txt = inputtxt.value;

  const inputdate = document.querySelector('.js-date-input');

  const date = inputdate.value;

  todolist.push
  
  (

    {

      name: txt,

      duedate: date

    }

  );

  inputtxt.value = '';

  displaylist();

  localStorage.setItem('List', JSON.stringify(todolist));

}

function enterpress(event)

{

  if ( event.key === 'Enter' )

  {

    addtodo();

  }

}
