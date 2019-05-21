import * as React from 'react';

export interface ImgWithFallbackProps {
  alt?: string;
  originalSrc?: string;
  baseUrl: string;
  hash: string;
  recommendedSizes: LooseObject;
  originalData: LooseObject;
  className: string;
}

export interface ImgWithFallbackState {
  loading: boolean;
  error: boolean;
}

class ImgWithFallback extends React.Component<ImgWithFallbackProps, ImgWithFallbackState> {
  constructor(props: ImgWithFallbackProps) {
    super(props);

    this.state = {
      loading: true,
      error: false
    };

    this.createVariantIfDoesNotExist = this.createVariantIfDoesNotExist.bind(this);
    this.getSizedUrl = this.getSizedUrl.bind(this);
  }

  createVariantIfDoesNotExist = () => {
    if (this.props.recommendedSizes) {
      fetch(`${process.env.REACT_APP_MEDIA_LIBRARY_SERVER}/createDimension`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.props.originalData.id,
          width: parseInt(this.props.recommendedSizes.width, 10),
          height: parseInt(this.props.recommendedSizes.height, 10),
        }),
      })
        .then(response => {
          // this.getSizedUrl();
        })
        .catch(() => {
          console.error('There was an error creating variant');
        });
    }
  }

  getSizedUrl = props => {
    let sizes = props.recommendedSizes;

    if (sizes && sizes.width && sizes.height) {
      let filename = props.originalData.filename.split('.');
      filename[0] = filename[0] + '_' + sizes.width + '_' + sizes.height;
      filename = filename.join('.');

      return props.baseUrl + props.originalData.category + props.hash + '_' + filename;
    }

    return props.originalSrc;
  }

  handleError = () => {
    this.createVariantIfDoesNotExist();
  }

  public render() {
    const { alt } = this.props;
    const props = this.props;
    const error = this.state.error;

    return (
      <div
        className={'mediaRatio'}
        style={{
          paddingTop: `${(parseInt(props.recommendedSizes ? props.recommendedSizes.height : 1, 10) /
            parseInt(props.recommendedSizes ? props.recommendedSizes.width : 1, 10)) *
            100}%`,
        }}
      >
        <img
          alt={alt}
          className={'mediaImage inner'}
          src={error ? props.originalSrc : this.getSizedUrl(props)}
          onError={() => {
            this.createVariantIfDoesNotExist();
            this.setState({ error: true });
          }}
          onContextMenu={() => {
            this.createVariantIfDoesNotExist();
          }}
        />
      </div>
    );
  }
}

export default ImgWithFallback;
