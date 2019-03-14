import * as React from 'react';
import ImgWithFallback from './components/ImgWithFallback';

export interface MediaProps {
  type: string;
  // tslint:disable:no-any
  data: any;
  class?: string;
}

export interface MediaState {}

class Media extends React.Component<MediaProps, MediaState> {
  constructor(props: MediaProps) {
    super(props);
  }

  renderAsImage = data => {
    const baseUrl = 'http://foxer360-media-library.s3.eu-central-1.amazonaws.com/';

    if (data && data.filename) {
      let recommendedSizes = (data && data.recommendedSizes) || null;
      let originalUrl = baseUrl + data.category + data.hash + '_' + data.filename;

      return (
        <ImgWithFallback
          originalSrc={originalUrl}
          alt={data.alt || ''}
          baseUrl={baseUrl}
          recommendedSizes={recommendedSizes}
          originalData={data}
          hash={data.hash}
          class={this.props.class}
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
        className={`mediaRatio mediaRatio--video ${this.props.class}`}
        style={{
          paddingTop: `${(parseInt(data.recommendedSizes ? data.recommendedSizes.height : 9, 10) /
            parseInt(data.recommendedSizes ? data.recommendedSizes.width : 16, 10)) *
            100}%`,
        }}
      >
        <iframe className="mediaEmbeddedVideo inner" src={embedUrl} allowFullScreen={true} frameBorder="0" />
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
      default:
        return this.renderAsImage(data);

      // default:
      //   return <div className={'mediaError'}>There was an error rendering media.</div>;
    }
  }
}

export default Media;