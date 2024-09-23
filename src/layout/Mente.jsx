import { useState } from "react"
import Alerta from "../components/Alerta";


import Modal from "../components/Modal"


const Mente = () => {
    const [mente, setMente] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [alerta, setAlerta] = useState({})


    const handleSubmit = e => {
        e.preventDefault()

        if (mente === '') {
            setAlerta({
              msg: 'Coloca el número pensado',
              error:true
            })
            return
          }
        
        
        setShowModal(true)
    }
    const { msg } = alerta
    const alertaMente= mente
    return (
      
        <main className="container mx-auto grid mt-12 p-10 gap-9 items-center justify-center">
                
          <div className="bg-gray-100 shadow-lg rounded-lg p-10">

                {showModal && <Modal
                    modal ={alertaMente}
                />}
                {msg && <Alerta
                alerta={alerta}
                />}
          <form onSubmit={handleSubmit}>  
            <div className="mx-auto grid  p-10 gap-3 items-center justify-center">
              <label className="justify-center items-center flex mb-10 text-center font-bold uppercase text-cyan-950">Piensa un numero del 1 al infinito♾️</label>

              <input
                type="number"
                label="Piensa un numero"
                placeholder=" Numero pensado" className="input border rounded-xl bg-none"
                value={mente}
                onChange={e => setMente(e.target.value)}
              />
            
              <input
                type="submit"
                value="Lee mi mente"        
                className="hover:cursor-pointer bg-lime-900 w-full rounded-lg text-white uppercase" />
            </div>
          </form>
        </div>
      </main> 
  )
}

export default Mente



{/* <main className="container mx-auto grid mt-12 p-10 gap-9 items-center justify-center">
        <div className="bg-gray-100 shadow-lg rounded-lg p-10">
          <form onSubmit={handleSubmit}>  
            <div className="mx-auto grid  p-10 gap-3 items-center justify-center">
              <label className="justify-center items-center flex mb-10 text-center font-bold uppercase text-cyan-950">Piensa un numero del 1 al 10</label>

              <input
                type="text"
                label="Piensa un numero"
                placeholder=" Numero pensado" className="input border rounded-xl bg-none"
                value={mente}
                onChange={e => setMente(e.target.value)}
              />
            
              <input
                type="submit"
                value="Lee mi mente"
                className="hover:cursor-pointer bg-indigo-800 w-full rounded-lg text-white uppercase" />
            </div>
          </form>
        </div>
      </main>  */}