import './style.css'
import { isEmail } from 'validator'

const button = document.querySelector('button')
const input = document.querySelector('input')
const resultado = document.getElementById('resultado')


const verifyInfo =  () =>{
    console.log('Verificando informações')
    const email = input.value
    
    if(isEmail(email)){
        resultado.innerHTML = 'Email válido'
    }else{
        resultado.innerHTML = 'Email inválido'
    }
}

button.addEventListener('click', () => {
    verifyInfo();
})