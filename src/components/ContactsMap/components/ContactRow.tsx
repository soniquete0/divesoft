import React from 'react';

import List from '../../List';
import Link from '@source/partials/Link';

export interface ContactRowState {
  showMore: boolean;
}

interface Contact {
  name: string;
  position: string;
  email: string;
  phone: string;
  web: LooseObject;
}

interface ContactRowProps {
  title: string;
  rows: Contact[];
}

class ContactRow extends React.Component<ContactRowProps, ContactRowState> {
  constructor(props: ContactRowProps) {
    super(props);

    this.state = {
      showMore: false
    };
  }

  public render() {
    const { title, rows } = this.props;

    return (
      <List data={rows}>
        {({ data }) => (
          <div className={'contactRow'}>
            <div className={'container'}>
              <div className="row contactRow__divider">

                <div className="col-12 col-md-3">
                  <h3>{title}</h3>
                  {rows.length > 3 && 
                    <span 
                      className={'contactRow__showMore'}
                      onClick={() => this.setState({ showMore: !this.state.showMore })}
                    >Show {this.state.showMore ? 'less' : 'more'}
                    </span>
                  }
                </div>
                
                <div className="col-12 col-md-9">
                  <div className={'row'}>
                    {data && data.slice(0, 3).map((item, i) => (
                      <div key={i} className={'contactRow__item col-12 col-md-4'}>
                        <h5>{item.name}</h5>
                        <span>{item.position}</span>
                        <p>W: <Link url={item.url && item.url.url}>
                        {item.urlTitle}</Link></p>
                        <p>M: <a href={`mailto:${item.email}`}>{item.email}</a></p>
                        <p>P: <a href={`tel:${item.phone}`}>{item.phone}</a></p>
                      </div>
                    ))}

                    {this.state.showMore && data.slice(3, data.length).map((item, i) => (
                      <div key={4 + i} className={'contactRow__item col-12 col-md-4'}>
                        <h5>{item.name}</h5>
                        <span>{item.position}</span>
                        <p>W: <Link url={item.web && item.web.url}>
                        {item.urlTitle}</Link></p>
                        <p>M: <a href={`mailto:${item.email}`}>{item.email}</a></p>
                        <p>P: <a href={`tel:${item.phone}`}>{item.phone}</a></p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}
      </List>
    );
  }
}

export default ContactRow;