/* tslint:disable */
import * as React from 'react';

interface ISvgIconProps {
  name?: string;
  type?: string;
}

const SvgIcon: React.SFC<ISvgIconProps> = props => {
  const { type } = props;

  switch (props.name) {
    case 'fb':
      return (
        <svg viewBox="0 0 512 512" {...props} className={`svgIcon fbIcon ${'svgIcon--' +type}`}>
          <path d="M0,0v455.73h242.704V279.691h-59.33v-71.864h59.33v-60.353c0-43.893,35.582-79.475,79.475-79.475h62.025v64.622h-44.382  c-13.947,0-25.254,11.307-25.254,25.254v49.953h68.521l-9.47,71.864h-59.051V455.73H455.73V0H0z" />
        </svg>
      );

    case 'close': {
      return (
        <svg viewBox="0 0 50 50" className={`svgIcon closeIcon ${'svgIcon--' +type}`}>
          <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" />
        </svg>
      );
    }

    case 'arrow': {
      return (
        <svg viewBox="0 0 100 100" className={`svgIcon arrowIcon ${'svgIcon--' +type}`}>
          <path d="M32.7,15.9c1.4-1.4,3.6-1.4,5,0c1.4,1.4,1.4,3.6,0,5L12.1,46.4h84.4c2,0,3.6,1.6,3.6,3.5s-1.6,3.6-3.6,3.6H12.1l25.6,25.5  c1.4,1.4,1.4,3.7,0,5c-1.4,1.4-3.6,1.4-5,0L1,52.5c-1.4-1.4-1.4-3.6,0-5L32.7,15.9z" />
        </svg>
      );
    }

    case 'search': {
      return (
        <svg viewBox="0 0 250.313 250.313" className={`svgIcon searchIcon ${'svgIcon--' +type}`}>
          <path d="M244.186 214.604l-54.379-54.378c-.289-.289-.628-.491-.93-.76 10.7-16.231 16.945-35.66 16.945-56.554C205.822 46.075 159.747 0 102.911 0S0 46.075 0 102.911c0 56.835 46.074 102.911 102.91 102.911 20.895 0 40.323-6.245 56.554-16.945.269.301.47.64.759.929l54.38 54.38c8.169 8.168 21.413 8.168 29.583 0 8.168-8.169 8.168-21.413 0-29.582zm-141.275-44.458c-37.134 0-67.236-30.102-67.236-67.235 0-37.134 30.103-67.236 67.236-67.236 37.132 0 67.235 30.103 67.235 67.236s-30.103 67.235-67.235 67.235z" />
        </svg>
      );
    }

    case 'star': {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 126.7 120.4"
          className={`svgIcon starIcon ${'svgIcon--' +type}`}
        >
          <path d="M121.2 41l-34.9-3.3c-2.2-.2-4.1-1.6-5-3.7L68.8 3.8c-2-5-9.1-5-11.1 0L45.3 34c-.8 2.1-2.8 3.5-5 3.7L5.4 41c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.4c-1.2 5.1 4.3 9.3 8.9 6.6l29.1-17.1c1.9-1.1 4.2-1.1 6.1 0l29.1 17.1c4.6 2.7 10.1-1.4 8.9-6.6l-7.8-32.4c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5" />
        </svg>
      );
    }

    case 'download': {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 489.701 489.701"
          className={`svgIcon downloadIcon ${'downloadIcon--' +type}`}
        >
          <path d="M244.9 0c-9.5 0-17.1 7.7-17.1 17.2v312.3l-77.6-77.6c-6.7-6.7-17.6-6.7-24.3 0-6.7 6.7-6.7 17.6 0 24.3l106.9 106.9c3.2 3.2 7.6 5 12.1 5 4.6 0 8.9-1.8 12.1-5l106.9-107c6.7-6.7 6.7-17.6 0-24.3s-17.6-6.7-24.3 0L262 329.4V17.2c.1-9.5-7.6-17.2-17.1-17.2zm210.9 472.6c0-9.5-7.7-17.2-17.2-17.2H51.1c-9.5 0-17.2 7.7-17.2 17.2s7.7 17.1 17.2 17.1h387.6c9.501.1 17.1-7.6 17.1-17.1z" />
        </svg>
      );
    }

    case 'geo': {
      return (
        <svg
          viewBox="0 0 32.2 42.6"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className={'svgIcon geoIcon'}
        >
          <defs>
            <path
              id="l"
              d="M1.7 16.1c0-8 6.5-14.4 14.4-14.4 8 0 14.4 6.5 14.4 14.4 0 7.1-11.6 21-14.4 24.3-2.8-3.3-14.4-17.2-14.4-24.3m-1.7 0c0 8.7 14.9 25.4 15.5 26.1.3.3.8.4 1.2.1l.1-.1c.6-.7 15.5-17.5 15.5-26.1C32.2 7.2 25 0 16.1 0 7.2 0 0 7.2 0 16.1"
            />
          </defs>
          <clipPath id="k">
            <use overflow="visible" xlinkHref="#l" />
          </clipPath>
          <linearGradient
            id="j"
            x2={1}
            y1="42.615"
            y2="42.615"
            gradientTransform="translate(.16 -1327.1) scale(31.642)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2376bc" offset={0} />
            <stop stopColor="#00adcf" offset={1} />
          </linearGradient>
          <path d="M0 0h32.2v42.6H0z" clipPath="url(#k)" fill="url(#j)" />
          <defs>
            <path
              id="i"
              d="m9.3 16.8c0-3.9 3.2-7.1 7.1-7.1s7.1 3.2 7.1 7.1-3.2 7.1-7.1 7.1-7.1-3.2-7.1-7.1m-1.6 0c0 4.8 3.9 8.7 8.7 8.7s8.7-3.9 8.7-8.7-3.9-8.7-8.7-8.7-8.7 3.9-8.7 8.7"
            />
          </defs>
          <clipPath id="h">
            <use overflow="visible" xlinkHref="#i" />
          </clipPath>
          <linearGradient
            id="g"
            x2={1}
            y1="42.615"
            y2="42.615"
            gradientTransform="translate(.16 -1331.6) scale(31.642)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2376bc" offset={0} />
            <stop stopColor="#00adcf" offset={1} />
          </linearGradient>
          <path d="M7.7 8.1h17.5v17.5H7.7z" clipPath="url(#h)" fill="url(#g)" />
        </svg>
      );
    }

    default:
      return <div>THERE WAS ERROR RENDERING SVG Icon</div>;
  }
};

export default SvgIcon;
