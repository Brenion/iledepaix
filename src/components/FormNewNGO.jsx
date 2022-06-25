import { useEffect, useState } from 'react';

const FormNewNGO = () => {


    const [{ username, email, password, passwordVerif, address, phone, website }, setSignup] = useState({
        username: '',
        password: '',
        address: '',
        phone: '',
        email: '',
        website: ''
      });
      
      const [isPassword, setIsPassword] = useState(false);

      useEffect(() => {
        password !== passwordVerif ? setIsPassword(true) : setIsPassword(false);
      }, [password, passwordVerif]);


      const handleChange = (e) => {
        const val = e.target.value;
        const key = e.target.name;
    
        setSignup((prev) => {
          const newState = {
            ...prev,
            [key]: val, 
          };
    
          return newState;
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
          `TEST: ONG: ${username}, email: ${email}, Mot de passe: ${password}, adresse: ${address}, telephone: ${phone}, site web: ${website}`,
        );

      }

return ( 
    <div className="flex justify-center mt-8">
        <div className="flex flex-col bg-[#CBABA2] w-3/4 justify-center p-4 rounded text-black">
          <h1 className="my-8 text-3xl font-bold pl-6 underline text-center">Formulaire d'inscription ASBL</h1>
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <div className="flex flex-col w-64">
              <label htmlFor="username" className="px-2 block left-1">Nom de l'ASBL :</label>
              <input type="text" id="username" name="username" value={username} onChange={handleChange}  className="px-2 py-1 m-2 rounded focus:ring-2 focus:outline-none focus:ring-[#75534b] block" />
            </div>
            <div className="flex flex-col w-64">
              <label htmlFor=""  className="px-2 block">Adresse mail :</label>
              <input type="email" id="email" name="email" value={email} onChange={handleChange} placeholder="exemple@mail.com" className="px-2 py-1 m-2 rounded focus:ring-2 focus:outline-none focus:ring-[#75534b] block" />
            </div>
            <div className="flex flex-col w-64">
              <label htmlFor="password"  className="px-2 block">Mot de passe :</label>
              <input type="password" id="password" name="password" value={password} onChange={handleChange} className="px-2 py-1 m-2 rounded focus:ring-2 focus:outline-none focus:ring-[#75534b] block" />
            </div>
            <div className="flex flex-col w-64">
              <label htmlFor="passwordVerif"  className="px-2 block">Vérifier mot de passe :</label>
              <input type="password" id="passwordVerif" name="passwordVerif" value={passwordVerif} onChange={handleChange} className="px-2 py-1 m-2 rounded focus:ring-2 focus:outline-none focus:ring-[#75534b] block" />
            </div>
            <p className="pt-2 mb-2 text-sm text-red-500">
            {isPassword && 'Les mots de passe ne correspondent pas'}{' '}
            </p>
            
            <div className="flex flex-col w-64">
              <label htmlFor=""  className="px-2 block">Adresse :</label>
              <textarea type="text" id="address" name="address" value={address} onChange={handleChange} className="px-2 py-1 m-2 rounded focus:ring-2 focus:outline-none focus:ring-[#75534b] block" />
            </div>
            <div className="flex flex-col w-64">
              <label htmlFor=""  className="px-2 block">Numéro de téléphone :</label>
              <input type="tel" id="phone" name="phone" value={phone}  onChange={handleChange} placeholder="0032" className="px-2 py-1 m-2 rounded focus:ring-2 focus:outline-none focus:ring-[#75534b] block" />
            </div>
            <div className="flex flex-col w-64">
              <label htmlFor=""  className="px-2 block">Site web :</label>
              <input type="url" id="website" name="website" value={website} onChange={handleChange} placeholder="http://" className="px-2 py-1 m-2 rounded focus:ring-2 focus:outline-none focus:ring-[#75534b] block" />
            </div>
            <button type='submit' className="p-2 my-4 rounded bg-[#b27d71] hover:bg-[#75534b] text-white block mx-auto">Enregistrer</button>
          </form>
        </div>
    </div>
    )
} 


export default FormNewNGO;
