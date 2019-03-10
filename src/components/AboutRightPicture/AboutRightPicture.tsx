import React from 'react';
import ReactMarkdown from 'react-markdown';
import Media from '@source/partials/Media';

export interface AboutRightPictureProps {
  data: {
    title: string;
    subtitle: string;
    text: string;
    img: LooseObject;
  };
}

const AboutRightPicture = (props: AboutRightPictureProps) => {
  const { title, subtitle, text, img } = props.data;

  return (
    <div className={'aboutRightPicture'}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className={'aboutRightPicture__content'}>
              {title && <h2>{title}</h2>}
              {subtitle && <h4>{subtitle}</h4>}
              {text && <ReactMarkdown source={text} />}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            {img && <Media type={'image'} data={img} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRightPicture;