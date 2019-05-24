import React from 'react';
import Form from './form';

const UserCreate = () =>{
  return (<div>
    <div>
      <div className='container-fluid' style={{ backgroundColor:''}}>
        <div className='row justify-content-center'>
          <div className='col-xm-2'>
                 <div style={{ fontFamily:'Cinzel' }}className='col-xm-1'>
                 Select Language
                 </div>
      <img style={{ hieght:25, width:40,marginRight:5,  }} src='http://1.bp.blogspot.com/_y-nnotHegyQ/S-I-NpIaumI/AAAAAAAAAmM/23E7_Z8x_lU/s1600/indian-flag-1-1024x768.jpg' alt='' />
      <img style={{ hieght:25, width:40,marginRight:5,  }} src='http://4.bp.blogspot.com/-CtBZ0q07Itw/VY4nDetKzcI/AAAAAAAAAiE/wrY2DVPq2t0/s1600/american-flag.png' alt='' />
      <img style={{ hieght:25, width:40,marginRight:5, border:'1px solid lightgrey'}} src='https://www.theodora.com/flags/new15/russia_flag_large.jpg ' alt='' />
      <img style={{ hieght:25, width:40,marginRight:5 }} src='https://www.free-largeimages.com/wp-content/uploads/2014/12/Mexico_flag-2.jpg' alt='' />
          </div>
       </div>
   </div>
   <hr />
</div>
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
