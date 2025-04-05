import logo1 from './images/logo2.jpeg' 
function Header()
{
    return(
        <>
        <header className="h-20 w-screen bg-green-950 text-white">
        <Heading/>
        <Menu/>
        </header>
        </>
    );
}

export default Header;

function Heading()
{
    return(
        <>
       
       <div className=" ms-12 mt-10  absolute  ">
        <span className="  text-3xl"><img src={logo1} className=" h-8 w-9 mb-2 inline-block rounded-full     "/>HillTown </span>
        </div>

        <div className=" absolute" >
        <h2 className="ms-52 mt-10  pt-1 text-2xl text-gray-400 ">Resort</h2>
        </div>
      
        </>
    );

}


function Menu ()
{
    return(
        <>
        <div className=' absolute mt-7 ms-28 text-sm flex'>
         <ul className='flex ms-96 absolute'>
            <li className='ms-96 hover:text-slate-400 font-serif'><a href="#homes">HOME</a></li>
            <li className='ms-10 hover:text-slate-400 font-serif'><a href="#room">ROOMS</a></li>
            <li className='ms-10 hover:text-slate-400 font-serif'><a href="#about">ABOUT.US</a></li>
            <li className='ms-10 hover:text-slate-400 font-serif'><a href="#contact">CONTACT</a></li>
         </ul>
         </div>
        </>
    );
}