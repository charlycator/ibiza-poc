import { FC } from 'react';

interface IProps {
    white?: boolean,
    size?: number,
}

const BitcoinIcon: FC<IProps> = ({
    white = true,
    size = 20
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M10 8H14C15.1046 8 16 8.89543 16 10C16 11.1046 15.1046 12 14 12M10 8V12M10 8H8.5M10 8V6.5M14 12H10M14 12C15.1046 12 16 12.8954 16 14C16 15.1046 15.1046 16 14 16H10M10 12V16M10 16H8.5M10 16V17.5M13 8V6.5M13 17.5V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke={`#${white ? 'ffffff' : 'ff8900'}`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" />
    </svg>
);

export default BitcoinIcon;