function FormHandlingUsingUseState{

  const [foemval, setFoemval] = useState(name=[""])

  const handlesubmit= (event)=>{
    event.preventDefault()
    console.log(foemval)
    
  }

  return (

    

    <div>

      <form action=""  onSubmit={handlesubmit}>
      <input  onChange={(event)=>setFoemval({name:event.target.value})}  type="text" placeholder="name"  />
      <input type="submit"  />
     </form>
    
    
    
    </div>


    )


}
