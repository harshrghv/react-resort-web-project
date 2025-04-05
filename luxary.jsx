import photo7 from './images/7.jpeg'
import photo8 from './images/8.jpeg'
import photo9 from './images/9.jpeg'
import photo10 from './images/10.jpeg'
import photo11 from './images/11.jpeg'
import photo12 from './images/12.jpeg'
function Four()
{
    return(
        <>
        <h1 className=' text-center mt-32 font-serif text-3xl'>LUXARY ROOMS</h1>
        <div className='flex mt-28 ms-8'>
            <img src={photo7} className='h-56 w-96'/>
            <img src={photo8} className='h-56 w-96 ms-5'/>
            <img src={photo9} className='h-56 w-96 ms-5'/>     
        </div>
        <div className='flex mt-20 ms-8'>
            <img src={photo10} className='h-56 w-96'/>
            <img src={photo11} className='h-56 w-96 ms-5'/>
            <img src={photo12} className='h-56 w-96 ms-5'/>
        </div>
        </>
    );
}

export default Four;