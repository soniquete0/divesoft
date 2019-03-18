import React from 'react';
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
declare class Calendar extends React.Component<CalendarProps, CalendarState> {
    constructor(props: CalendarProps);
    renderHeader(): JSX.Element;
    renderDays(): JSX.Element;
    renderCells(): JSX.Element;
    renderControls(): JSX.Element;
    onDateClick: (day: any) => void;
    nextMonth: () => void;
    prevMonth: () => void;
    render(): JSX.Element;
}
export default Calendar;
