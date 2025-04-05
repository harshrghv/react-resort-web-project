import photo13 from './images/13.jpeg'
import photo14 from './images/14.jpeg'
import photo15 from './images/15.jpeg'
import photo16 from './images/16.jpeg'
import photo17 from './images/17.jpeg'
import photo18 from './images/18.jpeg'
function Two()
{
    return(
        <>
        <h1 className=' text-center mt-32 font-serif text-3xl'>QUEEN ROOMS</h1>
         <div className='flex mt-28 ms-8'>
            <img src={photo13} className='h-56 w-96'/>
            <img src={photo14} className='h-56 w-96 ms-5'/>
            <img src={photo15} className='h-56 w-96 ms-5'/>     
        </div>
        <div className='flex mt-20 ms-8'>
            <img src={photo16} className='h-56 w-96'/>
            <img src={photo17} className='h-56 w-96 ms-5'/>
            <img src={photo18} className='h-56 w-96 ms-5'/>
        </div>
        </>
        
    );
}

export default Two;