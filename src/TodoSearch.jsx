import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue }) {


     return (
          <input
               className="TodoSearch"
               placeholder="Barra de Busqueda. "
               value={searchValue}
               onChange={(event) => {
                    console.log('Texto de Barra de busqueda');
                    setSearchValue(event.target.value);
               }} />
     )
}

export { TodoSearch }