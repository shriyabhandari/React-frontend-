import React from 'react'
import { Link } from 'react-router-dom'
import image13 from "../images/image13.jpg"


const Footer = () => {
  return (
    <>
      <footer className="bg-red-900 mt-16 text-white text-center absolute pb-3 w-full">
        <div className="footer w-11/12 m-auto flex flex-col lg:flex-row justify-between">
        <div className='w-36 h-auto mt-20 pe-5'>
          <img src={image13} alt="image13" />
        </div>
        <div className="foot text-start mt-2 ps-2">
           <h3 className='font-bold text-xl py-3 ps-5'>Contact Us</h3>
           <h4 className='ps-5'>Shantinagar, New Baneshwor, Kathmandu</h4>
           <h4 className='ps-5'>+977 01- 5478904</h4>
           <h4 className='ps-5'>info@softwaresuppliersnepal.com</h4>
           <h4 className='ps-5'>sales@softwaresuppliersnepal.com</h4>
           <h4 className='ps-5'>supoort@softwaresuppliersnepal.com</h4>
           <h4 className='ps-5'>career@softwaresuppliersnepal.com</h4>
        </div>
         <div className="footer-middle flex justify-around gap-8">
            <div className='list-none text-start pe-24 ps-16 mt-2'>
                <h2 className='font-bold pt-3 text-xl pb-2'>TOPICS</h2>
                <li className='pb-2'>About</li>
                <li className='pb-2'>Features</li>
                <li className='pb-2'>Who We Are</li>
                <li className='pb-2'>Packages</li>
                <li className='pb-2'>Contact</li>
            </div>

            <div className='list-none text-start'>
                <h2 className='font-bold pt-3 text-xl pb-2 mt-2'>Our Services</h2>
                <li className='pb-2'>Software Development</li>
                <li className='pb-2'>Search Engine Optimization(SEO)</li>
                <li className='pb-2'>Web Application Development</li>
                <li className='pb-2'>Corporate Website Design</li>
                <li className='pb-2'>E-Commerce Solution</li>
            </div>
         </div>

        <div className="footer-end">
           <h2 className='font-bold text-lg pt-3 text-center sm:text-xl mt-2 ps-3'>Connect With Us</h2>
           <form className="flex pt-3 justify-center gap-2 ps-14">
            <input className="p-2 mt-1 text-black rounded-md" type="email" placeholder='Enter email' />
            <button className='bg-gray-600 p-2 mt-1 rounded-lg hover:bg-gray-800'>Subscribe</button>
          </form>

          <div className='footer-icons flex justify-around items-center pt-8 ps-16'>
            <Link to=""><i className="fa-brands fa-facebook text-lg md:text-2xl"></i></Link>
            <Link to=""><i className="fa-brands fa-instagram text-lg md:text-2xl"></i></Link>
            <Link to=""><i className="fa-brands fa-whatsapp text-lg md:text-2xl"></i></Link>
          </div>
        </div>
        </div>

        <div>
            <hr className='w-full m-auto mt-4'/>
            <div className='py-3 text-center px-6'>Copyright &copy;2024.All Rights Reserved</div>
        </div>
      </footer>
    </>
  )
}

export default Footer

   
