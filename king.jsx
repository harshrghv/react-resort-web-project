import photo19 from './images/19.jpeg'
import photo20 from './images/20.jpeg'
import photo21 from './images/21.jpeg'
import photo22 from './images/22.jpeg'
import photo23 from './images/23.jpeg'
import photo24 from './images/24.jpeg'
import photo25 from './images/KING.jpeg'
function Three()
{
    return(
        <>
           <div className=' absolute ms-96 mt-20'>
           <h1 className=' text-center mb-16  font-serif text-3xl ms-20'><img src={photo25} className=' h-24 w-20 mb-2 inline-block '/>KING ROOMS</h1>
           </div>
           <div className='flex mt-56 ms-8'>
            <img src={photo19} className='h-56 w-96'/>
            <img src={photo20} className='h-56 w-96 ms-5'/>
            <img src={photo21} className='h-56 w-96 ms-5'/>     
        </div>
        <div className='flex mt-20 ms-8'>
            <img src={photo22} className='h-56 w-96'/>
            <img src={photo23} className='h-56 w-96 ms-5'/>
            <img src={photo24} className='h-56 w-96 ms-5'/>
        </div>
        </>
        
    );
}

export default Three;