import { Star } from 'lucide-react';

type ReviewCardProps = {
    quote: string;
    author: string;
    location: string;
    avatarUrl: string;
}

export default function ReviewCard({ quote, author, location, avatarUrl }: ReviewCardProps) {
    return (
        <div className='bg-white p-8 rounded-xl shadow-lg text-center'>
            <div className='flex justify-center mb-4'>
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className='h-6 w-6 text-yellow-400 fill-current' />
                ))}
            </div>
            <p className='text-lg italic text-gray-600 mb-6'>\"{quote}\"</p>
            <div className='flex items-center justify-center'>
                <img src={avatarUrl} alt={author} className='h-12 w-12 rounded-full mr-4 object-cover' />
                <div>
                    <p className='font-bold text-lg'>{author}</p>
                    <p className='text-gray-500'>{location}</p>
                </div>
            </div>
        </div>
    )
}