const formNewNGO = () => ( 
    <div className="flex justify-center">
        <div className="flex flex-col bg-[#CBABA2] w-3/4 justify-center p-4 rounded text-black">
        <h1 className="my-8 text-3xl font-medium pl-6">Formulaire d'inscription ONG</h1>
        <form className="">
            <div className="flex flex-col items-center">
            <label htmlFor="username" className="px-2  block">Nom de l'ASBL:</label>
            <input type="text" className="px-2 py-1 m-2 rounded block" />
            </div>
            <div className="flex flex-col items-center">
            <label htmlFor="" className="px-2 block">Adresse:</label>
            <input type="text"  className="px-2 py-1 m-2 rounded block"  />
            </div>
            <div className="flex flex-col items-center">
            <label htmlFor="" className="px-2 block">Numéro de téléphone:</label>
            <input type="tel" className="px-2 py-1 m-2 rounded block" />
            </div>
            <div className="flex flex-col items-center">
            <label htmlFor="" className="px-2 block">Adresse mail:</label>
            <input type="email"  className="px-2 py-1 m-2 rounded block" />
            </div>
            <div className="flex flex-col items-center">
            <label htmlFor="" className="px-2 block">Site web:</label>
            <input type="url"  className="px-2 py-1 m-2 rounded block" />
            </div>
            <button className="p-2 m-4 rounded bg-[#b27d71] hover:bg-[#75534b] hover:dark text-white">Enregistrer</button>
        </form>
        </div>
    </div>
)

export default formNewNGO;
