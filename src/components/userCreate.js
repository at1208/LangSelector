import React from 'react';
import { connect } from 'react-redux';
import { SelectedLang } from '../actions'


const UserCreate = (props) =>{
    console.log(props)
    const imageList = props.lang.LangData.map((img) =>{
      return (
        <img onClick= { () =>{props.SelectedLanguage(img) }} style={{ hieght:25, width:40,marginRight:5,  }} key={img.id} src={img.ImgURL} alt='' />
      )
    })
  return (<div>
    <div>
      <div className='container-fluid' style={{ backgroundColor:''}}>
        <div className='row justify-content-center'>
          <div className='col-xm-2'>
                 <div style={{ fontFamily:'Cinzel' }}className='col-xm-1'>
                 {props.lang.SelectedLang.SelectLanguage || 'Select Language'}
                 </div>
              {imageList}
          </div>
       </div>
   </div>
   <hr />
</div>
       <div className='container ' style={{ backgroundColor:'#DBFF29', paddingTop:10, paddingBottom:10}}>
       <div className='row justify-content-center'>
       <h1 style={{ fontFamily:'Cinzel',color:'black'}}>{props.lang.SelectedLang.SignUpToContinue || 'Sign up to continue'}</h1>

       <div className='container-fluid'>
         <div className='row justify-content-center'>
           <div className='col-xm-6'>
               <form>
                 <div className='col-xm-1'>
                       <label style={{ marginRight:45, color:'black',  fontFamily:'Cinzel'}} className=''  >{props.lang.SelectedLang.Name || 'Name'}</label>
                       <br />
                       <input type="text" name=""    />
                 </div>
                 <div  className='col-xm-1'>
                       <label style={{ marginRight:43, color:'black', fontFamily:'Cinzel'}} className='' >{props.lang.SelectedLang.Email || 'Email'}</label>
                        <br />
                       <input type="text" name=""    />
                 </div>
                 <div  className='col-xm-1'>
                       <label style={{ marginRight:10,color:'black', fontFamily:'Cinzel'}} className=''  >{props.lang.SelectedLang.Password || 'Password'}</label>
                        <br />
                       <input type="password" name=""   onChange={(e) => {console.log(e.target.value)}} />
                 </div>
                 </form>
                 <div className='col-sm-1'>
                       <button style={{ marginLeft:115, fontFamily:'Cinzel',marginTop:10,color:'white', backgroundColor:'#3498DB    ',borderRadius:'15px 15px 15px 15px' }} className='' type='submit'>{props.lang.SelectedLang.Submit || 'Submit'}</button>
                 </div>
                </div>

       </div>
       </div>
       </div>
      </div>
</div>
  )
}
const mapStateToProp = (state) => {
  return{
    lang: state
  }
}
export default connect(mapStateToProp,{ SelectedLanguage:SelectedLang })(UserCreate);
