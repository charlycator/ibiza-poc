import { FC } from 'react';

interface IProps {
    white?: boolean,
    size?: number,
}

const EtherIcon: FC<IProps> = ({
    white = true,
    size = 20
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.0001 3.5C12.1742 3.5 12.3358 3.59058 12.4266 3.73912L16.6012 10.5646C16.6748 10.6849 16.6942 10.8308 16.6545 10.9661C16.6148 11.1015 16.5197 11.2138 16.3928 11.2754L12.2182 13.2991C12.0804 13.3659 11.9197 13.3659 11.782 13.2991L7.6074 11.2754C7.48045 11.2138 7.38541 11.1015 7.34571 10.9661C7.30602 10.8308 7.32536 10.6849 7.39897 10.5646L11.5735 3.73912C11.6644 3.59058 11.8259 3.5 12.0001 3.5ZM12.0001 4.95828L8.53971 10.616L12.0001 12.2935L15.4605 10.616L12.0001 4.95828Z"
            fill={`#${white ? 'ffffff' : 'ff8900'}`} />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.0001 20.0503C11.8321 20.0503 11.6753 19.966 11.5828 19.8257L7.40813 13.5003C7.28391 13.3121 7.30107 13.064 7.45001 12.8946C7.59896 12.7253 7.84283 12.6766 8.04536 12.7758L12.0001 14.7127L15.9547 12.7758C16.1572 12.6766 16.4011 12.7253 16.55 12.8946C16.699 13.064 16.7161 13.3121 16.5919 13.5003L12.4174 19.8257C12.3248 19.9659 12.1681 20.0503 12.0001 20.0503ZM12.0001 18.6426L14.7465 14.4811L12.22 15.7185C12.0812 15.7864 11.9189 15.7864 11.7801 15.7185L9.25356 14.481L12.0001 18.6426Z"
            fill={`#${white ? 'ffffff' : 'ff8900'}`} />
    </svg>
);

export default EtherIcon;