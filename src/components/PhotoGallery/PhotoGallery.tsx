import React from 'react';
import Lightbox from 'react-images';

import List from '../List';
import Media from '@source/partials/Media';
import getImageUrl from '@source/helpers/getImageUrl';

export interface PhotoGalleryState {
  showMore: boolean;
  currentImage: number;
  numberOfPage: number;
  lightboxIsOpen: boolean;
  imageUrls: Array<string>;
}

interface Image {
  img: LooseObject;
}

export interface PhotoGalleryProps {
  data: {
    title: string;
    description: string;
    divider: boolean;
    images: Image[];
  };
}

class PhotoGallery extends React.Component<PhotoGalleryProps, PhotoGalleryState> {
  constructor(props: PhotoGalleryProps) {
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
          className={`photoGallery__img col-6 col-md-3`}
          onClick={(e) => this.openLightbox(i, e)}
        >
          <Media data={item.img} type={'image'} />
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
        src: getImageUrl(item.img)
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

  public render () {
    const { title, description, divider, images } = this.props.data;
    
    return (
      <List data={images}>
        {({ getPage }) => {
          const { items, lastPage } = getPage(this.state.numberOfPage, 'infinite', 8);
          
          return (
            <div className="photoGallery">
              <div className={'container'}>
                {title && <h2>{title}</h2>}
                {description && <h4>{description}</h4>}
  
                <Lightbox
                  images={this.state.imageUrls}
                  isOpen={this.state.lightboxIsOpen}
                  currentImage={this.state.currentImage}
                  onClickPrev={this.gotoPrevious}
                  onClickNext={this.gotoNext}
                  onClose={this.closeLightbox}
                />
  
                {this.renderGallery(items)}
  
                {this.state.numberOfPage < lastPage &&
                  <button 
                    className={'btn'} 
                    onClick={() => this.setState({ numberOfPage: this.state.numberOfPage + 1 })}
                  >Show more
                  </button>}
  
                {divider && <div className={'photoGallery__divider'} />}
              </div>
            </div>
          );
        }}
      </List>
    );
  }
}

export default PhotoGallery;