import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import Media from '../../partials/Media';

export interface AboutLeftPictureProps {
  data: {
    title: string;
    subtitle: string;
    text: string;
    img: LooseObject;
    paddingTop: boolean;
  };
}

const AboutLeftPicture = (props: AboutLeftPictureProps) => {
  const { title, subtitle, text, img, paddingTop } = props.data;

  return (
    <div
      className={'aboutLeftPicture'}
      style={paddingTop ? {paddingTop: 0} : {}}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            {img && <Media type={'image'} data={img} />}
          </div>
          <div className="col-12 col-lg-6">
            <div className={'aboutLeftPicture__content'}>
              {title && <h2>{title}</h2>}
              {subtitle && <h4>{subtitle}</h4>}
              {text && <ReactMarkdown source={text} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLeftPicture;
