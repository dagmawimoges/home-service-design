import { Users, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className='container mx-auto px-4 py-16
'>
      <div className='text-center max-w-3xl mx-auto
'>
        <h1 className='text-5xl font-extrabold mb-4'>About Fundi Services</h1>
        <p className='text-xl text-gray-600
'>Your trusted partner in creating better homes. We are a team of passionate, skilled professionals dedicated to providing top-quality home improvement and maintenance services across East Africa.</p>
      </div>

      <div className='grid md:grid-cols-3 gap-12 my-20 text-center
'>
        <div className='border p-8 rounded-lg shadow-sm
'>
            <Target className='h-12 w-12 mx-auto text-blue-600 mb-4'/>
            <h2 className='text-2xl font-bold mb-2'>Our Mission</h2>
            <p className='text-gray-600
'>To deliver reliable, high-quality, and affordable home services, ensuring customer satisfaction through professionalism and exceptional craftsmanship.</p>
        </div>
        <div className='border p-8 rounded-lg shadow-sm
'>
            <Users className='h-12 w-12 mx-auto text-blue-600 mb-4'/>
            <h2 className='text-2xl font-bold mb-2'>Our Team</h2>
            <p className='text-gray-600
'>A dedicated crew of certified and experienced plumbers, electricians, carpenters, and painters who take pride in their work.</p>
        </div>
        <div className='border p-8 rounded-lg shadow-sm
'>
            <ShieldCheck className='h-12 w-12 mx-auto text-blue-600 mb-4'/>
            <h2 className='text-2xl font-bold mb-2'>Our Guarantee</h2>
            <p className='text-gray-600
'>We stand by the quality of our work with a comprehensive warranty and a commitment to safety and excellence on every project.</p>
        </div>
      </div>

       <div className='bg-gray-50 p-12 rounded-lg
'>
         <h2 className='text-3xl font-bold text-center mb-8'>Meet Our Leadership</h2>
          <p className='text-center text-lg text-gray-600 max-w-3xl mx-auto
'>
            This section will feature photos and bios of the company leadership to build trust and add a personal touch.
          </p>
       </div>

    </div>
  );
}