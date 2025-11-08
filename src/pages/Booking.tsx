import { Calendar, Clock, User, Mail, Phone, Wrench } from 'lucide-react';

export default function Booking() {
  return (
    <div className='container mx-auto px-4 py-16
'>
      <div className='max-w-4xl mx-auto
'>
        <h1 className='text-4xl font-bold text-center mb-12'>Book a Service</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-start
'>
          <div className='bg-white p-8 rounded-lg shadow-lg
'>
            <h2 className='text-2xl font-bold mb-6'>Select a Date & Time</h2>
            {/* Placeholder for Calendar View */}
            <div className='bg-gray-100 rounded-lg p-4
'>
              <div className='flex justify-between items-center mb-4
'>
                <button className='text-gray-600'>&lt;</button>
                <span className='font-semibold'>November 2025</span>
                <button className='text-gray-600'>&gt;</button>
              </div>
              <div className='grid grid-cols-7 gap-2 text-center text-sm
'>
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => <div key={day} className='font-semibold'>{day}</div>)}
                {Array.from({ length: 30 }, (_, i) => <div key={i} className={`p-2 rounded-full ${i + 1 === 15 ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}>{i + 1}</div>)}
              </div>
            </div>
            <div className='mt-6
'>
              <h3 className='text-lg font-semibold mb-4'>Available Time Slots</h3>
              <div className='grid grid-cols-3 gap-2
'>
                <button className='p-2 border rounded-md hover:bg-blue-100'>09:00 AM</button>
                <button className='p-2 border rounded-md bg-blue-600 text-white'>11:00 AM</button>
                <button className='p-2 border rounded-md hover:bg-blue-100'>02:00 PM</button>
                <button className='p-2 border rounded-md hover:bg-blue-100'>04:00 PM</button>
              </div>
            </div>
          </div>
          <div className='bg-white p-8 rounded-lg shadow-lg
'>
            <h2 className='text-2xl font-bold mb-6'>Your Details</h2>
            <form className='space-y-4
'>
              <div className='relative
'><User className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'/><input type='text' placeholder='Full Name' className='w-full pl-10 p-3 border rounded-md' /></div>
              <div className='relative
'><Mail className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'/><input type='email' placeholder='Email Address' className='w-full pl-10 p-3 border rounded-md' /></div>
              <div className='relative
'><Phone className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'/><input type='tel' placeholder='Phone Number' className='w-full pl-10 p-3 border rounded-md' /></div>
              <div className='relative
'><Wrench className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'/><select className='w-full pl-10 p-3 border rounded-md bg-white'><option>Select Service</option><option>Plumbing</option><option>Electrical</option><option>Carpentry</option><option>Painting</option></select></div>
              <button type='submit' className='w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors
'>Confirm Booking</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}