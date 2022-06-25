


const Search = () => {
   

    return(
        <div className="w-80 bg-[#b27d71] rounded-md m-4 h-full">
            <form action="" className="flex flex-col w-20">
                <div className="flex">
                    
                <input type="text" name="infos" id="infos" placeholder="Recherche" className="ml-2 rounded-md mt-2 w-20"/>
                        </div>
                
                

                <select id = "dropdown" className="mt-4 ml-2 rounded-md text-black">
                <option value="N/A" >Tag:</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
                <select id = "dropdown2" className="mt-4 ml-2 rounded-md text-black">
                <option value="N/A" >Public</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
                <select id = "dropdown3" className="mt-4 ml-2 rounded-md text-black">
                <option value="N/A" >Type d'outil</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
                <select id = "dropdown4" className="mt-4 ml-2 rounded-md text-black">
                <option value="N/A" >Format</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            </form>
                <button
                    type="submit"
                    className="px-4 p-1 mt-4 ml-2  mb-2 text-white bg-gray-500 rounded-sm">
                        Rechercher
                </button>


        </div>
    )
}



export default Search