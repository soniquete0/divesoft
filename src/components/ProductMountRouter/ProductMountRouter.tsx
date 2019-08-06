import * as React from 'react';
import Button from '../../partials/Button';
import Link from '../../partials/Link';

import Media from '../../partials/Media';

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
    extraHeadline: String;
    extraText: String;
    extraUrl?: LooseObject;
    extraImg?: LooseObject;
    desktopBackText: String;
    desktopBackUrl?: LooseObject;
  };
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
    return window && window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    return window && window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const panel = document.getElementById('configuration-rect');
    const panelRect = panel.getBoundingClientRect();
    const windowHeight = window && window.outerHeight;

    (panelRect.top - windowHeight < 0) ? this.setState({ panelHidden: true }) : this.setState({ panelHidden: false });
  }

  columnsActive = () => {
    // tslint:disable-next-line: max-line-length
    if (this.props.data.leftHeadline.length > 0 && this.props.data.middleHeadline.length > 0 && this.props.data.rightHeadline.length > 0 && this.props.data.extraHeadline.length > 0) {
      return 'col-md-3';
    // tslint:disable-next-line: max-line-length
    } else if (this.props.data.leftHeadline.length > 0 && this.props.data.middleHeadline.length > 0 && this.props.data.rightHeadline.length > 0) {
      return 'col-md-4';
    } else if (this.props.data.leftHeadline.length > 0 && this.props.data.middleHeadline.length > 0) {
      return 'col-md-6';
    }
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
            rightImg,
            extraHeadline,
            extraText,
            extraUrl,
            extraImg,
            desktopBackText,
            desktopBackUrl } = this.props.data;

    return (
      <div>
        {/* START: CONFIGURATION COMPONENT */}
        {/* Start: Mount Info boxes */}
        <div className="container configuration-types" id="configuration-rect">
          <div className={`configuration-box-wrapper row`}>
            {leftImg && <div className={`configuration-box ${this.columnsActive()}`}>
              <h3 className="headline text-center">{leftHeadline && leftHeadline}</h3>
              <p className="text text-center">{leftText && leftText}</p>
              <div className="image-wrap">
                {/* {leftImg && <img src={getImageUrl(leftImg)}/>} */}
                {leftImg && <Media type={'image'} data={leftImg} />}
                {leftUrl && <Button url={leftUrl} classes="btn-primary">View</Button>}
              </div>
            </div>}
            {middleHeadline && <div className={`configuration-box ${this.columnsActive()}`}>
              <h3 className="headline text-center">{middleHeadline && middleHeadline}</h3>
              <p className="text text-center">{middleText && middleText}</p>
              <div className="image-wrap">
              {middleImg && <Media type={'image'} data={middleImg} />}
                {middleUrl && <Button url={middleUrl} classes="btn-primary">View</Button>}
              </div>
            </div>}
            {rightHeadline && <div className={`configuration-box ${this.columnsActive()}`}>
              <h3 className="headline text-center">{rightHeadline && rightHeadline}</h3>
              <p className="text text-center">{rightText && rightText}</p>
              <div className="image-wrap">
                {rightImg && <Media type={'image'} data={rightImg} />}
                {rightUrl && <Button url={rightUrl} classes="btn-primary">View</Button>}
              </div>
            </div>}
            {extraHeadline && <div className={`configuration-box ${this.columnsActive()}`}>
              <h3 className="headline text-center">{extraHeadline && extraHeadline}</h3>
              <p className="text text-center">{extraText && extraText}</p>
              <div className="image-wrap">
                {extraImg && <Media type={'image'} data={extraImg} />}
                {extraUrl && <Button url={extraUrl} classes="btn-primary">View</Button>}
              </div>
            </div>}
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
            <div className="links-wrapper">
            {desktopBackUrl && <Link {...desktopBackUrl} className={`btn-back`}>{desktopBackText}</Link>}
              {leftHeadline && <Link {...leftUrl} className={`config-type-link ${this.columnsActive()}`}>
                {leftImg && <Media type={'image'} data={leftImg} width={`60`} height={`60`} />}
                <span className="headline">{leftHeadline && leftHeadline}</span>
              </Link>}
              {middleHeadline && <Link {...middleUrl} className={`config-type-link ${this.columnsActive()}`}>
                {middleImg && <Media type={'image'} data={middleImg} width={`60`} height={`60`} />}
                <span className="headline">{middleHeadline && middleHeadline}</span>
              </Link>}
              {rightHeadline && <Link {...rightUrl} className={`config-type-link ${this.columnsActive()}`}>
                {rightImg && <Media type={'image'} data={rightImg} width={`60`} height={`60`} />}
                <span className="headline">{rightHeadline && rightHeadline}</span>
              </Link>}
              {extraHeadline && <Link {...extraUrl} className={`config-type-link ${this.columnsActive()}`}>
                {extraImg && <Media type={'image'} data={extraImg} width={`60`} height={`60`} />}
                <span className="headline">{extraHeadline && extraHeadline}</span>
              </Link>}
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
