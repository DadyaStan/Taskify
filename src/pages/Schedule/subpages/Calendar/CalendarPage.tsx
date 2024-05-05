import { ReactNode, useState } from "react";
import axios from "axios";
import moment from "moment";

import "./CalendarPage.scss";

import "components/CalendarCell/CalendarCell";

import { useSearchUsersQuery } from 'store/api/Calendar.api';
import CalendarCell from "components/CalendarCell/CalendarCell";
import CurrentWeek from "components/CurrentWeek/CurentWeek";

function CalendarPage() {
    const startWeek = "Начала недели - " + moment().startOf('isoWeek').format('DD/MM/YYYY HH:mm:ss');
    const endWeek = "Конец недели  - " + moment().endOf('isoWeek').format('DD/MM/YYYY HH:mm:ss');

    const currentDay = [1, 2, 3, 4, 5, 6, 7];
    const currentLine = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    interface CalendarJson {
        name: string,
        type: string,
        days: number,
        startDay: number,
        deadline: number,
        person: string
    }
    const tasksArr: any[] = [];
    const baseUrl = 'https://mocki.io/v1/14fed5ad-31b9-4f69-a4f9-fcc2f4756456'

    const getTasks = () => {
        axios.get<CalendarJson[]>(baseUrl)
            .then(res => {
                for (let i in res.data) {
                    tasksArr.push(res.data[i])
                }
            })
            .catch((error: any) => { // можно указать конкретный тип ошибки, если известен
                console.error("Error fetching data: ", error);
                return null; // возвращаем null в случае ошибки
            });
    }

    getTasks()
    console.log(tasksArr)

    // const { isLoading, isError, data } = useSearchUsersQuery('i');

    return (
        <div className="calendar-page">
            <CurrentWeek />
            <div className="calendar-page__workflow">

                {currentLine.map((line) => currentDay.map((day) => <CalendarCell day={day} line={line} tasksArr={tasksArr}/>))}

            
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
