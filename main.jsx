 import logo1 from './images/bg6.avif'
 import roomone from './images/room1.jpg'
 import roomtwo from './images/room2.jpg'
 import roomthree from './images/room3.jpg'
 import roomfour from './images/room5.jpg'
 import icons from './images/icons2.jpg'
 import Con from './images/contact.png'
 import {BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom'
 import single from './single';
 import queen from './queen';
 import king from './king';
 import luxary from './luxary';
 function Main()
{
    return(
        <>
    <div>
       <One/>
       <Two/>
       <Three/>
       <Four/>
       <Five/>
       
    </div>
         </>
    );
}

export default Main;


function One ()
{
    return(
        <>
       
        <section id='homes'>
        <div className=' w-screen '>
            <div className=' absolute mt-48 text-white  ms-14'>
            <h1 className='text-6xl font-serif'>Spend Quality</h1>
            <h1 className='text-6xl font-serif' >Holiday with us</h1>
            <h1 className='text-slate-300 text-sm'> Hill View Resort is the combination of innovative design and crafted luxury
             and set apart by an unprecedented level of personalised hospitality,
             private spaces and bespoke journeys.Here, We Combine comfort, 
             personalized service and exceptional values. The Hill View Resort offering
             so many Rooms, Gym Facilities and many more Facilities and it is ideally
             situated in Bhuj – Kutch,Near Hill Garden, Airport Ringroad.</h1>
            </div>
            
          <img src={logo1} className='h-screen w-screen m-0 p-0'/>
          </div>
           
           </section>
           
           
        </>
    );
}

function Two()
{
    return(
        <>
        <section id='room' className='mt-24'>
        <h1 className='text-6xl text-center text-slate-700 font-serif '>ROOMS</h1>
        <div className=''>
        <ul className='flex ms-20 absolute mt-5 '>
            <li className='ms-10 text-orange-950'>SINGLE ROOM</li>
            <li className='ms-52 text-pink-400'>QUEEN ROOM</li>
            <li className='ms-56 text-zinc-400 '>KING ROOM</li>
            <li className='ms-44 text-black'>LUXARY ROOM</li>
        </ul>
        <Router>
        <div className='flex  mt-10 '>
         <button><Link to='/Single room'><img src={roomone} className='mt-5 p-10 w-96 h-80  shadow-[0_35px_60px_-15px_rgba(10,10,10,15)] hover:bg-gray-500'/></Link></button>
         <button><Link to='/Queen room'><img src={roomtwo} className='mt-5 p-10 w-96 h-80 shadow-[0_35px_60px_-15px_rgba(0,0,0,15)]  hover:bg-pink-600 '/></Link></button>
         <button><Link to='/King room'><img src={roomthree} className='mt-5 p-10 w-96 h-80 shadow-[0_35px_60px_-15px_rgba(0,0,0,15)] hover:bg-slate-900 text-gray-500 '/></Link></button>
         <button><Link to='/Luxary room'><img src={roomfour} className='mt-5 p-10 w-96 h-80 shadow-[0_35px_60px_-15px_rgba(0,0,0,15)]  hover:bg-orange-950 '/></Link></button>
        </div>
           
           <Routes>
            <Route exact path='/single room' Component={single} />
            <Route exact path='/Queen room' Component={queen} />
            <Route exact path='/King room' Component={king} />
            <Route exact path='/Luxary room' Component={luxary} />
           </Routes>


        </Router>
        </div>

        <div className=' mt-14  '>
            <h1 className='  text-red-700 '>
            Deluxe king SizeOur Deluxe king size room has
            a seating area, ample storage, digital safe and
            mini fridge. This room can also be configured 
            with an extra roll-away bed for families of 3
            Deluxe king SizeOur Deluxe king size room has
            a seating area, ample storage, digital safe and
            mini fridge. This room can also be configured 
            with an extra roll-away bed for families of 3
            Deluxe king SizeOur Deluxe king size room has
            a seating area, ample storage, digital safe and
            mini fridge. This room can also be configured 
            with an extra roll-away bed for families of 3
            Deluxe king SizeOur Deluxe king size room has
            a seating area, ample storage, digital safe and
            mini fridge. This room can also be configured 
            with an extra roll-away bed for families of 3
            Deluxe king SizeOur Deluxe king size room has
            a seating area, ample storage, digital safe and
            mini fridge. This room can also be configured 
            with an extra roll-away bed for families of 3
            Deluxe king SizeOur Deluxe king size room has
            a seating area, ample storage, digital safe and
            mini fridge. This room can also be configured 
            with an extra roll-away bed for families of 3
            Deluxe king SizeOur Deluxe king size room has
            a seating area, ample storage, digital safe and
            mini fridge. This room can also be configured 
            with an extra roll-away bed for families of 3
            Deluxe king SizeOur Deluxe king size room has
            a seating area, ample storage, digital safe and
            mini fridge. This room can also be configured 
            with an extra roll-away bed for families of 3
            Deluxe king SizeOur Deluxe king size room has
            a seating area, ample storage, digital safe and
            mini fridge.
            </h1>
        </div>
        
        </section>
        </>
    );
}

function Three()
{
    return(
        <>
        <section id='about'>
        <div className='text-center mt-28 text-2xl'>
        <h3 className='text-amber-800 font-semibold'>Hill Town Resort</h3>
        <h1 className='mt-8 text-7xl text-cyan-600 font-serif'>We're gonna make this </h1>
        <h2 className='mt-8 text-7xl  font-serif'>place your home</h2>
        <p className='mt-20 text-sm text-slate-600'>
        Hill View Resort is the combination of innovative design and crafted luxury
             and set apart by an unprecedented level of personalised hospitality,
             private spaces and bespoke journeys.Here, We Combine comfort, 
             personalized service and exceptional values. The Hill View Resort offering
             so many Rooms, Gym Facilities and many more Facilities and it is ideally
             situated in Bhuj – Kutch,Near Hill Garden, Airport Ringroad.
             Our purpose is to give our guests a complete experience and a perfect stay.
            Our staff to have a culture of mutual respect, trust and integrity. 
            Hill View Resort is a place that is fun and filled with the unexpected. 
            What we do is always authentic, honest and mindful that less is often so much more
            Hill View Resort is the combination of innovative design and crafted luxury
             and set apart by an unprecedented level of personalised hospitality,
             private spaces and bespoke journeys.Here, We Combine comfort, 
             personalized service and exceptional values. The Hill View Resort offering
             so many Rooms, Gym Facilities and many more Facilities and it is ideally
             situated in Bhuj – Kutch,Near Hill Garden, Airport Ringroad.
             Our purpose is to give our guests a complete experience and a perfect stay.
            Our staff to have a culture of mutual respect, trust and integrity. 
            Hill View Resort is a place that is fun and filled with the unexpected. 
            What we do is always authentic, honest and mindful that less is often so much more
        Hill View Resort is the combination of innovative design and crafted luxury
             and set apart by an unprecedented level of personalised hospitality,
             private spaces and bespoke journeys.Here, We Combine comfort, 
             personalized service and exceptional values. The Hill View Resort offering
             so many Rooms, Gym Facilities and many more Facilities and it is ideally
             situated in Bhuj – Kutch,Near Hill Garden, Airport Ringroad.
             Our purpose is to give our guests a complete experience and a perfect stay.
            Our staff to have a culture of mutual respect, trust and integrity. 
            Hill View Resort is a place that is fun and filled with the unexpected. 
            What we do is always authentic, honest and mindful that less is often so much more
            Hill View Resort is the combination of innovative design and crafted luxury
             and set apart by an unprecedented level of personalised hospitality,
             private spaces and bespoke journeys.Here, We Combine comfort, 
             personalized service and exceptional values. The Hill View Resort offering
             so many Rooms, Gym Facilities and many more Facilities and it is ideally
             situated in Bhuj – Kutch,Near Hill Garden, Airport Ringroad.
             Our purpose is to give our guests a complete experience and a perfect stay.
            Our staff to have a culture of mutual respect, trust and integrity. 
            Hill View Resort is a place that is fun and filled with the unexpected. 
            What we do is always authentic, honest and mindful that less is often so much more
        </p>
        </div>
        </section>
        </>
    );
}


function Four()
{
    return(
        <>
        <section id='contact'>
        
        <div className=' absolute ms-80 mt-28'>
        <span className='ms-20  text-blue-900 text-7xl font-serif'><img src={Con} className=' inline-block h-20 w-20 mb-5 '/>Contact us</span>
        </div>
        
        <div className='flex'>
       <div className='h-56 w-72 ms-5 mt-80 bg-slate-200 rounded-2xl'>
        <h1 className='text-3xl mt-6 font-serif font-extrabold ms-4'>Visit us</h1>
        <h3 className='text-sm mt-6 ms-5'> Visit our office HTR</h3>
        <h3 className='text-sm  ms-5'>Mall Road Shimla</h3>
        <h3 className='text-sm  ms-5'>Himachal Pradesh</h3>
        <h1  className='font-extrabold mt-10 ms-3'>View on Google Maps</h1>
       </div>
       <div className='h-56 w-72 mt-80 ms-5 bg-slate-200  rounded-2xl'>
       <h1 className='text-3xl mt-6 font-serif font-extrabold ms-4'>Call us</h1>
       <h1 className='ms-6 mt-3'>Monday-Friday from 8am to 7pm</h1>
       <h1 className='ms-6 font-extrabold'>+91-9354434312</h1>
       <h1 className='ms-6 mt-3'>Saturday-Sunday from 10am to 3pm</h1>
       <h1 className='ms-6 font-extrabold'>+91-8545954996</h1>
       </div>
       <div className='h-56 w-72 mt-80 ms-5 bg-slate-200  rounded-2xl'>
       <h1 className='text-3xl mt-6 font-serif font-extrabold ms-4'>Chat to support</h1>
       <h1 className='ms-4 mt-5'>We're here to help</h1>
       <h1 className='font-extrabold mt-14 ms-4'>hilltownresort11@gmail.com</h1>
       </div>
       <div className='h-56 w-72 mt-80 ms-5 bg-slate-200   rounded-2xl'>
       <h1 className='text-3xl mt-6 font-serif font-extrabold ms-4'>Booking</h1>
       <h1 className='mt-5 ms-6 font-bold'>Payment</h1>
       <h1 className='mt-2 ms-6 '>UPI ID :9354434812@pthdfc </h1>
       </div>
        </div>
        </section>
        
        </>
    );
}


function Five()
{
    return(
        <>
        <div className=' absolute mt-52 h-20 w-screen bg-gray-400'>
        <h1 className='font-extrabold font-serif text-5xl'>Follow us</h1>
        
        
        <h1 className='font-bold ms-96 mb-10 text-2xl'>WWW.Hilltowmresort.com</h1>
        </div>
       
        </>
    );
}


