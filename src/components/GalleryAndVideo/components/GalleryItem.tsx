import React from 'react';

import Media from '@source/partials/Media';

export interface GalleryItemState {
  fullScreen: boolean;
}

export interface GalleryItemProps {
  // tslint:disable-next-line:no-any
  key: any;
  image: LooseObject;
  gridClasses: string;
}

class GalleryItem extends React.Component<GalleryItemProps, GalleryItemState> {
  constructor(props: GalleryItemProps) {
    super(props);

    this.state = {
      fullScreen: false
    };
  }

  public render() {
    const { image, key, gridClasses } = this.props;

    return (
      <div 
        key={key}
        className={`galleryAndVideo__content__img ${gridClasses}`}
        onClick={() => this.setState({ fullScreen: !this.state.fullScreen })}
      >
        <Media 
          data={image} 
          type={'image'}
          class={
            this.state.fullScreen ? 
            'galleryAndVideo__content__img--fullScreen' : ''}
        />
      </div>
    );
  }
}

export default GalleryItem;