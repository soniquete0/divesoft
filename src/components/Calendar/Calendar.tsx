import * as React from 'react';
import * as dateFns from 'date-fns';
import Responsive from 'react-responsive';

import List from '../List';
import Button from '../../partials/Button';
import MapComponent from './Map/components/MapComponent';

export interface CalendarState {
  currentMonth: Date;
  selectedDate: Date;
  switch: boolean;
  mapCenter: {
    lat: number;
    lng: number;
  };
  countrySelectedValue: string;
  keywordSelectedValue: string;
  keywords: any;
  countries: any;
  currentDate: string;
}

export interface MyFormatOfDate {
  date: string;
  text: string;
  url: LooseObject;
  country: string;
  keyword: string;
  lat: string;
  lng: string;
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
      mapCenter: {
        lat: 50,
        lng: 14
      },

      countrySelectedValue: 'all',
      keywordSelectedValue: 'all',
      keywords: [],
      countries: [],
      currentDate: 'all'
    };
  }

  getUniqControlProps() {
    const { dates } = this.props.data;

    let uniqKeywords = [];
    let uniqCountries = [];

    const propsToArray = () => {
      for (let i = 0; i < dates.length; i++) {
        uniqCountries.push(dates[i].country);
      }
      for (let i = 0; i < dates.length; i++) {
        uniqKeywords.push(dates[i].keyword);
      }
    };

    const uniqueArray = arr => Array.from(new Set(arr));

    propsToArray();
    uniqKeywords = uniqueArray(uniqKeywords);
    uniqCountries = uniqueArray(uniqCountries);

    return this.setState({
      keywords: uniqKeywords,
      countries: uniqCountries
    });
  }

  componentDidMount = () => this.getUniqControlProps();

  defineLocation(loc: string, type: string) {
    const { dates } = this.props.data;

    for (let i = 0; i < dates.length; i++) {
      if (dates[i][type] === loc) {
        switch (type) {
          case 'country':
            this.setState({
              keywordSelectedValue: dates[i].keyword,
              currentDate: dates[i].date
            });
            break;
          case 'keyword':
            this.setState({
              countrySelectedValue: dates[i].country,
              currentDate: dates[i].date
            });
            break;
          case 'filterDate':
            this.setState({
              countrySelectedValue: dates[i].country,
              keywordSelectedValue: dates[i].keyword,
              currentDate: dates[i].date
            });
            break;

          default: break;
        }

        return {
          lat: parseFloat(dates[i].lat),
          lng: parseFloat(dates[i].lng)
        };
      }
    }

  }

  /* SELECT MOUNTH */
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

  /* DAYS OF THE WEEK */
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

    return (
      <div className="calendar__days">
        <div className="row">
          {days}
        </div>
      </div>
    );
  }

  /* DESKTOP CELLS */
  renderCells(data: any) {
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
            {data && data.map((item, j) => {
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

    return  <div className="calendar__body">{rows}</div>;
  }

  onSelectChange(event: React.FormEvent<HTMLSelectElement>, type?: string) {
    var safeSearchTypeValue: string = event.currentTarget.value;

    switch (type) {
      case 'country':
        this.setState({ countrySelectedValue: safeSearchTypeValue });
        break;
      case 'keyword':
        this.setState({ keywordSelectedValue: safeSearchTypeValue });
        break;

      default: return;
    }
  }

  search = (data: any) => {
    const {
      countrySelectedValue,
      keywordSelectedValue,
    } = this.state;

    data.map((item, i) => {
      if (
        item.country === countrySelectedValue && countrySelectedValue !== 'all' ||
        item.keyword === keywordSelectedValue && keywordSelectedValue !== 'all'
      ) {
        return this.setState({
          mapCenter: {
            lat: parseFloat(item.lat),
            lng: parseFloat(item.lng)
          },
          switch: false
        });
      }
    });
  }

  /* FILTERS */
  renderControls (data: any) {
    const { keywords, countries } = this.state;

    return (
      <div className={'calendar__controls'}>
        <div className="container">
          <div className="row">

            <div className="col-12 col-md-4">
              <span className={'calendar__controls__selectLabel'}>
                Search keyword:
              </span>
              <div className={'select'}>
                <select
                  onChange={e => this.onSelectChange(e, 'keyword')}
                  value={this.state.keywordSelectedValue}
                >
                  <option value={'all'} key="all">Select keyword</option>
                  {keywords && keywords.map((item, i) => (
                    <option key={i} value={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <span className={'calendar__controls__selectLabel'}>
                Select country:
              </span>
              <div className={'select'}>
                <select
                  onChange={e => this.onSelectChange(e, 'country')}
                  value={this.state.countrySelectedValue}
                >
                  <option value={'all'} key="all">Select country</option>
                  {countries && countries.map((item, i) => (
                    <option key={i} value={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-12 col-md-4">
            <button
              className={'btn'}
              onClick={() => this.search(data)}
            >
              Search events
            </button>
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

  /* SELECT MOUNTH */
  renderMobileView(data: any) {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = 'D';
    const resultView = [];

    let rKey = 0;
    let days = [];
    let day = startDate;
    let formattedDate = '';

    const daysOfTheWeek = [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
    ];

    const getDayofTheWeek = (key: number) => <p>{daysOfTheWeek[key]}</p>;

    while (day <= endDate) {

      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        let myFormatOfDate = `${day.getDate()}.${day.getMonth() + 1}.${day.getFullYear()}`;

        formattedDate = dateFns.format(day, dateFormat);

        if (dateFns.isSameMonth(day, monthStart)) {
          days.push(
            <div className={'row'}>
              <div className="col-2">
                {getDayofTheWeek(i)}
              </div>
              <div className="col-10">
                <div
                  className={`row mobileCell ${
                    !dateFns.isSameMonth(day, monthStart)
                      ? 'disabled'
                      : dateFns.isSameDay(day, selectedDate) ? 'selected' : ''
                  }`}
                  key={i}
                  onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
                >
                  <span className="mobileCell__number">{formattedDate}</span>
                  <span className="mobileCell__bg">{formattedDate}</span>
                  {data && data.map((item, j) => {
                    if (item.date === myFormatOfDate && dateFns.isSameMonth(day, monthStart)) {
                      return (
                        <div className={'mobileCell__content'} key={j}>
                          <p>{item.text}</p>
                          <Button url={item.url}>></Button>
                        </div>
                      ); }
                  })}
                </div>
              </div>
            </div>
          );
        }

        day = dateFns.addDays(day, 1);
      }

      resultView.push(
        <div key={'col' + (++rKey).toString()} className={'calendar__mobileBody__week'}>
          {days}
        </div>
      );
      days = [];
    }

    return  <div className="calendar__mobileBody">{resultView}</div>;
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
    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    const Default = props => <Responsive {...props} minWidth={768} />;

    return (
      <List data={this.props.data.dates}>
        {({ data }) => (
          <div className={'calendar'} style={!this.state.switch ? { paddingBottom: 0 } : {}}>
            {this.renderControls(data)}
            {this.state.switch ?
              <div className="container calendar__container">
                {this.renderHeader()}
                <Default>
                  {this.renderDays()}
                  {this.renderCells(data)}
                </Default>
                <Mobile>
                  {this.renderMobileView(data)}
                  {this.renderHeader()}
                </Mobile>
              </div> :
              <MapComponent
                items={data}
                controls={false}
                mapCenter={this.state.mapCenter}
              />}
          </div>
        )}
      </List>
    );
  }
}

export default Calendar;
