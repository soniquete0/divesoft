import * as React from 'react';

import List from '../List';
import Link from '../../partials/Link';
import Media from '../../partials/Media';
import getImageUrl from '../../helpers/getImageUrl';

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
  numberOfPage: number;
}

class NewsAndEvents extends React.Component<NewsAndEventsProps, NewsAndEventsState> {
  constructor(props: NewsAndEventsProps) {
    super(props);

    this.state = {
      numberOfPage: 1
    };
  }

  public render() {
    const { title, titleColor, backgroundImage, newsAndEvents } = this.props.data;

    return (
      <List data={newsAndEvents}>
        {({ getPage }) => {
          const { items, lastPage } = getPage(this.state.numberOfPage, 'infinite', 9);

          return (
            <div
              className={'newsAndEvents'}
              style={{
                backgroundImage: backgroundImage && `url(${getImageUrl(backgroundImage)})`
              }}
            >
              <div className={'container'}>
                {title && <h3 style={{ color: `${titleColor}` }}>{title}</h3>}
                <div className={'newsAndEvents__list row d-flex justify-content-between align-items-center'}>

                  {items &&
                    items.map((item, i) => (
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
                            <Link {...item.url}>More information</Link>
                          </div>
                        </div>
                      </div>
                  ))}
                </div>

                {this.state.numberOfPage < lastPage &&
                  <button
                    className={'btn'}
                    onClick={() => this.setState({
                      numberOfPage: this.state.numberOfPage + 1
                    })}
                  >
                    Show more
                  </button>}

              </div>
            </div>
          );
        }}
      </List>
    );
  }
}

export default NewsAndEvents;
