import * as React from 'react';

import Button from '@source/partials/Button';
import getImageUrl from '@source/helpers/getImageUrl';

export interface AboutUsHomeState {
  hoverLeft: boolean;
  hoverRight: boolean;
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
      hoverLeft: true,
      hoverRight: true
    };
  }

  toggleHoverRight = () => this.setState({ hoverRight: !this.state.hoverRight });
  toggleHoverLeft = () => this.setState({ hoverLeft: !this.state.hoverLeft });

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
                className={this.state.hoverLeft ? 'aboutUsHome__block left' : 'aboutUsHome__block left hovered'}
                onMouseEnter={this.toggleHoverLeft}
                onMouseLeave={this.toggleHoverLeft}
              >
                <div className="img-wrap">
                  {leftImg && <img src={getImageUrl(leftImg)} className="img-under"/>}
                </div>
                <div className="aboutUsHome__info">
                  {leftTitle && <h3> {leftTitle} </h3>}
                  {leftSubtitle && <h4>{leftSubtitle}</h4>}
                  {leftText && <p> {leftText} </p>}
                  {leftUrl && leftBtnTitle && <Button url={leftUrl}>{leftBtnTitle}</Button>}
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-6">
              <div
                className={this.state.hoverRight ? 'aboutUsHome__block right' : 'aboutUsHome__block right hovered'}
                onMouseEnter={this.toggleHoverRight}
                onMouseLeave={this.toggleHoverRight}
              >
                <div className="img-wrap">
                  {rightImg && <img src={getImageUrl(rightImg)} className="img-under"/>}
                </div>
                <div className="aboutUsHome__info">
                  {rightTitle && <h3> {rightTitle} </h3>}
                  {rightSubtitle && <h4>{rightSubtitle}</h4>}
                  {rightText && <p> {rightText} </p>}
                  {rightUrl && rightBtnTitle && <Button url={rightUrl}>{rightBtnTitle}</Button>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUsHome;
