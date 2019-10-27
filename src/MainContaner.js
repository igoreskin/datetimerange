import React, { useState, Fragment } from 'react';
import DatetimeRangePicker from 'react-datetime-range-picker';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';

const MainContaner = () => {

    const [date, setDate] = useState([]);
    const startDate = date[0];
    const endDate= date[1];

    const handleChange = e => {
        setDate([e.start, e.end]);
    } 

    const handleEndDateChange = () => {
        setApplied(true);
    }

    const [applied, setApplied] = useState(false);
    
    const startInPlainFormat = date[0];
    const startFormattable = moment(startInPlainFormat).format('YYYY-MM-DD HH:MM:SS');
    const startInUnixTimestamp = new Date(startFormattable).getTime()/1000;

    const endInPlainFormat = date[1];
    const endFormattable = moment(endInPlainFormat).format('YYYY-MM-DD HH:MM:SS');
    const endInUnixTimestamp = new Date(endFormattable).getTime()/1000;

    return (
        <Fragment>
            <div className="main">
                <DatetimeRangePicker className="picker" closeOnSelect={true} onChange={e => handleChange(e)} onEndDateChange={handleEndDateChange} />
            </div>
            <br />
            {applied && 
                <div>
                    Start Date in plain format:
                    <div><Moment>{startDate}</Moment></div>
                    <br />
                    Start Date - Unix timestamp:
                    <div>{startInUnixTimestamp}</div>
                    <br />
                    End Date in plain format:
                    <div><Moment>{endDate}</Moment></div>
                    <br />
                    End Date - Unix timestamp:
                    <div>{endInUnixTimestamp}</div>
                </div>
            }
        </Fragment>
    )
}

export default MainContaner;
