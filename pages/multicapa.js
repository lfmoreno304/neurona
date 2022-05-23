import Navbar from "../components/Navbar"
import { useState } from "react"
import { saveAs } from 'file-saver'
const Multicapa = () => {
    const [opcion, setOpcion] = useState(1)
    const [neuronas, setNeuronas] = useState()
    const [neuronas2, setNeuronas2] = useState()
    const [neuronas3, setNeuronas3] = useState()
    const [entradas, setEntradas] = useState()
    const [salidas, setSalidas] = useState()
    const [entradaCapa, setEntradaCapa] = useState()
    const [capaSalida, setCapaSalida] = useState()
    const handleOpcion = (e) => {
        setOpcion(e.target.value)
    }
    const handleNeuronas = (e) => {
        setNeuronas(e.target.value)
    }
    const handleNeuronas2 = (e) => {
        setNeuronas2(e.target.value)
    }
    const handleNeuronas3 = (e) => {
        setNeuronas3(e.target.value)
    }
    const readFile = (e) => {
        const file = e.target.files[0]
        if (!file) return
        const fileReader = new FileReader()
        fileReader.readAsText(file)
        fileReader.onload = () => {
            setEntradas(fileReader.result.split("\r\n")[0].split("|")[0].length)
            setSalidas(fileReader.result.split("\r\n")[0].split("|")[1].length)
        }
        fileReader.onerror = () => {
            console.log(fileReader.error)
        }
    }
    const handlePesoCapa1 = () => {
        let i = 0
        let nums
        let eCapa = ""
        do {
            nums = (Math.random() * (1 - (-1)) + (-1)).toFixed(2)
            eCapa = eCapa.concat(nums + " ")
            i++
            if (i % neuronas === 0) {
                eCapa = eCapa.concat("\n")
            }
        } while (i < entradas * neuronas)
        setEntradaCapa(eCapa)
        let j = 0
        let nums2
        let cSalida = ""
        do {
            nums2 = (Math.random() * (1 - (-1)) + (-1)).toFixed(2)
            cSalida = cSalida.concat(nums2 + " ")
            j++
            if (j % salidas === 0) {
                cSalida = cSalida.concat("\n")
            }
        } while (j < neuronas * salidas);
        let k = 0
        let num2
        let text2 = ""
        do {
            num2 = (Math.random() * (1 - (-1)) + (-1)).toFixed(2)
            text2 = text2.concat(num2 + "\n")
            k++
        } while (k < neuronas);
        let l = 0
        let nums3
        let text = ""
        do {
            nums3 = (Math.random() * (1 - (-1)) + (-1)).toFixed(2)
            text = text.concat(nums3 + "\n")
            l++
        } while (l < salidas);
        setCapaSalida(cSalida)
        const capa1 = new Blob([eCapa], { type: 'text/plain;charset=utf-8' })
        const capaSalida1 = new Blob([cSalida], { type: 'text/plain;charset=utf-8' })
        const umbralCapa = new Blob([text2], { type: 'text/plain;charset=utf-8' })
        const umbralSalida = new Blob([text], { type: 'text/plain;charset=utf-8' })
        saveAs(capa1, "Matriz entrada-capa.txt")
        saveAs(capaSalida1, "Matriz capa-salida.txt")
        saveAs(umbralCapa, "Matriz umbral-capa.txt")
        saveAs(umbralSalida, "Matriz umbral-salida.txt")
    }
    const handlePesoCapa2 = () => {
        let i = 0
        let nums
        let eCapa = ""
        do {
            nums = (Math.random() * (1 - (-1)) + (-1)).toFixed(2)
            eCapa = eCapa.concat(nums + " ")
            i++
            if (i % neuronas === 0) {
                eCapa = eCapa.concat("\n")
            }
        } while (i < entradas * neuronas)
        setEntradaCapa(eCapa)
        let q = 0
        let n
        let cCapa = ""
        do {
            n = (Math.random() * (1 - (-1)) + (-1)).toFixed(2)
            cCapa = cCapa.concat(n + " ")
            q++
            if (q % neuronas2 === 0) {
                cCapa = cCapa.concat("\n")
            }
        } while (q < neuronas * neuronas2);
        let j = 0
        let nums2
        let cSalida = ""
        do {
            nums2 = (Math.random() * (1 - (-1)) + (-1)).toFixed(2)
            cSalida = cSalida.concat(nums2 + " ")
            j++
            if (j % salidas === 0) {
                cSalida = cSalida.concat("\n")
            }
        } while (j < neuronas2 * salidas);
        let k = 0
        let num2
        let text2 = ""
        do {
            num2 = (Math.random() * (1 - (-1)) + (-1)).toFixed(2)
            text2 = text2.concat(num2 + "\n")
            k++
        } while (k < neuronas);
        let t = 0
        let num4
        let umn = ""
        do {
            num4 = (Math.random() * (1 - (-1)) + (-1)).toFixed(2)
            umn = text2.concat(num4 + "\n")
            t++
        } while (t < neuronas2);
        let l = 0
        let nums3
        let text = ""
        do {
            nums3 = (Math.random() * (1 - (-1)) + (-1)).toFixed(2)
            text = text.concat(nums3 + "\n")
            l++
        } while (l < salidas);
        setCapaSalida(cSalida)
        const capa1 = new Blob([eCapa], { type: 'text/plain;charset=utf-8' })
        const capa2 = new Blob([cCapa], { type: 'text/plain;charset=utf-8' })
        const capaSalida1 = new Blob([cSalida], { type: 'text/plain;charset=utf-8' })
        const umbralCapa = new Blob([text2], { type: 'text/plain;charset=utf-8' })
        const umbralCapa2 = new Blob([umn], { type: 'text/plain;charset=utf-8' })
        const umbralSalida = new Blob([text], { type: 'text/plain;charset=utf-8' })
        saveAs(capa1, "Matriz entrada-capa1.txt")
        saveAs(capa2, "Matriz capa1-capa2.txt")
        saveAs(capaSalida1, "Matriz capa2-salida.txt")
        saveAs(umbralCapa, "Matriz umbral-capa1.txt")
        saveAs(umbralCapa2, "Matriz umbral-capa2.txt")
        saveAs(umbralSalida, "Matriz umbral-salida.txt")
    }
    const handlePesoCapa3 = () => {
        let i = 0
        let nums
        let eCapa = ""
        console.log(entradas)
        do {
            nums = (Math.random() * (1 - (-1)) + (-1)).toFixed(2)
            eCapa = eCapa.concat(nums + " ")
            i++
            if (i % neuronas === 0) {
                eCapa = eCapa.concat("\n")
            }
        } while (i < entradas * neuronas)
        setEntradaCapa(eCapa)
        let q = 0
        let n
        let cCapa = ""
        do {
            n = (Math.random() * (1 - (-1)) + (-1)).toFixed(2)
            cCapa = cCapa.concat(n + " ")
            q++
            if (q % neuronas2 === 0) {
                cCapa = cCapa.concat("\n")
            }
        } while (q < neuronas * neuronas2);
        let h =0
        let nume
        let ccCapa = ""
        do {
            nume = (Math.random() * (1 - (-1)) + (-1)).toFixed(2)
            ccCapa = ccCapa.concat(nume + " ")
            h++
            if (h % neuronas2 === 0) {
                ccCapa = ccCapa.concat("\n")
            }
        } while (h < neuronas2 * neuronas3);
        let j = 0
        let nums2
        let cSalida = ""
        do {
            nums2 = (Math.random() * (1 - (-1)) + (-1)).toFixed(2)
            cSalida = cSalida.concat(nums2 + " ")
            j++
            if (j % salidas === 0) {
                cSalida = cSalida.concat("\n")
            }
        } while (j < neuronas3 * salidas);
        let k = 0
        let num2
        let text2 = ""
        do {
            num2 = (Math.random() * (1 - (-1)) + (-1)).toFixed(2)
            text2 = text2.concat(num2 + "\n")
            k++
        } while (k < neuronas);
        let t = 0
        let num4
        let umn = ""
        do {
            num4 = (Math.random() * (1 - (-1)) + (-1)).toFixed(2)
            umn = umn.concat(num4 + "\n")
            t++
        } while (t < neuronas2);
        let f = 0
        let numer
        let umn2 = ""
        do {
            numer = (Math.random() * (1 - (-1)) + (-1)).toFixed(2)
            umn2 = umn2.concat(numer + "\n")
            f++
        } while (f < neuronas3);
        let l = 0
        let nums3
        let text = ""
        do {
            nums3 = (Math.random() * (1 - (-1)) + (-1)).toFixed(2)
            text = text.concat(nums3 + "\n")
            l++
        } while (l < salidas);
        setCapaSalida(cSalida)
        const capa1 = new Blob([eCapa], { type: 'text/plain;charset=utf-8' })
        const capa2 = new Blob([cCapa], { type: 'text/plain;charset=utf-8' })
        const capa3 = new Blob([ccCapa], { type: 'text/plain;charset=utf-8' })
        const capaSalida1 = new Blob([cSalida], { type: 'text/plain;charset=utf-8' })
        const umbralCapa = new Blob([text2], { type: 'text/plain;charset=utf-8' })
        const umbralCapa2 = new Blob([umn], { type: 'text/plain;charset=utf-8' })
        const umbralCapa3 = new Blob([umn2], { type: 'text/plain;charset=utf-8' })
        const umbralSalida = new Blob([text], { type: 'text/plain;charset=utf-8' })
        saveAs(capa1, "Matriz entrada-capa1.txt")
        saveAs(capa2, "Matriz capa1-capa2.txt")
        saveAs(capa3, "Matriz capa2-capa3.txt")
        saveAs(capaSalida1, "Matriz capa3-salida.txt")
        saveAs(umbralCapa, "Matriz umbral-capa1.txt")
        saveAs(umbralCapa2, "Matriz umbral-capa2.txt")
        saveAs(umbralCapa3, "Matriz umbral-capa3.txt")
        saveAs(umbralSalida, "Matriz umbral-salida.txt")
    }
    return (
        <>
            <Navbar />
            <div className="container">
                <form>
                    <label className="form-label">Seleccione el numero de capas</label>
                    <select value={opcion} onChange={handleOpcion} className="form-select">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>
                    <label className="form-label">Seleccione el archivo</label>
                    <input onChange={readFile} className="form-control" type="file" />
                    {opcion == 1 ? <>
                        <label className="form-label">Digite el numero de neuronas </label>
                        <input onChange={handleNeuronas} className="form-control" type="number" />
                        <label className="form-label">Seleccionar funcion de activiacion</label>
                        <select className="form-select">
                            <option>Escalon</option>
                            <option>Sigmoide</option>
                            <option>Tangente hiperbolica</option>
                            <option>seno</option>
                            <option>coseno</option>
                            <option>gausiana</option>
                        </select>
                    </>
                        : opcion == 2 ? <>
                            <label className="form-label">Digite el numero de neuronas para la capa 1 </label>
                            <input onChange={handleNeuronas} className="form-control" type="number" />
                            <label className="form-label">Seleccionar funcion de activiacion de la capa 1</label>
                            <select className="form-select">
                                <option>Escalon</option>
                                <option>Sigmoide</option>
                                <option>Tangente hiperbolica</option>
                                <option>seno</option>
                                <option>coseno</option>
                                <option>gausiana</option>
                            </select>
                            <label className="form-label">Digite el numero de neuronas para la capa 2 </label>
                            <input onChange={handleNeuronas2} className="form-control" type="number" />
                            <label className="form-label">Seleccionar funcion de activiacion de la capa 2</label>
                            <select className="form-select">
                                <option>Escalon</option>
                                <option>Sigmoide</option>
                                <option>Tangente hiperbolica</option>
                                <option>seno</option>
                                <option>coseno</option>
                                <option>gausiana</option>
                            </select>
                        </>
                            : <>
                                <label className="form-label">Digite el numero de neuronas para la capa 1 </label>
                                <input onChange={handleNeuronas} className="form-control" type="number" />
                                <label className="form-label">Seleccionar funcion de activiacion de la capa 1</label>
                                <select className="form-select">
                                    <option>Escalon</option>
                                    <option>Sigmoide</option>
                                    <option>Tangente hiperbolica</option>
                                    <option>seno</option>
                                    <option>coseno</option>
                                    <option>gausiana</option>
                                </select>
                                <label className="form-label">Digite el numero de neuronas para la capa 2 </label>
                                <input onChange={handleNeuronas2} className="form-control" type="number" />
                                <label className="form-label">Seleccionar funcion de activiacion de la capa 2</label>
                                <select className="form-select">
                                    <option>Escalon</option>
                                    <option>Sigmoide</option>
                                    <option>Tangente hiperbolica</option>
                                    <option>seno</option>
                                    <option>coseno</option>
                                    <option>gausiana</option>
                                </select>
                                <label className="form-label">Digite el numero de neuronas para la capa 3 </label>
                                <input onChange={handleNeuronas3} className="form-control" type="number" />
                                <label className="form-label">Seleccionar funcion de activiacion de la capa 3</label>
                                <select className="form-select">
                                    <option>Escalon</option>
                                    <option>Sigmoide</option>
                                    <option>Tangente hiperbolica</option>
                                    <option>seno</option>
                                    <option>coseno</option>
                                    <option>gausiana</option>
                                </select>
                            </>}
                    <label className="form-label">Seleccionar algoritmo de entrenamiento</label>
                    <select className="form-select">
                        <option>Regla delta</option>
                        <option>Propagacion inversa</option>
                    </select>
                    <br />
                    <button type="button" onClick={opcion == 1 ? handlePesoCapa1 : 
                    opcion ==2 ? handlePesoCapa2: handlePesoCapa3}
                        className="btn btn-primary">descargar</button>
                </form>
            </div>
        </>
    )
}

export default Multicapa