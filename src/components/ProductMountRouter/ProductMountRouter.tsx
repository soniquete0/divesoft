import * as React from 'react';

export interface ProductMountRouterProps {
  headline: String;
}

export interface ProductMountRouterState {
  panelActive: boolean;
  panelHidden: boolean;
}

class ProductMountRouter extends React.Component<ProductMountRouterProps , ProductMountRouterState> {
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

  handleScroll = () => {
    const panel = document.getElementById('configuration-rect');
    const panelRect = panel.getBoundingClientRect();
    const windowHeight = window.outerHeight;

    (panelRect.top - windowHeight < 0) ? this.setState({ panelHidden: true }) : this.setState({ panelHidden: false });
  }

  public render() {
    return (
      <div>
        {/* START: CONFIGURATION COMPONENT */}
        {/* Start: Mount Info boxes */}
        <div className="container configuration-types" id="configuration-rect">
          <div className="row">
            <div className="col-md-4 configuration-box">
              <h3 className="headline text-center">SIDEMOUNT<br/>CONFIGURATION</h3>
              <p className="text text-center">Backplates, Consumables, Tanks, Blackplates, Consumables</p>
              <div className="image-wrap">
                <img src="https://fakeimg.pl/380x380/f0f0f0/" />
                <button className="btn btn-primary">View</button>
              </div>
            </div>
            <div className="col-md-4 configuration-box">
              <h3 className="headline text-center">FRONTMOUNT<br/>CONFIGURATION</h3>
              <p className="text text-center">Backplates, Consumables, Tanks, Blackplates, Consumables</p>
              <div className="image-wrap">
                <img src="https://fakeimg.pl/380x380/f0f0f0/" />
                <button className="btn btn-primary">View</button>
              </div>
            </div>
            <div className="col-md-4 configuration-box">
              <h3 className="headline text-center">BACKMOUNT<br/>CONFIGURATION</h3>
              <p className="text text-center">Backplates, Consumables, Tanks, Blackplates, Consumables</p>
              <div className="image-wrap">
                <img src="https://fakeimg.pl/380x380/f0f0f0/" />
                <button className="btn btn-primary">View</button>
              </div>
            </div>
          </div>
        </div>
        {/* End: Mount Info boxes */}

        {/* Start: Mount Info panel */}
        { !this.state.panelHidden ? <div className={`configuration-types-panel ${this.state.panelActive ? 'active' : ''}`}>
          <span className="options-toggler" onClick={() => this.setState({ panelActive: true})}>
            OPTIONS <span className="dropdown__arrow" />
          </span>
          <span className="options-toggler options-toggler-close" onClick={() => this.setState({ panelActive: false})}>
            CLOSE
          </span>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <a href="#" className="config-type-link">
                  <img src="https://fakeimg.pl/55x62/f0f0f0/" />
                  <span className="headline">Sidemount Configuration</span>
                </a>
              </div>
              <div className="col-md-4">
                <a href="#" className="config-type-link">
                  <img src="https://fakeimg.pl/55x62/f0f0f0/" />
                  <span className="headline">Front Mounted Configuration</span>
                </a>
              </div>
              <div className="col-md-4">
                <a href="#" className="config-type-link">
                  <img src="https://fakeimg.pl/55x62/f0f0f0/" />
                  <span className="headline">Sidemount Configuration</span>
                </a>
              </div>
            </div>
          </div>
        </div> : '' }
        {/* End: Mount Info panel */}
        {/* // END: CONFIGURATION COMPONENT */}
      </div>
    );
  }
}

export default ProductMountRouter;
