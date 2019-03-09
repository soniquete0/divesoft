import * as React from 'react';

import getImageUrl from '@source/helpers/getImageUrl';
import Button from '@source/partials/Button';
import Media from '@source/partials/Media';
import Link from '@source/partials/Link';
import List from '../List';

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
  items: Array<any>;
  itemsToShow: number;
  expanded: boolean;
}

class NewsAndEvents extends React.Component<NewsAndEventsProps, NewsAndEventsState> {
  constructor(props: NewsAndEventsProps) {
    super(props);

    this.state = {
      items: [],
      itemsToShow: 9,
      expanded: false
    };

    this.showMore = this.showMore.bind(this);
  }

  componentDidMount() {
    this.setState({ items: this.props.data.newsAndEvents });
  }

  showMore () {
    this.state.itemsToShow >= 3 ? 
    this.setState({ itemsToShow: this.state.items.length, expanded: true }) : 
    this.setState({ itemsToShow: 9, expanded: false });
    
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
                {data.slice(0, this.state.itemsToShow).map((item, i) => (
                  <div key={i} className={'newsAndEvents__list__item col'}>
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

              {this.state.items.length >= 9 ? 
                <button className={'btn'} onClick={this.showMore}>
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