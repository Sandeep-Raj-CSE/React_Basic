function FormHandlingRef(){

 const val=useRef(null)
  const handlesubmit= (event)=>{
    event.preventDefault()
    console.log(val.current.value)
    
  }

  
  
  return (

    <div>

     <form action=""  onSubmit={handlesubmit}>
      <input  ref={val} type="text" placeholder="name"  />
      <input type="submit"  />
     </form>



    </div>
    )


}
export default FormHandlimgRef;
