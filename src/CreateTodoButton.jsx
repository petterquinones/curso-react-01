import './CreateTodoButton.css'

function CreateTodoButton() {
     return (
          <button
               className='button-style'
               onClick={(event) => {
                    console.log('Click en btn + ');
                    console.log(event);
                    console.log(event.target);
               }}>
               +
          </button>
     )
}

export { CreateTodoButton }