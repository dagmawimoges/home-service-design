const galleryItems = [
  {
    before: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/770f19c5-7960-4c42-9efb-89130c402cf8/gallery-before-1-hqheakk-1762600617598.webp',
    after: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/770f19c5-7960-4c42-9efb-89130c402cf8/gallery-after-1-vmufvcm-1762600624808.webp',
    title: 'Kitchen Renovation',
    description: 'From outdated and dark to modern and bright, this kitchen was completely transformed.'
  },
  {
    before: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/770f19c5-7960-4c42-9efb-89130c402cf8/gallery-before-2-j9h3eav-1762600633984.webp',
    after: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/770f19c5-7960-4c42-9efb-89130c402cf8/gallery-after-2-s06ph6v-1762600643557.webp',
    title: 'Bathroom Remodeling',
    description: 'A cramped bathroom turned into a spacious, spa-like retreat.'
  }
];

export default function Gallery() {
  return (
    <div className='container mx-auto px-4 py-16
'>
      <h1 className='text-4xl font-bold text-center mb-12'>Our Work</h1>
      <div className='grid grid-cols-1 md:grid-cols-1 gap-12
'>
        {galleryItems.map((item, index) => (
          <div key={index} className='bg-white rounded-lg shadow-xl overflow-hidden
'>
            <div className='p-6
'>
              <h2 className='text-3xl font-bold mb-2'>{item.title}</h2>
              <p className='text-gray-600 mb-6'>{item.description}</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-gray-50
'>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-center text-gray-700
'>Before</h3>
                <img src={item.before} alt='Before' className='w-full h-auto object-cover rounded-lg shadow-md
' />
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-center text-gray-700
'>After</h3>
                <img src={item.after} alt='After' className='w-full h-auto object-cover rounded-lg shadow-md
' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}