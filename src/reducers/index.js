import {combineReducers} from 'redux';


const Language = () => {
  return [
  {  SelectLanguage:'भाषा चुनिए',
    SignUpToContinue:'जारी रखने के लिए साइन अप करें',
    Name:'नाम',
    id:0,
    Submit:'जमा करें',
    Email:'ईमेल आईडी',
    Password:'पारण शब्द',
    ImgURL:'http://1.bp.blogspot.com/_y-nnotHegyQ/S-I-NpIaumI/AAAAAAAAAmM/23E7_Z8x_lU/s1600/indian-flag-1-1024x768.jpg',},

  {  SelectLanguage:'Select Language',
    SignUpToContinue:'Sign Up To Continue',
    Name:'Name',
    id:1,
    Submit:'Submit',
    Email:'Email',
    Password:'Password',
    ImgURL:'http://4.bp.blogspot.com/-CtBZ0q07Itw/VY4nDetKzcI/AAAAAAAAAiE/wrY2DVPq2t0/s1600/american-flag.png'},

  { SelectLanguage:'Seleccione el idioma',
    SignUpToContinue:'Regístrese para continuar',
    Name:'Nombre',
    id:2,
    Submit:'Отправить',
    Email:'identificación de correo',
    Password:'Contraseña',
    ImgURL:'https://www.theodora.com/flags/new15/russia_flag_large.jpg'},

  { SelectLanguage:'Выберите язык',
    SignUpToContinue:'Зарегистрируйтесь, чтобы продолжить',
    Name:'название',
    id:3,
    Submit:'enviar',
    Email:'Эл. адрес',
    Password:'пароль',
    ImgURL:'https://www.free-largeimages.com/wp-content/uploads/2014/12/Mexico_flag-2.jpg'}
]}

const SelectLangReducer = (originalLang=[],action) =>{
  if(action.type==='LANG_SELECTED'){
    return( action.payload )
  }
  return originalLang
}



export default combineReducers({
                       LangData:Language,
                       SelectedLang: SelectLangReducer,

                     })
