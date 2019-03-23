import React from 'react';

import List from '../List';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';
import getImageUrl from '@source/helpers/getImageUrl';

interface NewsOrEvent {
  img: LooseObject;
  day: string;
  mounthAndYear: string;
  title: string;
  text: string;
  url: LooseObject;
}

export interface NewsAndEventsProps {
  data: {
    title?: string;
    titleColor?: string;
    backgroundImage?: LooseObject;
    newsAndEvents: NewsOrEvent[];
  };
}

export interface NewsAndEventsState {
  // tslint:disable-next-line:no-any
  items: any;
  expanded: boolean;
}

class NewsAndEvents extends React.Component<NewsAndEventsProps, NewsAndEventsState> {
  constructor(props: NewsAndEventsProps) {
    super(props);

    this.state = {
      items: this.props.data.newsAndEvents,
      expanded: false
    };
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.state.items !== nextProps.data.newsAndEvents) {
      this.setState({ items: nextProps.data.newsAndEvents });
    }
  }

  public render() {
    const { title, titleColor, backgroundImage } = this.props.data;

    return (
      <List data={this.state.items}>
        {({ data }) => (
          <div 
            className={'newsAndEvents'} 
            style={{ 
              backgroundImage: backgroundImage && `url(${getImageUrl(backgroundImage)})` 
            }}
          >
            <div className={'container'}>
              {title && <h3 style={{ color: `${titleColor}` }}>{title}</h3>}
              <div className={'newsAndEvents__list row d-flex justify-content-between align-items-center'}>
                
                {data && this.state.items.length <= 9 && 
                  data.slice(0, this.state.items.length).map((item, i) => (
                    <div key={i} className={'newsAndEvents__list__item col-12 col-md-4'}>
                      <div className="row">
                        {item.img && <Media type={'image'} data={item.img} />}
                      </div>
                      <div className="row">
                        <div className={'newsAndEvents__list__item__content'}>
                          <p className={'newsAndEvents__list__item__content--date'}>
                            <span>{item.day}</span> / {item.mounthAndYear}
                          </p>
                          <h4>{item.title}</h4>
                          <p className={'newsAndEvents__list__item__content--text'}>{item.text}</p>
                          <Link url={item.url && item.url.url}>
                            More information
                          </Link>
                        </div>
                      </div>
                    </div>
                ))}

                {data && this.state.items.length >= 9 && 
                  data.slice(0, 9).map((item, i) => (
                    <div key={i} className={'newsAndEvents__list__item col-12 col-md-4'}>
                      <div className="row">
                        {item.img && <Media type={'image'} data={item.img} />}
                      </div>
                      <div className="row">
                        <div className={'newsAndEvents__list__item__content'}>
                          <p className={'newsAndEvents__list__item__content--date'}>
                            <span>{item.day}</span> / {item.mounthAndYear}
                          </p>
                          <h4>{item.title}</h4>
                          <p className={'newsAndEvents__list__item__content--text'}>{item.text}</p>
                          <Link url={item.url && item.url.url}>
                            More information
                          </Link>
                        </div>
                      </div>
                    </div>
                ))}

                {this.state.expanded && data.slice(9, this.state.items.length).map((item, i) => (
                  <div key={i} className={'newsAndEvents__list__item col-12 col-md-4'}>
                    <div className="row">
                      {item.img && <Media type={'image'} data={item.img} />}
                    </div>
                    <div className="row">
                      <div className={'newsAndEvents__list__item__content'}>
                        <p className={'newsAndEvents__list__item__content--date'}>
                          <span>{item.day}</span> / {item.mounthAndYear}
                        </p>
                        <h4>{item.title}</h4>
                        <p className={'newsAndEvents__list__item__content--text'}>{item.text}</p>
                        <Link url={item.url && item.url.url}>
                          More information
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {this.state.items.length > 9 ? 
                <button className={'btn'} onClick={() => this.setState({ expanded: !this.state.expanded })}>
                  Show {this.state.expanded ? 'less' : 'more'}
                </button> : ''}
              
            </div>
          </div>
        )}
      </List>
    );
  }
}

export default NewsAndEvents;