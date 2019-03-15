import React from 'react';

import List from '../List';
import Media from '@source/partials/Media';
import GalleryItem from './components/GalleryItem';

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
                    {data.length < 4 && <div className="row">
                    {data && data.map((item, i) => (
                      <GalleryItem 
                        keyIndex={i} 
                        image={item.image} 
                        gridClasses={'col-6 col-md-3 col-xl-6'} 
                      />
                    ))}
                  </div>}
                  <div className="row">
                    {data && data.length >= 4 && data.slice(0, 4).map((item, i) => (
                      <GalleryItem 
                        keyIndex={i} 
                        image={item.image} 
                        gridClasses={'col-6 col-md-3 col-xl-6'} 
                      />
                    ))}
                  </div>
                </div>
              </div>

              {this.state.showMore && 
                <div className="row">
                  {data.slice(4, data.length - 1).map((item, i) => (
                    <GalleryItem 
                      keyIndex={i} 
                      image={item.image} 
                      gridClasses={'col-6 col-md-3'} 
                    />
                  ))}
                </div>
              }

              {data && data.length > 4 && 
                <button 
                  className={'btn'} 
                  onClick={() => this.setState({ showMore: !this.state.showMore })}
                >{this.state.showMore ? 'Show less' : 'Show more'}
                </button>}
            </div>
          </div>
        )}
      </List>
    );
  }
}

export default GalleryAndVideo;