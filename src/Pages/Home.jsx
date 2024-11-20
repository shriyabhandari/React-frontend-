import React from "react";
import Header from "../Components/Header";
import image1 from "../images/image1.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg"
import image9 from "../images/image9.jpg"
import image10 from "../images/image10.jpg"
import image11 from "../images/image11.jpg"
import 'flowbite'
import Footer from "../Components/Footer";
import SimpleCarousel from "../Components/SimpleCarousel";
import Modal from "../Components/Modal";

const selectedImages = [image4,image5,image6];
const ServiceImages = [
  {img: image8,
   title: "Mobile App Development Packages",
   description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas aut ut alias, neque accusantium accusamus. Ea consectetur ad illum."
  },
  {
    img: image11,
    title:"Cyber Security and Networking Packages",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas aut ut alias, neque accusantium accusamus. Ea consectetur ad illum."
  },
  {
    img: image10,
    title:"Data Analytics and Business Intelligence Packages",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas aut ut alias, neque accusantium accusamus. Ea consectetur ad illum."
  },
  {
    img: image9,
    title:"Maintenance and Support Packages",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas aut ut alias, neque accusantium accusamus. Ea consectetur ad illum."
  }
];

const Home = () => {
  return (
    <>
      <Header id="home"/>
      <SimpleCarousel/>
      <section id="about">
        <h2 className="pt-24 text-3xl text-red-600 font-bold text-center ps-56">
          About
        </h2>
        <div className="w-11/12 sm:w-full m-auto">
          <div className="aboutmain lg:flex pt-12 w-11/12 m-auto">
            <div className="aboutleft relative ps-28" style={{width:'900px', height:'400px'}}>
              <img
                src={image1}
                alt=""
                className="absolute top-0 left-0 w-80 max-h-7xl object-cover rounded-lg shadow-lg border-4"
              />
              <img
                src={image7}
                alt=""
                className="absolute left-60 top-24 w-72 h-80 object-cover rounded-lg shadow-md"
              />
            </div>

            <div className="aboutpara lg:w-3/5 sm-md: flex flex-wrap lg:pt-0 pt-3">
              <p className="pb-6 p-4">
                Lorem ipsum dolor sit amet consecteturer adipisicing elit. Nam,
                ullam padem padum auttem! Ne ex atque vitae nu doloribus, porro nu tempore
                simili ipsam sequii labore autem serumi bijet nun blanditiis rem eos sit na
                perspiciat sunt vitae! Lorem ipsu, si nong amet consectetur
                adipisicing elit. Asperior, qui! Natus ullam elit veniam
                repellat, assumenda aut autem sique numqua, od corporis officii
                voluptate maior solut eos peri serumi num nug dignissimos incidunt?
                Laudantium delectus blanditiis repellend!
                <p className="pb-2">
                  Lorem ipsum dolor sit amet consecteu, adipisi elit. Harum iure
                  perferend mollitia ea, maior ipsam cumquee sapien earum in
                  ipsam. Cam offic atque eaque dugu aperiam fug voluptas illum
                  maior, quibusdam obcaecati, quossse accusamus nihil, repellat
                  delec provident error cupiditate delectus!
                </p>
                Lorem ipsum dolor sit, amet consectetr adipisicing elit. Quo
                reiciendis nostrum si cumque eaque we aliquid. Itaque fuga quidem a
                doloremque qui magnam non, tempora cu elitt aliquam quaerat? Lorem,
                ipsum.
              </p>

              <div className="abouticons flex pt-2 flex-wrap text-white pb-8 ps-4">
                <Link to="">
                  <i className="bg-gray-500 fa-brands fa-facebook text-2xl mr-5 py-1 px-2 rounded-sm"></i>
                </Link>
                <Link to="">
                  <i className="bg-gray-500 fa-brands fa-twitter text-2xl mr-5 py-1 px-2 rounded-sm"></i>
                </Link>
                <Link to="">
                  <i className="bg-gray-500 fa-brands fa-instagram text-2xl mr-5 py-1 px-3 rounded-sm"></i>
                </Link>
                <Link>
                  <i className="bg-gray-500 fa-brands fa-youtube text-2xl mr-5 py-1 px-2 rounded-sm"></i>
                </Link>
                <Link>
                <i className="bg-gray-500 fa-brands fa-whatsapp text-2xl mr-5 py-1 px-2 rounded-sm"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div  className="text-center pt-20 pb-8">
        <h2 className="font-bold text-2xl pb-6 text-red-600">
          Inside Software Suppliers
        </h2>
      </div>

      {/* features using array.map */}
       <div className="w-full py-14 bg-gray-50">
        <div className="max-w-7xl grid mx-auto lg:grid-cols-3 gap-9 relative p-5">
          {selectedImages.map((img,index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden relative">
              <div>
                <img src={img} alt={`image ${index + 4}`} className="w-full object-cover" style={{height:'465px'}}/>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 p-6">
                <h2 className="text-lg font-semibold text-white">
                  {index==0? "Software Development Services" : index==1? "UI/UX Design" : "DevOps and Infrastructure Management"}
                </h2>
                <p className="mt-2 text-white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, hic aut.
                </p>
                <a href="#" className="inline-block mt-4 text-white font-medium">
                  Learn More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
       </div>

      <Modal/>

      <section className="pt-2 pb-4">
        <h2 className="font-bold text-2xl text-red-600 text-center">
          Offering you the best digital technology Services
        </h2>
        <h2 className="font-bold text-2xl text-red-600 text-center">
          Empower and Unlock business values with innovation
        </h2>
      </section>

      {/* Who We Are */}
      <section id="who we are" className="pt-20 pb-10 p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative overflow-hidden rounded-lg">
        <iframe
        className="w-full h-64 md:h-80 lg:h-96 sm:px-3"
        src="https://www.youtube.com/embed/xNRJwmlRBNU?si=fN_tu7VlEEEKyMuG"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
       </iframe>
       </div>

    <div className="bg-gray-300 p-6 rounded-lg flex flex-col justify-between sm:px-3">
      <div>
        <h2 className="text-black text-2xl font-bold mb-1">Who We Are</h2>
        <p className="text-black text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quo ex quibusdam iusto eaque incidunt error! Ipsum, cupiditate. Non mollitia voluptate quos architecto eligendi culpa exercitationem odio repellendus natus eius recusandae eaque quasi, delectus doloribus adipis.
        </p>
        <h2 className="text-black text-2xl font-bold mb-1 mt-2">Our Mission</h2>
        <p className="text-black text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem voluptate itaque officia aperiam dolore ratione! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, eaque, orem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo dicta est tenetur, totam rerum.
        </p>
      </div>
      <a href="#" className="mt-6 inline-block bg-red-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold hover:bg-red-800 transition-colors">
        Drop us a message &rarr;
      </a>
    </div>
  </div>
</section>

      {/* Package Section */}
      <section className="pt-20 pb-16 ">
        <h2 className="font-bold text-2xl text-red-500 text-center">
          Transform the way your business works with
        </h2>
        <h2 className="font-bold text-2xl text-red-500 text-center">
          world-class software solutions
        </h2>
      </section>

      <div id="packages" className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 p-5 pb-28">
        {ServiceImages.map((service,index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={service.img} alt={service.title} className="w-full h-40 object-cover"/>
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800">{service.title}</h2>
              <p className="mt-2 text-black">{service.description}</p>
              <a href="#" className="block mt-4 text-red-500 hover:text-red-700 font-medium">
                READ MORE &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
      

     {/* Contact */}
     <div id="contact" className="w-full flex flex-col lg:flex-row gap-8 lg:gap-10 bg-gray-50 py-10 px-4 md:px-12 lg:py-14">
       <div className="lg:w-1/2 flex justify-center lg:justify-start">
        <img src={image7} alt="Contact Illustration" className="w-full max-w-md h-72 md:h-80 lg:h-96 object-cover rounded-lg ms-12" />
       </div>
  
     <div className="lg:w-1/2 pe-2">
       <h2 className="font-bold text-2xl md:text-3xl pb-4 text-center lg:text-left">Contact Us!</h2>
       <form className="space-y-4">
     <div>
        <input
          type="text"
          placeholder="Enter your name"
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="text"
          placeholder="Enter your email"
          className="border rounded p-2 w-full mb-2"
        />
      </div>
      
      <textarea
        rows="6"
        placeholder="Message"
        className="border rounded w-full p-2 resize-none"
      ></textarea>
      
      <div className="flex justify-center lg:justify-end">
        <button className="bg-gray-500 px-6 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition duration-200">
          Submit
        </button>
      </div>
    </form>
  </div>
</div>




    <Footer />
    </>
  );
};
export default Home;

