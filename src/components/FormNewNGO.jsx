import { useState } from 'react';

const FormNewNGO = () => {
    
    const [{ username, password, address, phone, email, website }, setSignup] = useState({
        username: '',
        password: '',
        address: '',
        phone: '',
        email: '',
        website: ''
      });

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
          `TEST: ONG: ${username}, Mot de passe: ${password}, adresse: ${address}, telephone: ${phone}, email: ${email}, site web: ${website}`,
        );
      }



return ( 
    <div className="flex justify-center">
        <div className="flex flex-col bg-[#CBABA2] w-3/4 justify-center p-4 rounded text-black">
        <h1 className="my-8 text-3xl font-bold pl-6 underline">Formulaire d'inscription ONG</h1>
        <form className="" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center">
            <label htmlFor="username" className="px-2 block">Nom de l'ASBL:</label>
            <input type="text" id="username" name="username" value={username} onChange={handleChange}  className="px-2 py-1 m-2 rounded focus:outline-yellow-600 block" />
            </div>
            <div className="flex flex-col items-center">
            <label htmlFor="password"  className="px-2 block">Mot de passe</label>
            <input type="password" id="password" name="password" value={password} onChange={handleChange} className="px-2 py-1 m-2 rounded block" />
            </div>
            <div className="flex flex-col items-center">
            <label htmlFor=""  className="px-2 block">Adresse:</label>
            <input type="text" id="address" name="address" value={address} onChange={handleChange} className="px-2 py-1 m-2 rounded block"  />
            </div>
            <div className="flex flex-col items-center">
            <label htmlFor=""  className="px-2 block">Numéro de téléphone:</label>
            <input type="tel" id="phone" name="phone" value={phone}  onChange={handleChange} className="px-2 py-1 m-2 rounded block" />
            </div>
            <div className="flex flex-col items-center">
            <label htmlFor=""  className="px-2 block">Adresse mail:</label>
            <input type="email" id="email" name="email" value={email} onChange={handleChange} className="px-2 py-1 m-2 rounded block" />
            </div>
            <div className="flex flex-col items-center">
            <label htmlFor=""  className="px-2 block">Site web:</label>
            <input type="url" id="website" name="website" value={website} onChange={handleChange} className="px-2 py-1 m-2 rounded block" />
            </div>
            <button type='submit' className="p-2 m-4 rounded bg-[#b27d71] hover:bg-[#75534b] text-white">Enregistrer</button>
        </form>
        </div>
    </div>
    )
} 


export default FormNewNGO;
