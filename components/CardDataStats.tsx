import React, { ReactNode } from 'react';
import Link from "next/link";


interface CardDataStatsProps {
  actionButtonText?: string,
  title: string;
  total: string;
  rate?: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children?: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  actionButtonText,
  title,
  total,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <h2 className=" w-full h-11.5 items-center rounded-full" style={{ fontSize: '1.65rem' }}>
        {total} {title}
      </h2>
      {children}
      <div className='flex flex-row justify-between'>
        <span
          className={`flex items-center gap-1 text-sm font-medium ${levelUp && 'text-meta-3'
            } ${levelDown && 'text-meta-5'} `}
        >
          {rate}

          {levelUp && (
            <svg
              className="fill-meta-3"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                fill=""
              />
            </svg>
          )}
          {levelDown && (
            <svg
              className="fill-meta-5"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
                fill=""
              />
            </svg>
          )}
        </span>
        {actionButtonText && (
          <Link
            href="#"
            className="inline-flex items-center justify-center bg-meta-4 dark:bg-black dark:text-white py-2 px-5 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            {actionButtonText}
          </Link>
        )}
      </div>




    </div>
  );
};

export default CardDataStats;
