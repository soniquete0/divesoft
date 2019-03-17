import React from 'react';

import List from '../List';
import Media from '@source/partials/Media';

export interface VideoGalleryState {
  showMore: boolean;
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
      showMore: false
    };
  }

  public render () {
    const { title, description, divider, videos } = this.props.data;

    return (
      <List data={videos}>
        {({ data }) =>  (
          <div className="videoGallery">
            <div className={'container'}>
              {title && <h2>{title}</h2>}
              {description && 
                <h4 className={'videoGallery__description'}>{description}</h4>}

              <div className="row">
                {data && data.length < 3 && data.map((item, i) => (
                  <div key={i} className="col-12 col-md-4"> 
                    <div className={'videoGallery__item'}>
                      {item.video && <Media type={'embeddedVideo'} data={item.video} />}
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}

                {data && data.length >= 3 && data.slice(0, 3).map((item, i) => (
                  <div key={i} className="col-12 col-md-4"> 
                    <div className={'videoGallery__item'}>
                      {item.video && <Media type={'embeddedVideo'} data={item.video} />}
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
      
                {this.state.showMore &&  
                  data.slice(3, data.length).map((item, i) => (
                    <div key={i} className="col-12 col-md-4"> 
                      <div className={'videoGallery__item'}>
                        {item.video && <Media type={'embeddedVideo'} data={item.video} />}
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    </div>
                ))}
              </div>

              {data && data.length > 3 && 
                <button 
                  className={'btn'} 
                  onClick={() => this.setState({ showMore: !this.state.showMore })}
                >{this.state.showMore ? 'Show less' : 'Show more'}
                </button>}

              {divider && <div className={'videoGallery__divider'} />}
            </div>
          </div>
        )}
      </List>
    );
  }
}

export default VideoGallery;