import { ReactNode, useState } from "react";

import "./CalendarPage.scss"

import axios from "axios";

import { useSearchUsersQuery } from 'store/Schedule/Calendar.api'

import moment from "moment";

function CalendarPage() {
    const startWeek = "Начала недели - " + moment().startOf('isoWeek').format('DD/MM/YYYY HH:mm:ss');
    const endWeek = "Конец недели  - " + moment().endOf('isoWeek').format('DD/MM/YYYY HH:mm:ss');


    interface CalendarJson {
        name: string,
        type: string,
        days: number,
        startDay: number,
        deadline: number,
        person: string
    }

    const baseUrl = 'http://127.0.0.1:3001/api/users'

    // const getDoneDataName = () => {
    //     axios.get<CalendarJson[]>(baseUrl)
    //         .then(res => {
    //             for (let i in res.data) {
    //                 console.log(res.data[i])
    //                 const dataItem = res.data[i];
    //                 const storedItem = localStorage.getItem(dataItem.name);
    //                 if (storedItem) {
    //                     //console.log(JSON.parse(storedItem)); // выводим объект JSON из строки, если значение не null
    //                 }
    //             }
    //         })
    //         .catch((error: any) => { // можно указать конкретный тип ошибки, если известен
    //             console.error("Error fetching data: ", error);
    //             return null; // возвращаем null в случае ошибки
    //         });
    // }

    // getDoneDataName();
    console.log();

    const { isLoading, isError, data } = useSearchUsersQuery('i');

    return (
        <div className="calendar-page">
            <div className="calendar-page__date-line">
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

                {/* {Object.entries(object).map(([key, value]) => (
                        <li key={key}>{value}</li>
                ))} */}

                <div className="calendar-cell cell-task"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                {/* <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div>
                <div className="calendar-cell"></div> */}
                {/* <div className="calendar-page__row">
                    <div className="calendar-page__cell">
                        <div className="cell-task">TASK</div>
                    </div>
                    <div className="calendar-page__cell">1</div>
                    <div className="calendar-page__cell">1</div>
                    <div className="calendar-page__cell">1</div>
                    <div className="calendar-page__cell">1</div>
                    <div className="calendar-page__cell">1</div>
                    <div className="calendar-page__cell">1</div>
                </div>
                <div className="calendar-page__row">
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                </div>
                <div className="calendar-page__row">
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                </div>
                <div className="calendar-page__row">
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                </div>
                <div className="calendar-page__row">
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                </div>
                <div className="calendar-page__row">
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                </div>
                <div className="calendar-page__row">
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                    <div className="calendar-page__cell">2</div>
                </div> */}
            </div>
        </div>
    )
}

export default CalendarPage
