import React from 'react';

import Media from '@source/partials/Media';

export interface GalleryItemState {
  fullScreen: boolean;
}

export interface GalleryItemProps {
  keyIndex: number;
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
    const { image, keyIndex, gridClasses } = this.props;

    return (
      <div 
        key={keyIndex}
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