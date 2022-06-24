const ConnectForm = () =>{
    return(
        <div className="flex justify-center mt-80">

        <div className="bg-[#efdddc] flex flex-col w-1/2 h-60 justify-center items-center  border border-gray-400 rounded-md">
            <h2 className="text-yellow-600 text-2xl mb-2">Connection</h2>
        <form action="" className="flex flex-col items-center">
            <input type="text" name="" id="" placeholder="Email" className="w-80" />
            <input type="text" name="" id="" placeholder="Password" className="w-80 mt-4" />
            <button className="rounded-md bg-[#b27d71] w-32 h-14 text-white mt-4">Envoyer</button>
        </form>
        </div>
        </div>
    )
}

export default ConnectForm