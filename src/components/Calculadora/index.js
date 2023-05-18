

import {useState} from "react"
import {suma,resta,mostrarNombre} from "./Funciones";

export const Calculadora = () =>{

    //Area funciones 
    const initialState  = 15;
    let variable2 = 10;
    
    const initialState2 = "";
    const [variable,setVariable] = useState(initialState);

    const [inputValue,setInputValue] = useState("")

    const sumar = () =>{
        let resultadoSuma = suma(variable,variable2);
        setVariable(resultadoSuma)
    }

    const restar = () =>{
        let resultadoResta = resta(variable,variable2);
        setVariable(resultadoResta)
    }


    const mostrarNom = () =>{
        let mostrar = mostrarNombre()
    }




    return (
        <div>
            <button onClick={() => sumar()}>Suma</button>

            <button onClick={() => restar()}>Resta</button>
        {variable}
            <br></br>

         
            <input type="text" placeholder="Ingrese un nombre"></input>

            <button  onClick = {() => mostrarNom()}></button>

           
            {nombre};
        </div>
    )


}