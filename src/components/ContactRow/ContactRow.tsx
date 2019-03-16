import React from 'react';

import List from '../List';
import Link from '@source/partials/Link';

export interface ContactRowState {
  showMore: boolean;
}

interface Contact {
  name: string;
  position: string;
  url: LooseObject;
  urlTitle: string;
  email: string;
  phone: string;
}

export interface ContactRowProps {
  data: {
    title: string;
    contacts: Contact[];
  };
}

class ContactRow extends React.Component<ContactRowProps, ContactRowState> {
  constructor(props: ContactRowProps) {
    super(props);

    this.state = {
      showMore: false
    };
  }

  public render() {
    const { title, contacts } = this.props.data;

    return (
      <List data={contacts}>
        {({ data }) => (
          <div className={'contactRow'}>
            <div className={'container'}>
              <div className="row contactRow__divider">

                <div className="col-12 col-md-3">
                  <h3>{title}</h3>
                  {contacts.length > 3 && 
                    <span 
                      className={'contactRow__showMore'}
                      onClick={() => this.setState({ showMore: !this.state.showMore })}
                    >Show {this.state.showMore ? 'less' : 'more'}
                    </span>
                  }
                </div>
                {console.log(data)}
                <div className="col-12 col-md-9">
                  <div className={'row'}>
                    {data && data.slice(0, 3).map((item, i) => (
                      <div key={i} className={'contactRow__item col-12 col-md-4'}>
                        <h5>{item.name}</h5>
                        <span>{item.position}</span>
                        <p>W: <Link url={item.url && item.url.url}>
                        {item.urlTitle}</Link></p>
                        <p>M: <a href={`mailto:${item.phone}`}>{item.phone}</a></p>
                        <p>P: <a href={`tel:${item.phone}`}>{item.phone}</a></p>
                      </div>
                    ))}

                    {this.state.showMore && data.slice(3, data.length).map((item, i) => (
                      <div key={4 + i} className={'contactRow__item col-12 col-md-4'}>
                        <h5>{item.name}</h5>
                        <span>{item.position}</span>
                        <p>W: <Link url={item.url && item.url.url}>
                        {item.urlTitle}</Link></p>
                        <p>M: <a href={`mailto:${item.phone}`}>{item.phone}</a></p>
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