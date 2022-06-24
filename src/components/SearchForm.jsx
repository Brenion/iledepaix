const getData = () =>{
    const name = [
        {
        title:'Pabloe',
        number:5
    },
        {
        title:'Tito',
        number:2
    },
]
console.log(name);
}

const Search = () => {

    return(
        <div className="w-80 bg-red-200">
            <form action="" className="flex flex-col w-20">
                <div className="flex">
                    
                <input type="text" name="" id="test" placeholder="Recherche" className="ml-2" />
                        </div>
                
                

                <select id = "dropdown" className="mt-4 ml-2">
                <option value="N/A" >Tag:</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
                <select id = "dropdown2" className="mt-4 ml-2">
                <option value="N/A" >Public</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
                <select id = "dropdown3" className="mt-4 ml-2">
                <option value="N/A" >Type d'outil</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
                <select id = "dropdown4" className="mt-4 ml-2">
                <option value="N/A" >Format</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            </form>
                <button
                    type="button"
                    className="px-4 p-1 mt-4 ml-2 text-white bg-indigo-600"
                    onClick={getData}>
                        Rechercher
                </button>


        </div>
    )
}

export default Search