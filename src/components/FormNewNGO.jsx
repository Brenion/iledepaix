import React from "react";
import { UseState } from "react";
import { Link } from "react-router-dom";
import { UseForm } from "../hooks/useForm";
import { useAuth } from "../lib/auth";

const FormNewNGO = () => {
  const { register } = useAuth();
  const { values, onChange } = UseForm({});
  const [error, setError] = UseState(null);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col bg-[#CBABA2] w-3/4 justify-center p-4 rounded text-black">
        <h1 className="my-8 text-3xl font-medium pl-6">
          Formulaire d'inscription ONG
        </h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              await register(values);
            } catch (err) {
              console.log("error");
              setError(err);
            }
          }}
        >
          <div className="flex flex-col items-center">
            <label htmlFor="name" className="px-2  block">
              Nom: (personne ou association)
            </label>
            <input
              type="text"
              className="px-2 py-1 m-2 rounded block"
              name="name"
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col items-center">
            <label htmlFor="" className="px-2 block">
              Adresse:
            </label>
            <input
              type="text"
              className="px-2 py-1 m-2 rounded block"
              name="address"
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col items-center">
            <label htmlFor="" className="px-2 block">
              Numéro de téléphone:
            </label>
            <input
              type="tel"
              className="px-2 py-1 m-2 rounded block"
              name="phoneNumber"
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col items-center">
            <label htmlFor="" className="px-2 block">
              Adresse mail:
            </label>
            <input
              type="email"
              className="px-2 py-1 m-2 rounded block"
              name="email"
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col items-center">
            <label htmlFor="" className="px-2 block">
              Site web:
            </label>
            <input
              type="url"
              className="px-2 py-1 m-2 rounded block"
              name="websiteLink"
              onChange={onChange}
            />
          </div>

          <button
            type="submit"
            className="p-2 m-4 rounded bg-[#b27d71] hover:bg-[#75534b] text-white"
          >
            Enregistrer
          </button>
          <div className="text-left mt-2 m-l-20">
            {"Are you already user?"}
            <Link to="/ConnectForm">Login</Link>
          </div>
        </form>
      </div>
      {error && (
        <div style={{ color: "tomato" }}>{JSON.stringify(error, null, 2)}</div>
      )}
    </div>
  );
};

export default FormNewNGO;
