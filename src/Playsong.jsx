function Playsong(){

    const data=[
        {
            name:"Mahiya Ve",
            description:"Tu jee sakti nahi Main jee sakta nahi Koi dusri main sharta vi rakhta nahi Kya tere baju mera"
        },{
            name:"Tu sang yaara Ve",
            description:"Tera hua tera hua main to Tera hua tera hua main t Tera main tera hua"
        },

    ]

    const onclickdownload= ()=>{alert("Hii bhai chal rha hai")}
    return (
        <div className="w-full h-screen flex flex-col gap-10  bg-zinc-400 text-black justify-center items-center">
            {data.map((elem, index)=>(
                           <div className="w-60 song px-3 py-2 bg-zinc-100 rounded">
                           <h3 className="font-semibold text-xl">{elem.name}</h3>
                           <p className="text-xs m-2 ">{elem.description}</p>
                           <button onClick={onclickdownload} className="px-2 py-1 bg-blue-400 text-xs font-semibold rounded-md text-zinc-100">Download Now</button>
                          </div>
            ))}

          
        </div>
    )
}

export default Playsong