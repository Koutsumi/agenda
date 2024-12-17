import { LucideIcon } from 'lucide-react';
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  studio?: string
}

const Card: React.FC<CardProps> = ({ title, description, icon: Icon, studio }) => {
  return (
    <div className="border border-red-500 p-6 rounded-lg shadow-md bg-white">
      <div className="flex items-center justify-center w-12 h-12  text-red-500 rounded-full mb-4">
        <Icon/>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      {
        studio && (
          <p className='text-secondary mt-2'>- {studio}</p>
        )
      }
    </div>
  );
};

export default Card;
