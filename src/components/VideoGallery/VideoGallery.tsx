import React from 'react';

import List from '../List';
import Media from '@source/partials/Media';

export interface VideoGalleryState {
  numberOfPage: number;
}

interface Video {
  video: LooseObject;
  title: string;
  text: string;
}

export interface VideoGalleryProps {
  data: {
    title: string;
    description: string;
    divider: boolean;
    videos: Video[];
  };
}

class VideoGallery extends React.Component<VideoGalleryProps, VideoGalleryState> {
  constructor(props: VideoGalleryProps) {
    super(props);

    this.state = {
      numberOfPage: 1
    };
  }

  public render () {
    const { title, description, divider, videos } = this.props.data;

    return (
      <List data={videos}>
        {({ getPage }) => {
          const { items, lastPage } = getPage(this.state.numberOfPage, 'infinite', 3);

          return (
            <div className="videoGallery">
              <div className={'container'}>
                {title && <h2>{title}</h2>}
                {description && 
                  <h4 className={'videoGallery__description'}>{description}</h4>}
  
                <div className="row">
                  {items && items.map((item, i) => (
                    <div key={i} className="col-12 col-md-4"> 
                      <div className={'videoGallery__item'}>
                        {item.video && <Media type={'embeddedVideo'} data={item.video} />}
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {this.state.numberOfPage < lastPage &&
                  <button 
                    className={'btn'} 
                    onClick={() => this.setState({ numberOfPage: this.state.numberOfPage + 1 })}
                  >Show more
                  </button>}
  
                {divider && <div className={'videoGallery__divider'} />}
              </div>
            </div>
          );
        }}
      </List>
    );
  }
}

export default VideoGallery;