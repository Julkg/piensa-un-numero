import { Progress } from '@material-tailwind/react'

import { useState, useEffect } from 'react';

const Modal = ({ modal }) => {

    const [percentage, setPercentage] = useState(10)
    const [labelPercent, setLabelPercent] = useState(' ')
    const [label, setLabel] = useState('Analizando Pensamientos')
    const [hidden, setHidden] = useState('hidden')

    useEffect(() => {
        const chargingModal =() => {

            
            
            
            
            setTimeout(  ()  => {
                setPercentage(35)
                setLabelPercent('Cargando')
                
                    
            }, 1000);

            setTimeout(() => {
                setPercentage(45)
                setLabelPercent('Cargando')
            }, 1800);


            setTimeout(() => {
                setPercentage(80)
                setLabelPercent('Ya casi!')
            }, 2500);


            setTimeout(() => {
                setPercentage(100)
                setLabelPercent('Completado')
            }, 3500);

            setTimeout(() => {
                setPercentage(10)
                setLabelPercent(' ')
                setLabel('Renderizando conexión cognitiva')
            }, 4000);

            setTimeout(() => {
                setPercentage(30)
                setLabelPercent('Cargando')
            }, 4800);

            setTimeout(() => {
                setPercentage(70)
                setLabelPercent('No bloquees pensamientos!')
            }, 5500);

            setTimeout(() => {
                setPercentage(100)
                setLabelPercent('Completado')
            }, 6500);

            setTimeout(() => {
                setPercentage(10)
                setLabelPercent(' ')
                setLabel('Proyección Cerebral casi completada')
            }, 6500);

            setTimeout(() => {
                setPercentage(25)
                setLabelPercent(' ')
                setLabel('Proyección Cerebral casi completada')
            }, 6800);

            setTimeout(() => {
                setPercentage(40)
                setLabelPercent('Cargando')
                setLabel('Proyección Cerebral casi completada')
            }, 7200);

            setTimeout(() => {
                setPercentage(65)
                setLabelPercent('Cargando')
                setLabel('Proyección Cerebral casi completada')
            }, 7500);
            
            setTimeout(() => {
                setPercentage(100)
                setLabelPercent('Completado')
                setLabel(' ')
            }, 7800);

            setTimeout(() => {
                setPercentage(100)
                setLabelPercent('Completado')
                setLabel(`Pensaste en el Numero `)
                setHidden('display')
            }, 7800);

            


            
        }
        chargingModal()

        }, [])
    
  return (

    <>
        <div
        className="mx-4 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-2xl font-semibold text-center">
                Leyendo tu mente 🧠
                </h3>
                
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
                <p className="flex justify-center my-4 text-blueGray-500 text-lg leading-relaxed">
                              <h1 className="font-extrabold text-xl text-black-800" >{label}<span className={hidden}>{modal}</span><span className='font-extrabold text-xl text-black-800 animate-ping'> .<span className='font-extrabold text-xl text-black-800 animate-ping'>.</span><span className='font-extrabold text-xl text-black-800 animate-ping'>.</span></span></h1>
                </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">

            <Progress value={percentage} label={labelPercent} color='green' size='lg' />
            </div>
            </div>
        </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>

      
  )
}

export default Modal