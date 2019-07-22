import * as React from 'react';
import Button from '../../partials/Button';
import Link from '../../partials/Link';

import getImageUrl from '../../helpers/getImageUrl';

export interface ProductMountRouterProps {
  data: {
    toggleOpen: String;
    toggleClose: String;
    leftHeadline: String;
    leftText: String;
    leftUrl?: LooseObject;
    leftImg?: LooseObject;
    middleHeadline: String;
    middleText: String;
    middleUrl?: LooseObject;
    middleImg?: LooseObject;
    rightHeadline: String;
    rightText: String;
    rightUrl?: LooseObject;
    rightImg?: LooseObject;
  }
}

export interface ProductMountRouterState {
  panelActive: boolean;
  panelHidden: boolean;
}

class ProductMountRouter extends React.Component<ProductMountRouterProps, ProductMountRouterState> {
  constructor(props: ProductMountRouterProps) {
    super(props);

    this.state = {
      panelActive: false,
      panelHidden: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const panel = document.getElementById('configuration-rect');
    const panelRect = panel.getBoundingClientRect();
    const windowHeight = window.outerHeight;

    (panelRect.top - windowHeight < 0) ? this.setState({ panelHidden: true }) : this.setState({ panelHidden: false });
  }

  public render() {
    const { toggleOpen,
            toggleClose,
            leftHeadline,
            leftText,
            leftUrl,
            leftImg,
            middleHeadline,
            middleText,
            middleUrl,
            middleImg,
            rightHeadline,
            rightText,
            rightUrl,
            rightImg } = this.props.data;

    return (
      <div>
        {console.log({...this.props.data})}
        {/* START: CONFIGURATION COMPONENT */}
        {/* Start: Mount Info boxes */}
        <div className="container configuration-types" id="configuration-rect">
          <div className="row">
            <div className="col-md-4 configuration-box">
              <h3 className="headline text-center">{leftHeadline && leftHeadline}</h3>
              <p className="text text-center">{leftText && leftText}</p>
              <div className="image-wrap">
                {leftImg && <img src={getImageUrl(leftImg)}/>}
                {leftUrl && <Button url={leftUrl} classes="btn-primary">View</Button>}
              </div>
            </div>
            <div className="col-md-4 configuration-box">
              <h3 className="headline text-center">{middleHeadline && middleHeadline}</h3>
              <p className="text text-center">{middleText && middleText}</p>
              <div className="image-wrap">
              {middleImg && <img src={getImageUrl(middleImg)}/>}
                {middleUrl && <Button url={middleUrl} classes="btn-primary">View</Button>}
              </div>
            </div>
            <div className="col-md-4 configuration-box">
              <h3 className="headline text-center">{rightHeadline && rightHeadline}</h3>
              <p className="text text-center">{rightText && rightText}</p>
              <div className="image-wrap">
                {rightImg && <img src={getImageUrl(rightImg)}/>}
                {rightUrl && <Button url={rightUrl} classes="btn-primary">View</Button>}
              </div>
            </div>
          </div>
        </div>
        {/* End: Mount Info boxes */}

        {/* Start: Mount Info panel */}
        <div className={`configuration-types-panel ${this.state.panelActive ? 'active' : ''} ${this.state.panelHidden ? 'animate-slidedown' : ''}`}>
        { !this.state.panelHidden ? <><span className="options-toggler" onClick={() => this.setState({ panelActive: true})}>
            {toggleOpen && toggleOpen} <span className="dropdown__arrow" />
          </span>
          <span className="options-toggler options-toggler-close" onClick={() => this.setState({ panelActive: false})}>
          {toggleClose && toggleClose}
          </span></> : '' }
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                {leftUrl && <Link {...leftUrl} className="config-type-link">
                  {leftImg && <img src={getImageUrl(leftImg)}/>}
                  <span className="headline">{leftHeadline && leftHeadline}</span>
                </Link>}
              </div>
              <div className="col-md-4">
                {middleUrl && <Link {...middleUrl} className="config-type-link">
                  {middleImg && <img src={getImageUrl(middleImg)}/>}
                  <span className="headline">{middleHeadline && middleHeadline}</span>
                </Link>}
              </div>
              <div className="col-md-4">
                {rightUrl && <Link {...rightUrl} className="config-type-link">
                  {rightImg && <img src={getImageUrl(rightImg)} className="img-under"/>}
                  <span className="headline">{rightHeadline && rightHeadline}</span>
                </Link>}
              </div>
            </div>
          </div>
        </div>
        {/* End: Mount Info panel */}
        {/* // END: CONFIGURATION COMPONENT */}
      </div>
    );
  }
}

export default ProductMountRouter;
