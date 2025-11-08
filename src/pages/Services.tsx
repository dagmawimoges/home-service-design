export default function Services() {
  return (
    <div className='container mx-auto px-4 py-16'>
      <h1 className='text-4xl font-bold text-center mb-12'>Our Services</h1>
      <p className='text-center text-lg text-gray-600 max-w-3xl mx-auto'>
        This is a placeholder for the services page. Here, we will detail each service category with comprehensive information, including what's included, pricing packages, and FAQs.
      </p>
      <div className='mt-12 text-center'>
        <div className='p-8 border rounded-lg bg-gray-50'>
          <h2 className='text-2xl font-semibold'>Cost Estimator Mockup</h2>
          <p className='mt-2 text-gray-600'>An interactive cost estimator will be placed here to help clients get a preliminary quote.</p>
        </div>
        <div className='p-8 mt-8 border rounded-lg bg-gray-50'>
            <h2 className='text-2xl font-semibold'>Warranty Information</h2>
            <p className='mt-2 text-gray-600'>A dedicated section outlining our service warranty will be available here.</p>
        </div>
      </div>
    </div>
  );
}