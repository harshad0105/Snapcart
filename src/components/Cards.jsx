
const Cards = (props) => {

  return (
    <div className='h-40 w-30 m-4 bg-neutral-100 shadow-xl text-black inline-block p-3 text-center rounded-lg'>
        <img src={props.image} alt="" className='h-22 w-full object-contain mb-2'/>
        <h1>{props.name}</h1>
    </div>
  )
}  

export default Cards