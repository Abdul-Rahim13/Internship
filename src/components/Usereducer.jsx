import {useReducer} from 'react'

function Usereducer() {

    const initialState = {count:0}
    const reducer = (state, action) => {
        return {count: state.count+1}
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const inc = (() => {
        setValue(value => value + 1)
    })
    const dec = (() => {
        setValue(value => value - 1)
    })
  return (
    <div className='flex flex-col justify-center items-center gap-y-5'>

        <button onClick={inc} className='cursor-pointer w-25 bg-amber-100 rounded-2xl'>+1</button>
        <h1>{state.count}</h1>
        <button onClick={dec} className='cursor-pointer w-25 bg-amber-100 rounded-2xl'>-1</button>

    </div>
  )
}

export default Usereducer