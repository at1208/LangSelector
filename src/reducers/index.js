import {combineReducers} from 'redux';


const Language = () => {
  return [
  {  SelectLanguage:'भाषा चुनिए',
    SignUpToContinue:'जारी रखने के लिए साइन अप करें',
    Name:'नाम',
    EmailId:'ईमेल आईडी',
    Password:'पारण शब्द'},

  {  SelectLanguage:'Select Language',
    SignUpToContinue:'Sign Up To Continue',
    Name:'Name',
    Email:'Email',
    Password:'Password'},

  { SelectLanguage:'Seleccione el idioma',
    SignUpToContinue:'Regístrese para continuar',
    Name:'Nombre',
    Email:'Email',
    Password:'Contraseña'},

  { SelectLanguage:'Выберите язык',
    SignUpToContinue:'Зарегистрируйтесь, чтобы продолжить',
    Name:'название',
    Email:'Эл. адрес',
    Password:'пароль'}
]}

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
    return Language[0]

}
return originalLang
}
const MexicoReducer = (originalLang=[],action) => {
  if(action.type==='MEXICO'){
    return Language[1]


}
return originalLang
}
const RussiaReducer = (originalLang=[], action) =>{
  if(action.type==='RUSSIA'){
    return Language[2]

}
return originalLang
}

export default combineReducers({
                       LangData:Language,
                       IndiaLang: IndiaReducer,
                       UsLang: UsReducer,
                       MexicoLang: MexicoReducer,
                       RussiaLang: RussiaReducer
                     })
