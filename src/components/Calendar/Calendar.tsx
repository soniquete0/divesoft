import React from 'react';
import dateFns from 'date-fns';

import Button from '@source/partials/Button';
import MapComponent from '../Map/components/MapComponent';

export interface CalendarState {
  currentMonth: Date;
  selectedDate: Date;
  dates: Array<MyFormatOfDate>;
  switch: boolean;
}

interface MyFormatOfDate {
  date: string;
  text: string;
  url: LooseObject;
  country: string;
  city: string;
  association: string;
  lat: number;
  lng: number;
}

export interface CalendarProps {
  data: {
    dates: MyFormatOfDate[];
  };
}

class Calendar extends React.Component<CalendarProps, CalendarState> {
  constructor(props: CalendarProps) {
    super(props);

    this.state = {
      switch: true,
      currentMonth: new Date(),
      selectedDate: new Date(),
      dates: this.props.data.dates || []
    };
  }

  renderHeader() {
    const dateFormat = 'MMMM YYYY';

    return (
      <div className="calendar__header row flex-middle">
        <div className="col col-start" onClick={this.prevMonth}>
          <div className="icon icon--left" />
        </div>
        <div className="col col-center">
          <h3>{dateFns.format(this.state.currentMonth, dateFormat)}</h3>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon icon--right" />
        </div>
      </div>
    );
  }
  
  renderDays() {
    const dateFormat = 'dddd';
    const days = [];
    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="calendar__days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = 'D';
    const rows = [];

    let rKey = 0;
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        let myFormatOfDate = `${day.getDate()}.${day.getMonth() + 1}.${day.getFullYear()}`;

        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? 'disabled'
                : dateFns.isSameDay(day, selectedDate) ? 'selected' : ''
            }`}
            key={i}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            {this.state.dates && this.state.dates.map((item, j) => {
              if (item.date === myFormatOfDate && dateFns.isSameMonth(day, monthStart)) {
                return (
                  <div className={'cell__content'} key={j}>
                    <p>{item.text}</p>
                    <Button url={item.url}>See details</Button>
                  </div>
                ); }
            })}
          </div>
        );

        day = dateFns.addDays(day, 1);
      }
      
      rows.push(
        <div 
          key={'row' + (++rKey).toString()} 
          className="row"
        >
          {days}
        </div>
      );
      days = [];
    }

    return <div className="calendar__body">{rows}</div>;
  }

  renderControls () {
    return (
      <div className={'calendar__controls'}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <span className={'calendar__controls__selectLabel'}>
                Select date:
              </span>
              <div className={'select'}>
                <select>
                  <option>Date</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <span className={'calendar__controls__selectLabel'}>
                Search keyword:
              </span>
              <div className={'select'}>
                <select>
                  <option>Keywords</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <span className={'calendar__controls__selectLabel'}>
                Select country:
              </span>
              <div className={'select'}>
                <select>
                  <option>Country</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-md-3">
            <Button>Search events</Button>
            </div>
          </div>
          <div className={'calendar__controls__switch'}>
            <button 
              className={`
                calendar__controls__switch__btn 
                ${this.state.switch ? 
                  'calendar__controls__switch__btn--active' : ''}`}
              onClick={() => this.setState({
                switch: !this.state.switch
              })}
            >
              Calendar
            </button>
            <button 
              className={`
                calendar__controls__switch__btn 
                ${!this.state.switch ? 
                  'calendar__controls__switch__btn--active' : ''}`}
              onClick={() => this.setState({
                switch: !this.state.switch
              })}
            >
              Map
            </button>
          </div>
        </div>
      </div>
    );
  }

  onDateClick = day => {
    this.setState({
      selectedDate: day
    });
  }

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  }

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  }

  public render () {
    
    return (
      <div className={'calendar'}>
        {this.renderControls()}
        {this.state.switch ? 
          <div className="container">
            {this.renderHeader()}
            {this.renderDays()}
            {this.renderCells()}
          </div> : 
          <MapComponent controls={false} items={this.state.dates} />}
      </div>
    );
  }
}

export default Calendar;