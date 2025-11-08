import { Wrench, Zap, Hammer, Paintbrush, ArrowRight } from 'lucide-react';

const iconMap = {
    Wrench,
    Zap,
    Hammer,
    PaintBrush,
};

type ServiceCardProps = {
    title: string;
    icon: keyof typeof iconMap;
    imageUrl: string;
};

export default function ServiceCard({ title, icon, imageUrl }: ServiceCardProps) {
    const IconComponent = iconMap[icon];

    return (
        <div className='bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group'>
            <div className='relative h-48'>
                <img src={imageUrl} alt={title} className='w-full h-full object-cover' />
                <div className='absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300'></div>
                <div className='absolute top-4 left-4 bg-blue-600 text-white p-3 rounded-full'>
                    {IconComponent && <IconComponent className='h-6 w-6' />}
                </div>
            </div>
            <div className='p-6'>
                <h3 className='text-2xl font-bold mb-2'>{title}</h3>
                <a href='/services' className='text-blue-600 font-semibold inline-flex items-center group-hover:underline'>
                    Learn More <ArrowRight className='ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform' />
                </a>
            </div>
        </div>
    );
}