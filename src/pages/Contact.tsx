import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className='container mx-auto px-4 py-16
'>
      <div className='max-w-5xl mx-auto
'>
        <h1 className='text-4xl font-bold text-center mb-4'>Contact Us</h1>
        <p className='text-lg text-gray-600 text-center mb-12'>We're here to help. Reach out to us for emergencies, quotes, or any questions.</p>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-lg
'>
          <div>
            <h2 className='text-2xl font-bold mb-6'>Send a Message</h2>
            <form className='space-y-4
'>
              <input type='text' placeholder='Your Name' className='w-full p-3 border rounded-md' />
              <input type='email' placeholder='Your Email' className='w-full p-3 border rounded-md' />
              <textarea placeholder='Your Message' rows={5} className='w-full p-3 border rounded-md'></textarea>
              <button type='submit' className='w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors
'>Submit</button>
            </form>
          </div>
          <div className='space-y-6
'>
             <h2 className='text-2xl font-bold mb-6'>Contact Information</h2>
              <div className='flex items-start space-x-4
'>
                <div className='bg-blue-100 p-3 rounded-full'><MapPin className='h-6 w-6 text-blue-600'/></div>
                <div>
                  <h3 className='font-semibold'>Our Office</h3>
                  <p className='text-gray-600
'>123 Uhuru Highway, Nairobi, Kenya</p>
                </div>
              </div>
              <div className='flex items-start space-x-4
'>
                <div className='bg-blue-100 p-3 rounded-full'><Mail className='h-6 w-6 text-blue-600'/></div>
                <div>
                  <h3 className='font-semibold'>Email Us</h3>
                  <p className='text-gray-600
'>contact@fundiservices.co.ke</p>
                </div>
              </div>
              <div className='flex items-start space-x-4
'>
                 <div className='bg-blue-100 p-3 rounded-full'><Phone className='h-6 w-6 text-blue-600'/></div>
                <div>
                  <h3 className='font-semibold'>Call Us</h3>
                  <p className='text-gray-600
'>+254 700 000 000 (24/7 Emergency)</p>
                </div>
              </div>
              <div className='mt-6 h-64 bg-gray-200 rounded-lg
'>
                {/* Placeholder for Service Area Map */}
                 <div className='h-full w-full flex items-center justify-center text-gray-500
'>Service Area Map Mockup</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}