import {combineReducers} from 'redux';

const IndiaReducer = (originalLang=[],action) =>{
  if(action.type==='INDIA'){
    return{
      SelectLanguage:'भाषा चुनिए',
      SignUpToContinue:'जारी रखने के लिए साइन अप करें',
      Name:'नाम',
      EmailId:'ईमेल आईडी',
      Password:'पारण शब्द'
    }

  }
  return originalLang
}
const UsReducer = (originalLang=[],action) =>{
  if(action.type==='US'){
    return{
      SelectLanguage:'Select Language',
      SignUpToContinue:'Sign Up To Continue',
      Name:'Name',
      Email:'Email',
      Password:'Password'
    }

}
return originalLang
}
const MexicoReducer = (originalLang=[],action) => {
  if(action.type==='MEXICO'){
    return{
      SelectLanguage:'Seleccione el idioma',
      SignUpToContinue:'Regístrese para continuar',
      Name:'Nombre',
      Email:'Email',
      Password:'Contraseña'
    }


}
return originalLang
}
const RussiaReducer = (originalLang=[], action) =>{
  if(action.type==='RUSSIA'){
    return{
      SelectLanguage:'Выберите язык',
      SignUpToContinue:'Зарегистрируйтесь, чтобы продолжить',
      Name:'название',
      Email:'Эл. адрес',
      Password:'пароль'
    }

}
return originalLang
}

export default combineReducers({
                       IndiaLang: IndiaReducer,
                       UsLang: UsReducer,
                       MexicoLang: MexicoReducer,
                       RussiaLang: RussiaReducer
                     })
