const AdminCreate = () => {
  return (
    <div className="w-3/4 m-auto">
      <form
        action=""
        className="flex flex-col bg-[#b27d71] justify-center h-80 items-center rounded-3xl "
      >
        <span className=" mt-2">Nom:</span>
        <input
          type="text"
          name=""
          id=""
          placeholder="Name"
          className="w-1/4 mt-2 rounded-md"
        />
        <span className=" mt-2">Email:</span>
        <input
          type="text"
          name=""
          id=""
          placeholder="Email"
          className="w-1/4 mt-2 rounded-md"
        />
        <span className=" mt-2">Mot de passe:</span>
        <input
          type="text"
          name=""
          id=""
          placeholder="Password"
          className="w-1/4 mt-2 rounded-md"
        />
        <button className="bg-[#efdddc] rounded-md p-2 mt-4">Ajouter</button>
      </form>
    </div>
  );
};

export default AdminCreate;
