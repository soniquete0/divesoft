import * as React from 'react';

interface IProperties {
  type: string;
}

const style = {
  width: '100%',
  height: 'auto',
  border: '1px gray',
  background: 'lightsalmon'
};

class AlertNotFound extends React.Component<IProperties, {}> {

  render() {
    switch (this.props.type) {
      case 'component':
        return (<div style={style}>Component was not found !</div>);
      case 'form':
        return (<div style={style}>Form was not found !</div>);
      default:
        return (<div style={style}>Something was not found !</div>);
    }
  }

}

export default AlertNotFound;