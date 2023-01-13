import dayjs from "dayjs";
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(weekOfYear)

export function getWeek(week) {
//   week = Math.floor(week);
//   const year = dayjs().year();
//   const firstDayOfTheWeek = dayjs(new Date(year, 0, 1)).day();
//   let currentWeekCount = 0 - firstDayOfTheWeek;
//   const daysMatrix = new Array(5).fill([]).map(() => {
//     return new Array(7).fill(null).map(() => {
//         currentWeekCount++;
//       return dayjs(new Date(year, 0, currentWeekCount));
//     });
//   });
    console.log(dayjs().week())
  return 0;
}
