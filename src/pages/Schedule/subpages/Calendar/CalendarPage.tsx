import "./CalendarPage.scss"

import moment from "moment";

function CalendarPage() {
    const localeData = moment.localeData()

    const startWeek = "Начала недели - " + moment().startOf('isoWeek').format('DD/MM/YYYY HH:mm:ss');
    const endWeek = "Конец недели  - " + moment().endOf('isoWeek').format('DD/MM/YYYY HH:mm:ss');

    const currentWeek = [];  

    return (
        <div className="calendar-page">
            <div className="calendar-page__date-row">
                <div className="day-box">
                    17/<span className="day-box__span">mon</span>
                </div>
                <div className="day-box">
                    18/<span className="day-box__span">tue</span>
                </div>
                <div className="day-box">
                    19/<span className="day-box__span">wed</span>
                </div>
                <div className="day-box">
                    20/<span className="day-box__span">thu</span>
                </div>
                <div className="day-box">
                    21/<span className="day-box__span">fri</span>
                </div>
                <div className="day-box">
                    22/<span className="day-box__span">sat</span>
                </div>
                <div className="day-box">
                    23/<span className="day-box__span">sun</span>
                </div>
            </div>
            <div className="calendar-page__workflow">
                <div className="calendar-page__row">
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                </div>
                <div className="calendar-page__row">
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                </div>
                <div className="calendar-page__row">
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                </div>
                <div className="calendar-page__row">
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                </div>
                <div className="calendar-page__row">
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                    <div className="calendar-page__cell">123</div>
                </div>
            </div>
        </div>
    )
}

export default CalendarPage
