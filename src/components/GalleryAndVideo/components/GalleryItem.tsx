import React from 'react';

import Media from '@source/partials/Media';

export interface GalleryItemState {
  fullScreen: boolean;
}

export interface GalleryItemProps {
  image: LooseObject;
  wrapperClasses: string;
}

class GalleryItem extends React.Component<GalleryItemProps, GalleryItemState> {
  constructor(props: GalleryItemProps) {
    super(props);

    this.state = {
      fullScreen: false
    };
  }

  public render() {
    const { image, wrapperClasses } = this.props;

    return (
      <div 
        className={`galleryAndVideo__content__img ${wrapperClasses}`}
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