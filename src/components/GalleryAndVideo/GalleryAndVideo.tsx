import React from 'react';

import List from '../List';
import Media from '@source/partials/Media';

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
}

class GalleryAndVideo extends React.Component<GalleryAndVideoProps, GalleryAndVideoState> {
  constructor(props: GalleryAndVideoProps) {
    super(props);

    this.state = {
      showMore: false
    };
  }

  public render() {
    const { title, video, images } = this.props.data;

    return (
      <List data={images}>
        {({ data }) =>  (
          <div className={'galleryAndVideo'}>
            <div className="container">
              {title && <h2>{title}</h2>}

              <div className={'row galleryAndVideo__content'}>
                <div className="col">
                  {video && <Media type={'embeddedVideo'} data={video} />}
                </div>
                <div className="col">
                  <div className="row">
                    {data && data.length >= 2 && data.slice(0, 2).map((item, i) => (
                      <div key={i} className={'galleryAndVideo__content__img col-12 col-md-6'}>
                        <Media type={'image'} data={item.image} />
                      </div>
                    ))}
                  </div>
                  <div className="row">
                    {data && data.length >= 4 && data.slice(2, 4).map((item, i) => (
                      <div key={i} className={'galleryAndVideo__content__img col-12 col-md-6'}>
                        <Media type={'image'} data={item.image} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {this.state.showMore && 
                <div className="row" style={{ marginTop: 15 }}>
                  {data.slice(4, data.length - 1).map((item, i) => (
                    <div key={i} className={'galleryAndVideo__more col-12 col-md-6 col-xl-3'}>
                      <Media type={'image'} data={item.image} />
                    </div>
                  ))}
                </div>
              }

              {data && data.length > 4 && 
                <button 
                  className={'btn'} 
                  onClick={() => this.setState({ showMore: !this.state.showMore })}
                >Show more
                </button>}
            </div>
          </div>
        )}
      </List>
    );
  }
}

export default GalleryAndVideo;