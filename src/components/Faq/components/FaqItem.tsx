import React from 'react';
import ReactMarkdown from 'react-markdown';

interface FaqItemState {
  show: boolean;
}

interface FaqItemProps {
  title: string;
  text: string;
}

class FaqItem extends React.Component<FaqItemProps, FaqItemState> {
  constructor(props: FaqItemProps) {
    super(props);

    this.state = {
      show: false
    };
  }

  public render () {
    const { title, text } = this.props;

    return (
      <div className="row">
        <div className="col-12">
          <div 
            onClick={() => this.setState({
              show: !this.state.show
            })}
            className={`faq__list__show ${this.state.show ? 'faq__list__show--minus' : ''}`} 
          />
          <div className={'faq__list__item'}>
            <h5>{title}</h5>
            {this.state.show && text && <ReactMarkdown source={text} />}
          </div>
          <div className={'faq__list__divider'} />
        </div>
      </div>
    ); 
  }
}

export default FaqItem;