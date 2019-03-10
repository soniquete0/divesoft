import * as React from 'react';

import Button from '@source/partials/Button';
import getImageUrl from '@source/helpers/getImageUrl';

export interface AboutUsHomeState {
  hover: boolean;
}

export interface AboutUsHomeProps {
  data: {
    leftTitle: string;
    leftSubtitle: string;
    leftText: string;
    leftUrl?: LooseObject;
    leftBtnTitle: string;
    leftImg?: LooseObject;
    rightTitle: string;
    rightSubtitle: string;
    rightText: string;
    rightUrl?: LooseObject;
    rightBtnTitle: string;
    rightImg?: LooseObject;
  };
}

class AboutUsHome extends React.Component<AboutUsHomeProps, AboutUsHomeState> {
  constructor(props: AboutUsHomeProps) {
    super(props);

    this.state = {
      hover: false
    };
  }

  toggleHover = () => this.setState({ hover: !this.state.hover });
  
  public render () {
    const { 
      leftTitle,
      leftSubtitle,
      leftText,
      leftUrl,
      leftBtnTitle,
      leftImg,
      rightTitle,
      rightSubtitle,
      rightText,
      rightUrl,
      rightBtnTitle,
      rightImg
    } = this.props.data;

    return (
      <div className={'aboutUsHome'}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-6">
              <div 
                className={'aboutUsHome__block'} 
                style={this.state.hover ?
                  { backgroundImage: leftImg && `url(${getImageUrl(leftImg)})` } :
                  { background: 'white !important'}}
              >
                {leftTitle && 
                  <h3 
                    style={
                      this.state.hover ? 
                      {color: '#ffffff'} : 
                      {color: '#343434'}}
                  >
                    {leftTitle}
                  </h3>}
                {leftSubtitle && <h4>{leftSubtitle}</h4>}
                {leftText && 
                  <p
                    style={
                      this.state.hover ? 
                      {color: '#ffffff'} : 
                      {color: '#6c6c6c'}}
                  >
                    {leftText}
                  </p>}
                {leftUrl && leftBtnTitle && 
                  <Button url={leftUrl}>{leftBtnTitle}</Button>}
              </div>
            </div>
            <div className="col-12 col-xl-6">
              <div 
                className={'aboutUsHome__block aboutUsHome__block--right'} 
                onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleHover}
                style={
                  !this.state.hover ?
                  { backgroundImage: rightImg && `url(${getImageUrl(rightImg)})` } :
                  { background: 'white !important'}
                } 
              >
                {rightTitle && <h3>{rightTitle}</h3>}
                {rightSubtitle && <h4>{rightSubtitle}</h4>}
                {rightText && <p>{rightText}</p>}
                {rightUrl && rightBtnTitle && 
                  <Button url={rightUrl}>{rightBtnTitle}</Button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUsHome;