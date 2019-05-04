import * as React from 'react';
import getImageUrl from '@source/helpers/getImageUrl';

export interface ImgWithFallbackProps {
  alt?: string;
  originalSrc?: string;
  baseUrl: string;
  class?: string;
  hash: string;
  recommendedSizes: LooseObject;
  originalData: LooseObject;
}

export interface ImgWithFallbackState {
  src: string;
  loading: boolean;
}

class ImgWithFallback extends React.Component<ImgWithFallbackProps, ImgWithFallbackState> {
  constructor(props: ImgWithFallbackProps) {
    super(props);

    this.state = {
      src: null,
      loading: true,
    };
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
          console.log('There was an error creating variant');
        });
    }
  }

  getSizedUrl = props => {
    let sizedUrl = null;
    let sizes = props.recommendedSizes;
    let sizedFile = null;

    this.setState({
      loading: true,
    });

    if (sizes && sizes.width && sizes.height) {
      let filename = props.originalData.filename.split('.');
      filename[0] = filename[0] + '_' + sizes.width + '_' + sizes.height;
      filename = filename.join('.');

      sizedUrl = props.baseUrl + props.originalData.category + props.hash + '_' + filename;

      this.setState({
        src: sizedUrl,
      });
    } else {
      this.setState({
        src: props.originalSrc,
      });
    }
  }

  loadImg(src: any) {
    if (src) {
      const img = new Image();

      img.src = src;

      img.onload = () => {
        this.setState({
          loading: false,
        });
      };

      img.onerror = err => {
        this.handleError();
      };
    }
  }

  componentDidMount() {
    this.getSizedUrl(this.props);
  }

  componentWillUpdate(nextProps: ImgWithFallbackProps, nextState: ImgWithFallbackState) {
    if (this.state.src !== nextState.src) {
      this.loadImg(nextState.src);
    }
    if (nextProps.originalSrc !== this.props.originalSrc) {
      this.getSizedUrl(nextProps);
    }
  }

  handleError = () => {
    this.createVariantIfDoesNotExist();

    this.setState({
      loading: true,     
      src: this.props.originalSrc,    
    });
  }

  public render() {  
    const { alt } = this.props;

    if (this.state.loading) {
      return <div className={'mediaImageLoader'} />;
    } else {
      return (
        <div
          className={`mediaRatio ${this.props.class}`}
          style={{
            paddingTop: `${(parseInt(this.props.recommendedSizes ? this.props.recommendedSizes.height : 1, 10) /
              parseInt(this.props.recommendedSizes ? this.props.recommendedSizes.width : 1, 10)) *
              100}%`,
          }}
        >
          <img 
            alt={alt}
            className={'mediaImage inner'}
            src={this.state.src ? this.state.src : getImageUrl(this.props.originalData)}
          />
        </div>
      );
    }
  }
}

export default ImgWithFallback;