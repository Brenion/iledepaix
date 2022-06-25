const FormTool = () => (
    <div className="flex justify-center mt-8">
        <div className="flex flex-col bg-[#cbaba2] w-3/4 justify-center p-4 rounded text-black">
            <h1 className="my-8 text-3xl font-bold pl-6 underline text-center">Formulaire d'outil</h1>
            <form className="flex flex-col items-center">
                <div className="flex flex-col w-64">
                    <label htmlFor="title">Titre de l'outil</label>
                    <textarea name="title" id="title" cols="30" rows="2" className="px-2 py-1 m-2 rounded focus:outline-yellow-600 block">Ecrire ici !</textarea>
                </div>
                <div className="flex flex-col w-64">
                    <label htmlFor="subtitle">Sous-titre</label>
                    <textarea name="subtitle" id="subtitle" cols="30" rows="2" className="px-2 py-1 m-2 rounded focus:outline-yellow-600 block">Ecrire ici !</textarea>
                </div>
                <div className="flex flex-col w-64">
                    <h4 className="my-2">S'agit-il d'un outil numérique ?</h4>
                    <div className="flex">
                        <input type="radio" name="title" id="title" className="mr-2 px-2 py-1 m-2 rounded focus:outline-yellow-600 block"/>
                        <label htmlFor="title" className="mr-6">Oui</label>
                        <input type="radio" name="title" id="title" className="mr-2 px-2 py-1 m-2 rounded focus:outline-yellow-600 block"/>
                        <label htmlFor="title">Non</label>
                    </div>
                </div>
                <div className="flex flex-col w-64">
                    <h4 className="my-2">S'agit-il d'un nouvel outil ?</h4>
                    <div className="flex">
                        <input type="radio" name="title" id="title" className="mr-2 px-2 py-1 m-2 rounded focus:outline-yellow-600 block"/>
                        <label htmlFor="title" className="mr-6">Oui</label>
                        <input type="radio" name="title" id="title" className="mr-2 px-2 py-1 m-2 rounded focus:outline-yellow-600 block"/>
                        <label htmlFor="title">Non</label>
                    </div>
                </div>
                <div className="flex flex-col w-64">
                    <label htmlFor="age">Âge :</label>
                    <input type="number" id="age" name="age" min="0" max="18" className="px-2 py-1 m-2 rounded focus:outline-yellow-600 block"></input>
                </div>
                <div className="flex flex-col w-64">
                    <label htmlFor="typeTool" >Type d'outil :</label>
                    <input type="text" className="px-2 py-1 m-2 rounded focus:outline-yellow-600 block"/>
                </div>
                <div className="flex flex-col w-64">
                    <label htmlFor="typeTool">Type d'outil :</label>
                    <input type="text" className="px-2 py-1 m-2 rounded focus:outline-yellow-600 block"/>
                </div>
                <div className="flex flex-col w-64">
                    <label htmlFor="duration">Durée :</label>
                    <input type="month" id="duration" name="duration" className="px-2 py-1 m-2 rounded focus:outline-yellow-600 block"></input>
                </div>
                <div className="flex flex-col w-64">
                    <label htmlFor="Price">Prix :</label>
                    <input type="text" id="Price" name="Price" className="px-2 py-1 m-2 rounded focus:outline-yellow-600 block"></input>
                </div>
                <div className="flex flex-col w-64">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" cols="30" rows="2" className="px-2 py-1 m-2 rounded focus:outline-yellow-600 block"></textarea>
                </div>
                <div>
                    <h4 className="my-4 text-xl ">Thématiques abordées dans l'outils <br />
                    (Merci de cocher les thématiques abordées)</h4>
                    
                    <div className="flex">

                        <input type="checkbox" id="thematique1" name="thematique1" className="px-2 py-1 m-2 rounded focus:outline-yellow-600 block"/>
                        <label htmlFor="thematique1">Agriculture et alimentation</label>
                    </div>
                    <div className="flex">
                        <input type="checkbox" id="thematique2" name="thematique2" className="px-2 py-1 m-2 rounded focus:outline-yellow-600 block"/>
                        <label htmlFor="thematique2">Commerci équitable</label>
                    </div>
                    <div className="flex">
                        <input type="checkbox" id="thematique3" name="thematique3" className="px-2 py-1 m-2 rounded focus:outline-yellow-600 block"/>
                        <label htmlFor="thematique3">Droits de l'enfant et droits humain</label>
                    </div>
                    <div className="flex">
                        <input type="checkbox" id="thematique4" name="thematique4" className="px-2 py-1 m-2 rounded focus:outline-yellow-600 block"/>
                        <label htmlFor="thematique4">Développement durable</label>
                    </div>
                    <div className="flex">
                        <input type="checkbox" id="thematique5" name="thematique5" className="px-2 py-1 m-2 rounded focus:outline-yellow-600 block"/>
                        <label htmlFor="thematique5">Êducation à la diversité</label>
                    </div>
                    <div className="flex">
                        <input type="checkbox" id="thematique6" name="thematique6" className="px-2 py-1 m-2 rounded focus:outline-yellow-600 block"/>
                        <label htmlFor="thematique6">Environnement, eau et climat</label>
                    </div>
                    <div className="flex">
                        <input type="checkbox" id="thematique7" name="thematique7" className="px-2 py-1 m-2 rounded focus:outline-yellow-600 block"/>
                        <label htmlFor="thematique7">Genre</label>
                    </div>
                    <div className="flex">
                        <input type="checkbox" id="thematique8" name="thematique8" className="px-2 py-1 m-2 rounded focus:outline-yellow-600 block"/>
                        <label htmlFor="thematique8">Conflits et paix</label>
                    </div>
                    <div className="flex">
                        <input type="checkbox" id="thematique9" name="thematique9" className="px-2 py-1 m-2 rounded focus:outline-yellow-600 block"/>
                        <label htmlFor="thematique9">Handicap</label>
                    </div>
                    <div className="flex">
                        <input type="checkbox" id="thematique10" name="thematique10" className="px-2 py-1 m-2 rounded focus:outline-yellow-600 block"/>
                        <label htmlFor="thematique10">Migrations et réfugiés</label>
                    </div>
                    <div className="flex">
                        <input type="checkbox" id="thematique11" name="thematique11" className="px-2 py-1 m-2 rounded focus:outline-yellow-600 block"/>
                        <label htmlFor="thematique11">Mondialisation</label>
                    </div>
                    <div className="flex">
                        <input type="checkbox" id="thematique12" name="thematique12" className="px-2 py-1 m-2 rounded focus:outline-yellow-600 block"/>
                        <label htmlFor="thematique12">Valeurs</label>
                    </div>
                </div>
                <button type="submit" className="bg-[#b27d71] hover:bg-[#755342] p-2 rounded text-white">Enregistrer</button>
            </form>
        </div>
    </div>
  );
  
  export default FormTool;
  
