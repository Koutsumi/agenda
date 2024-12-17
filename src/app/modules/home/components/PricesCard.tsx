import CheckIcon from '@/app/shared/icons/CheckIcon';
import React from 'react';

interface CardProps {
  title: string;
  price: string;
  items: Array<string>;
}

const PriceCard: React.FC<CardProps> = ({ title, items, price}) => {
  return (
    <div className="w-[90%] flex flex-col items-start justify-center border border-red-500 p-6 rounded-lg shadow-md bg-white">
      <div className="flex flex-col items-start justify-center  text-red-500 rounded-full mb-4">
            <h3 className='text-[1.3em] text-primary'>{title}</h3>
            <p className='text-[1.5em] text-secondary font-bold my-3'>R${price}/mês</p>
            <ul className='text-primary'>
                {
                    items.map(item => (
                        <li className='my-1 flex flex-row items-center justify-start gap-2'><span className='text-secondary'><CheckIcon/></span>{item}</li>
                    ))
                }
            </ul>
            
      </div>
      <button className='w-full bg-primary text-white py-1 rounded-lg'>Escolher plano</button>
    </div>
  );
};

export default PriceCard;
