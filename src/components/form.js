import React from 'react';
const Form = () => {
  return(
    <div className='container-fluid'>
      <div className='row justify-content-center'>
        <div className='col-xm-6'>
            <form>
              <div className='col-xm-1'>
                    <label style={{ marginRight:45, color:'black',  fontFamily:'Cinzel'}} className=''  >Name</label>
                    <input type="text" name=""    />
              </div>
              <div  className='col-xm-1'>
                    <label style={{ marginRight:43, color:'black', fontFamily:'Cinzel'}} className='' >Email</label>
                    <input type="text" name=""    />
              </div>
              <div  className='col-xm-1'>
                    <label style={{ marginRight:10,color:'black', fontFamily:'Cinzel'}} className=''  >Password</label>
                    <input type="password" name=""   onChange={(e) => {console.log(e.target.value)}} />
              </div>
              </form>
              <div className='col-sm-1'>
                    <button style={{ marginLeft:115, fontFamily:'Cinzel',marginTop:10,color:'white', backgroundColor:'#3498DB    ',borderRadius:'15px 15px 15px 15px' }} className='' type='submit'>Submit</button>
              </div>
             </div>

    </div>
    </div>
  )
}
export default Form;
