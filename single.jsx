
import photo1 from './images/1.jpeg'
import photo2 from './images/2.jpeg'
import photo3 from './images/3.jpeg'
import photo4 from './images/4.jpeg'
import photo5 from './images/5.jpeg'
import photo6 from './images/6.jpeg'

function One()
{
    return(
        <>
       <h1 className=' text-center mt-32 font-serif text-3xl'>SINGLE ROOMS</h1>
        <div className='flex mt-28 ms-8'>
            <img src={photo1} className='h-56 w-96'/>
            <img src={photo2} className='h-56 w-96 ms-5'/>
            <img src={photo3} className='h-56 w-96 ms-5'/>     
        </div>
        <div className='flex mt-20 ms-8'>
            <img src={photo4} className='h-56 w-96'/>
            <img src={photo5} className='h-56 w-96 ms-5'/>
            <img src={photo6} className='h-60 w-96 ms-5'/>
        </div>
       
        </>
    );
}

export default One;