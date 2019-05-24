import React from 'react';
import Form from './form';

const UserCreate = () =>{
  return (<div>
    
       <div className='container ' style={{ backgroundColor:'#DBFF29', paddingTop:10, paddingBottom:10}}>
       <div className='row justify-content-center'>
       <h1 style={{ fontFamily:'Cinzel',color:'black'}}>Sign up to continue</h1>
       <Form />
       </div>
      </div>
</div>
  )
}
export default UserCreate;
