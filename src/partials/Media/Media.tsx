import * as React from 'react';
import ImgWithFallback from './components/ImgWithFallback/';

export interface MediaProps {
  type: string;
  width?: string;
  height?: string;
  // tslint:disable:no-any
  data: any;
  className?: any;
}

export interface MediaState {}

const baseUrl = 'https://foxer360-media-library.s3.eu-central-1.amazonaws.com/';

class Media extends React.Component<MediaProps, MediaState> {
  constructor(props: MediaProps) {
    super(props);
  }

  setDimensions = (recommendedSizes: any) => {
    const { width, height } = this.props;
    if (width && height) {
      return {
        width,
        height
      };
    }

    return recommendedSizes;
  }

  renderAsImage = data => {
    if (data && data.filename) {
      let recommendedSizes = (data && data.recommendedSizes) || null;
      let originalUrl = baseUrl + data.category + data.hash + '_' + data.filename;
      recommendedSizes = this.setDimensions(recommendedSizes);
      return (
        <ImgWithFallback
          originalSrc={originalUrl}
          alt={data.alt || ''}
          baseUrl={baseUrl}
          recommendedSizes={recommendedSizes}
          originalData={data}
          hash={data.hash}
          className={this.props.className}
        />
      );
    } else {
      return null;
    }
  }

  renderAsVideoEmbed(data: any) {
    let embedUrl = data.url;

    return (
      <div
        className={`mediaRatio mediaRatio--video ${this.props.className}`}
        style={{
          paddingTop: `${(parseInt(data.recommendedSizes ? data.recommendedSizes.height : 9, 10) /
            parseInt(data.recommendedSizes ? data.recommendedSizes.width : 16, 10)) *
            100}%`
        }}
      >
        <iframe className="mediaEmbeddedVideo inner" src={embedUrl} allowFullScreen={true} frameBorder="0" />
      </div>
    );
  }

  renderAsFile(data: any) {
    let originalUrl = baseUrl + data.category + data.hash + '_' + data.filename;

    return (
      <div className={'fileDownload__holder'}>
        <a className={'roundButton roundButton--red'} href={originalUrl}>
          File
        </a>
      </div>
    );
  }

  render() {
    const { data } = this.props;

    switch (data && data.type) {
      case 'image':
        return this.renderAsImage(data);
      case 'embeddedVideo':
        return this.renderAsVideoEmbed(data);
      case 'file':
        return this.renderAsFile(data);
      default:
        return this.renderAsImage(data);

      // default:
      //   return <div className={'mediaError'}>There was an error rendering media.</div>;
    }
  }
}

export default Media;
