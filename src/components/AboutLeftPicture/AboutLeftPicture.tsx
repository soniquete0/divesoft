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

  const slugifyHeadline = (el: string) => {
    const a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;'
    const b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')

    return el.toString().toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
  };

  return (
    <div
      className={'aboutLeftPicture'}
      id={`${slugifyHeadline(title)}`}
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
