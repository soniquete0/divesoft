import * as React from 'react';
import Lightbox from 'react-images';
import Responsive from 'react-responsive';

import List from '../List';
import Media from '../../partials/Media';
import getImageUrl from '../../helpers/getImageUrl';

interface Image {
  image: LooseObject;
}

export interface GalleryAndVideoProps {
  data: {
    title: string;
    video: LooseObject;
    images: Image[];
  };
}

export interface GalleryAndVideoState {
  showMore: boolean;
  currentImage: number;
  numberOfPage: number;
  lightboxIsOpen: boolean;
  imageUrls: Array<string>;
}

class GalleryAndVideo extends React.Component<GalleryAndVideoProps, GalleryAndVideoState> {
  constructor(props: GalleryAndVideoProps) {
    super(props);

    this.state = {
      currentImage: 0,
      numberOfPage: 1,
      showMore: false,
      lightboxIsOpen: false,
      imageUrls: this.getImageUrls()
    };
  }

  renderGallery = (data: any) => {
    if (!data) { return; }

    const gallery = data.map((item, i) => {
      return (
        <div
          key={i}
          className={`galleryAndVideo__content__image col-3`}
          onClick={(e) => this.openLightbox(i, e)}
        >
          <Media data={item.image} type={'image'} width={'275'} height={'240'}/>
        </div>
      );
    });

    return <div className="row">{gallery}</div>;
  }

  getImageUrls = () => {
    const { images } = this.props.data;
    if (!images) { return; }

    let result = [];

    images.map((item, i) => {
      result[i] = {
        src: getImageUrl(item.image)
      };
    });

    return result;
  }

  openLightbox = (index: number, event: any) => {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }

  gotoPrevious = () => this.setState({ currentImage: this.state.currentImage - 1 });

  gotoNext = () => this.setState({ currentImage: this.state.currentImage + 1 });

  gotoImage = (index: number) => this.setState({ currentImage: index });

  handleClickImage = () => {
    if (this.state.currentImage === this.state.imageUrls.length - 1) { return; }

    this.gotoNext();
  }

  public render() {
    const { title, video, images } = this.props.data;
    const Mobile = props => <Responsive {...props} maxWidth={1199} />;

    return (
      <List data={images}>
        {({ getPage }) => {
          const { items, lastPage } = getPage(this.state.numberOfPage, 'infinite', 4);

          return (
            <div className={'galleryAndVideo'}>
              <div className="container">
                {title && <h2>{title}</h2>}
                <Lightbox
                  images={this.state.imageUrls}
                  isOpen={this.state.lightboxIsOpen}
                  currentImage={this.state.currentImage}
                  onClickPrev={this.gotoPrevious}
                  onClickNext={this.gotoNext}
                  onClose={this.closeLightbox}
                />

                <div className={'row galleryAndVideo__content'}>
                  <div className="col-md-12">
                    {video && <Media type={'embeddedVideo'} data={video} />}
                  </div>
                  <div className="col-md-12">
                    {this.renderGallery(items)}
                  </div>
                </div>

                <Mobile>
                  {this.state.numberOfPage < lastPage &&
                    <button
                      className={'btn'}
                      onClick={() => this.setState({
                        numberOfPage: this.state.numberOfPage + 1
                      })}
                    >
                      Show more
                    </button>
                  }
                </Mobile>
              </div>
            </div>
          );
        }}
      </List>
    );
  }
}

export default GalleryAndVideo;
