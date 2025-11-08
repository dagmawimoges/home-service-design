import { ArrowRight, Phone } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import ReviewCard from '../components/ReviewCard';

const services = [
    { title: 'Plumbing', icon: 'Wrench', imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/770f19c5-7960-4c42-9efb-89130c402cf8/service-plumbing-xxbpiu5-1762600582728.webp' },
    { title: 'Electrical', icon: 'Zap', imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/770f19c5-7960-4c42-9efb-89130c402cf8/service-electrical-lir5mgm-1762600591406.webp' },
    { title: 'Carpentry', icon: 'Hammer', imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/770f19c5-7960-4c42-9efb-89130c402cf8/service-carpentry-0yagksk-1762600601368.webp' },
    { title: 'Painting', icon: 'Paintbrush', imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/770f19c5-7960-4c42-9efb-89130c402cf8/service-painting-7cvy6jq-1762600609232.webp' },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className='relative h-[600px] bg-cover bg-center text-white'
        style={{ backgroundImage: 'url(https://storage.googleapis.com/dala-prod-public-storage/generated-images/770f19c5-7960-4c42-9efb-89130c402cf8/hero-background-g2r9o7l-1762600573419.webp)' }}
      >
        <div className='absolute inset-0 bg-black bg-opacity-50' />
        <div className='container mx-auto px-4 h-full flex flex-col justify-center items-start relative z-10'>
          <h1 className='text-5xl md:text-7xl font-extrabold leading-tight mb-4'>
            Your Trusted Partner <br /> for Home Services
          </h1>
          <p className='text-xl md:text-2xl mb-8 max-w-2xl'>
            Professional, reliable, and high-quality solutions for all your home maintenance and improvement needs.
          </p>
          <div className='flex space-x-4'>
            <a href='/booking' className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg inline-flex items-center transition-transform transform hover:scale-105'>
              Book a Service <ArrowRight className='ml-2 h-5 w-5' />
            </a>
            <a href='/services' className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg text-lg inline-flex items-center transition-transform transform hover:scale-105'>
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Emergency Services Banner */}
      <div className='bg-red-600 text-white text-center p-4 font-semibold text-lg'>
        <div className='container mx-auto flex items-center justify-center'>
            <Phone className='mr-3 h-6 w-6'/>
            <span>For Emergency Services, Call Us 24/7: <a href='tel:+254700000000' className='underline hover:text-yellow-300'>+254 700 000 000</a></span>
        </div>
      </div>

      {/* Service Categories */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-12'>Our Services</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className='py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold mb-12'>Why Choose Fundi Services?</h2>
          <div className='grid md:grid-cols-3 gap-12 max-w-6xl mx-auto'>
             <div className='text-center'>
                <div className='flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4'><Star className='h-8 w-8'/></div>
                <h3 className='text-2xl font-semibold mb-2'>Quality Guaranteed</h3>
                <p className='text-gray-600'>We stand behind our work with a comprehensive warranty on all services provided.</p>
            </div>
             <div className='text-center'>
                <div className='flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4'><Users className='h-8 w-8'/></div>
                <h3 className='text-2xl font-semibold mb-2'>Experienced Team</h3>
                <p className='text-gray-600'>Our technicians are certified, insured, and have years of professional experience.</p>
            </div>
             <div className='text-center'>
                <div className='flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4'><Calendar className='h-8 w-8'/></div>
                <h3 className='text-2xl font-semibold mb-2'>Easy Scheduling</h3>
                <p className='text-gray-600'>Book your service online in minutes with our simple and convenient scheduling system.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Customer Reviews */}
       <section className='py-20 bg-blue-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-12'>What Our Clients Say</h2>
            <div className='max-w-4xl mx-auto grid md:grid-cols-1 gap-8'>
                <ReviewCard 
                    quote='Fundi Services renovated our kitchen and the result is breathtaking! The team was professional, punctual, and the craftsmanship is top-notch. Highly recommended!'
                    author='Amina Yusuf'
                    location='Nairobi, Kenya'
                    avatarUrl='https://storage.googleapis.com/dala-prod-public-storage/generated-images/770f19c5-7960-4c42-9efb-89130c402cf8/customer-avatar-1-hqheakk-1762600617598.webp'
                />
            </div>
        </div>
      </section>
    </div>
  );
}