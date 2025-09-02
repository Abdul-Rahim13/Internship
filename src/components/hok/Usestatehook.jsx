import {useState} from 'react'

function Usestatehook() {
    const [col, setCol] = useState('red')

    const changecol = () => {
        setCol('orange')
    }

    const [brand, setBrand] = useState('Ferrai')
    const [model, setModel] = useState('Roma')
    const [year, setYear] = useState('2023')
    const [color, setColor] = useState('red')

    {/*instead of creating multiples states (like upward) variable we make state object (like downward) */ }

    const [car, setCar] = useState({
      brand: 'Ferrai',
      model: 'Roma',
      year: '2023',
      color: 'red'
    })

    const changecolor = () => {

      { /* setCar({color:'blue'}) */ }

       {/* in this problem is that all the previous key-value pair is removed and only red color is seen in UI to include all other key-value pairs we have to use spread operator (...prev) */}

      setCar((prev) => {
        return {...prev, color: 'blue' }
      })

    }

    const [count, setCount] = useState(0)

    const changecount = ()=> {
      setCount(count+1)
    }

  return (
    <div className='flex flex-col justify-center items-center gap-y-5'>
      <h1 className='text-2xl'>My fav color is {col}!</h1>
      {/* if we dont use useState it will not update the UI on click it will only shown in console so to avoid this conflict we use useState */}
      <button className='cursor-pointer w-25 bg-amber-100 rounded-2xl' 
      onClick={changecol}>blue</button> 

      <div className='flex flex-col justify-center items-center gap-y-5'>

        <h1 className='text-2xl'> My {car.brand}</h1>
        <p className='text-{20px}'> It is a {car.color} {car.model} from {car.year}</p>

        <button className='cursor-pointer w-25 bg-amber-100 rounded-2xl' 
        onClick={changecolor}>blue</button> 

      </div>

      <div className='flex flex-col justify-center items-center gap-y-5'>
        <h1 className='text-2xl'> Count: {count}</h1>
        <button className='cursor-pointer w-25 bg-amber-100 rounded-2xl' 
        onClick={changecount}>Click to Increase</button> 
      </div>

      <div className="border-t border-gray-400 w-10/12 mx-auto my-6"></div>
      
    </div>
    
  )
}

export default Usestatehook