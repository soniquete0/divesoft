import * as React from 'react';

import List from '../List';
import FaqItem from './components/FaqItem';

interface Question {
  title: string;
  text: string;
}

export interface FaqProps {
  data: {
    title: string;
    text: string;
    paddingTop: boolean;
    questions: Question[];
  };
}

const Faq = (props: FaqProps) => {
  const { paddingTop, title, text, questions } = props.data;

  return (
    <List data={questions}>
      {({ data }) => (
        <div className={'faq'}>
          <div className="container">
            {text && <h4 style={paddingTop ? {paddingTop: 0} : {}} className={'faq__text'}>{text}</h4>}
            <div className="row faq__list">

              <div className="col-12 col-md-3">
                <h3>{title}</h3>
              </div>
              <div className="col-12 col-md-9">
                {data && data.map((item, i) => (
                  <FaqItem key={i} title={item.title} text={item.text} />
                ))}
              </div>

            </div>
          </div>
        </div>
      )}
    </List>
  );
};

export default Faq;
