const FormTool = () => (
    <form>
        <div>
            <label htmlFor="title">Titre de l'outil</label>
            <textarea name="title" id="title" cols="30" rows="2">Ecrire ici !</textarea>
        </div>
        <div className="flex flex-col">
            <label htmlFor="subtitle">Sous-titre</label>
            <textarea name="subtitle" id="subtitle" cols="30" rows="2">Ecrire ici !</textarea>
        </div>
        <div className="div">
            <h2>S'agit-il d'un outil numérique ?</h2>
            <input type="radio" name="title" id="title" className="mr-2"/>
            <label htmlFor="title" className="mr-6">Oui</label>
            <input type="radio" name="title" id="title" className="mr-2"/>
            <label htmlFor="title">Non</label>
        </div>
        <div className="div">
            <h2>S'agit-il d'un nouvel outil ?</h2>
            <input type="radio" name="title" id="title" className="mr-2"/>
            <label htmlFor="title" className="mr-6">Oui</label>
            <input type="radio" name="title" id="title" className="mr-2"/>
            <label htmlFor="title">Non</label>
        </div>
        <div>
            <label htmlFor="age">Âge :</label>
            <input type="number" id="age" name="age" min="0" max="18"></input>
        </div>
        <div>
            <label htmlFor="typeTool">Type d'outil :</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="typeTool">Type d'outil :</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="duration">Durée :</label>
            <input type="month" id="duration" name="duration"></input>
        </div>
        <div>
            <label htmlFor="Price">Prix :</label>
            <input type="text" id="Price" name="Price"></input>
        </div>
        <div>
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" cols="30" rows="2"></textarea>
        </div>
        <div className="div">
            <h2>Thématiques abordées dans l'outils (Merci de cocher les thématiques abordées</h2>
            <div className="flex flex-col">

            <label htmlFor="thematique1">Agriculture et alimentation</label>
            <input type="checkbox" id="thematique1" name="thematique1"/>

            <label htmlFor="thematique2">Commerci équitable</label>
            <input type="checkbox" id="thematique2" name="thematique2"/>

            <label htmlFor="thematique3">Droits de l'enfant et droits humain</label>
            <input type="checkbox" id="thematique3" name="thematique3"/>

            <label htmlFor="thematique4">Développement durable</label>
            <input type="checkbox" id="thematique4" name="thematique4"/>

            <label htmlFor="thematique5">Êducation à la diversité</label>
            <input type="checkbox" id="thematique5" name="thematique5"/>

            <label htmlFor="thematique6">Environnement, eau et climat</label>
            <input type="checkbox" id="thematique6" name="thematique6"/>

            <label htmlFor="thematique7">Genre</label>
            <input type="checkbox" id="thematique7" name="thematique7"/>

            <label htmlFor="thematique8">Conflits et paix</label>
            <input type="checkbox" id="thematique8" name="thematique8"/>

            <label htmlFor="thematique9">Handicap</label>
            <input type="checkbox" id="thematique9" name="thematique9"/>

            <label htmlFor="thematique10">Migrations et réfugiés</label>
            <input type="checkbox" id="thematique10" name="thematique10"/>

            <label htmlFor="thematique11">Mondialisation</label>
            <input type="checkbox" id="thematique11" name="thematique11"/>

            <label htmlFor="thematique12">Valeurs</label>
            <input type="checkbox" id="thematique12" name="thematique12"/>
            </div>
        </div>
    </form>
  );
  
  export default FormTool;
  
