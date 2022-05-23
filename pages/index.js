import { useState } from "react"
import Navbar from "../components/Navbar"
import { saveAs } from 'file-saver'
export default function Home() {
  const [opcion,setOpcion] = useState('Adaline')
  const [matriz,setMatriz] = useState()
  const [entradas,setEntradas] = useState()
  const [salidas,setSalidas] = useState()
  const [patrones, setPatrones] = useState()
  const handleChange = ( e) =>{
    setOpcion(e.target.value)
  }
  const readFile = (e) =>{
    const file = e.target.files[0]
    if (!file) return
    const fileReader= new FileReader()
    fileReader.readAsText( file )
    fileReader.onload = () =>{
      setPatrones(fileReader.result.split("\r\n").length)
      setEntradas(fileReader.result.split("\r\n")[0].split("|")[0].length)
      setSalidas(fileReader.result.split("\r\n")[0].split("|")[1].length)
    }
    fileReader.onerror = () =>{
      console.log(fileReader.error)
    }
  }
  const handlePeso = () =>{
    let i = 0
    let nums
    let text = ""
    do {
      nums = (Math.random() * (1 - (-1)) + (-1)).toFixed(2)
      text = text.concat(nums + " ")
      i++
      if(i%salidas === 0){
        text = text.concat("\n")
      }
    } while (i < entradas*salidas)
    setMatriz(text)
  }
  const handleSubmit = () =>{
    let j=0
    let num2
    let text2 = ""
    do {
      num2 = (Math.random() * (1 - (-1)) + (-1)).toFixed(2)
      text2 = text2.concat(num2 + "\n")
      j++
    } while (j<salidas);
    const peso = new Blob([matriz],{type: 'text/plain;charset=utf-8'})
    const umbral = new Blob([text2],{type: 'text/plain;charset=utf-8'})
    saveAs(peso,"Matriz de peso.txt")
    saveAs(umbral,"Matriz de umbrales.txt")
  }
  return (
    <div>
      <Navbar></Navbar>
      <br/>
      <div className="container">
        <form >
          <label className="form-label">Seleccionar el tipo de red neuronal</label>
          <select value={opcion} onChange={handleChange} className="form-select">
            <option value="Adaline">Adaline</option>
            <option value="Perceptron">Perceptron</option>
            <option value="Backpropagation">Backpropagation</option>
          </select>
          <label className="form-label">{opcion}</label>
          <label className="form-label">Seleccionar funcion de activiacion</label>
          <select className="form-select">
            {opcion === "Adaline" ? <option>Lineal</option> 
            : opcion === "Perceptron" ? <option>Escalon</option>
            : opcion === "Backpropagation" ? <><option>Sigmoide</option><option>Tangente hiperbolica</option></>
            :   <option>Invalida</option>}
          </select>
          <label className="form-label">Seleccionar algoritmo de entrenamiento</label>
          <select className="form-select">
            {opcion === "Backpropagation" ? <option>Propagacion inversa</option>
            :<option>Regla delta</option>}
          </select>
          <label className="form-label">Seleccione el archivo</label>
          <input className="form-control" onChange={readFile}  type="file"/>
          <label className="form-label">Numero de entradas: {entradas}</label>
          <br/>
          <label className="form-label">Numero de salidas: {salidas}</label>
          <br/>
          <label className="form-label">Numero de patrones: {patrones}</label>
          <br/>
          <label className="form-label">Matriz de peso:</label>
          <br/>
          <textarea  className="form-control" value={matriz} disabled/>
          <br/>
          <button type="button" onClick={handleSubmit} className="btn btn-primary">descargar</button>
          <button type="button" onClick={handlePeso} className="btn btn-secondary ms-1">calcular</button>
        </form>
      </div>
    </div>
  )
}
