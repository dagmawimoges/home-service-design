import ReviewCard from '../components/ReviewCard';

const reviews = [
  {
    quote: 'Fundi Services renovated our kitchen and the result is breathtaking! The team was professional, punctual, and the craftsmanship is top-notch. Highly recommended!',
    author: 'Amina Yusuf',
    location: 'Nairobi, Kenya',
    avatarUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/770f19c5-7960-4c42-9efb-89130c402cf8/customer-avatar-1-hqheakk-1762600617598.webp'
  },
  {
    quote: 'I had an electrical emergency and their 24/7 service was a lifesaver. The electrician arrived quickly and resolved the issue efficiently. Very impressed!',
    author: 'David Ochieng',
    location: 'Mombasa, Kenya',
    avatarUrl: '/placeholder-avatar.png' // Placeholder
  },
    {
    quote: 'The painters did an amazing job on our new office space. The attention to detail was incredible. Will definitely use their services again for future projects.',
    author: 'Fatima Ibrahim',
    location: 'Kigali, Rwanda',
    avatarUrl: '/placeholder-avatar.png' // Placeholder
  }
];

export default function Reviews() {
  return (
    <div className='bg-gray-50
'>
      <div className='container mx-auto px-4 py-16
'>
        <h1 className='text-4xl font-bold text-center mb-12'>Customer Testimonials</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
'>
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
}