import s from './Chart.module.scss';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { getCurrentLanguage } from '../../../redux/userSettings/userSettingsSelectors';

const Chart = ({ tasks }) => {
  const curLanguage = useSelector(getCurrentLanguage);

  const getperiodArr = () => {
    const daysArr = tasks[0].hoursWastedPerDay.map(day =>
      day.currentDay.slice(5),
    );
    const sortedDaysArr = daysArr.sort(
      (a, b) => new Date(b.date) - new Date(a.date),
    );
    sortedDaysArr.unshift(0);
    return sortedDaysArr;
  };

  const hoursPlanedSum = tasks.reduce(
    (acc, task) => acc + Number(task.hoursPlanned),
    0,
  );
  // планир. затраченные чвсы за день

  const planedHoursArr = []; //[hoursPlanedSum]
  let hoursScheduled = hoursPlanedSum;
  for (let i = 0; i < tasks[0].hoursWastedPerDay.length; i += 1) {
    hoursScheduled =
      hoursScheduled - hoursPlanedSum / tasks[0].hoursWastedPerDay.length;
    planedHoursArr.push(hoursScheduled);
  }

  // const getHoursWastedArr = () => {
  const daysWastedHours = {};
  tasks.forEach(task =>
    task.hoursWastedPerDay.forEach(day => {
      if (daysWastedHours[day.currentDay]) {
        daysWastedHours[day.currentDay] += Number(day.singleHoursWasted);
      } else {
        daysWastedHours[day.currentDay] = Number(day.singleHoursWasted);
      }
    }),
  );
  // фактические затраченные чвсы за день

  const daysWastedHoursArr = []; //[hoursPlanedSum]
  let hoursFact = hoursPlanedSum;
  Object.values(daysWastedHours).forEach(dayWastedHours => {
    hoursFact -= dayWastedHours;
    daysWastedHoursArr.push(hoursFact);
  });

  // возвращает масив для запланировыныхтрудозатрат
  // const mainHoursArr = [];

  // planedHoursArr.forEach((item, index) => {
  //     if (daysWastedHoursArr[index] <= item) {
  //       mainHoursArr.push(daysWastedHoursArr[index])

  //     } else {
  //       mainHoursArr.push(Number(item) / Number(daysWastedHoursArr[index]) + Number(item));
  //     }
  //   }

  // const updateSum = mainHoursArr.reduce(
  //   (acc, hourItem) => acc + Number(hourItem),
  //   0,
  // );
  // const redLine = [];

  // mainHoursArr.forEach(item => {
  //   redLine.push(updateSum - item / item.length);
  // });

  const options = {
    scales: {
      yAxis: {
        min: 0,
      },
    },
  };

  const data = {
    labels: getperiodArr(),
    options: {
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 1000,
              min: 0,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
              max: 8,
              min: -3,
            },
          },
        ],
      },
    },
    datasets: [
      {
        label: curLanguage.tasks.chart.labelone,
        data: [hoursPlanedSum, ...planedHoursArr],
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(255, 0, 81, 1)',
        borderColor: 'rgba(255, 0, 81, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 1,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(255, 0, 81, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 5,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: 'rgba(255, 0, 81, 1)',
        pointHoverBorderColor: 'rgba(255, 0, 81, 1)',
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
      },
      {
        label: curLanguage.tasks.chart.labeltwo,
        data: [hoursPlanedSum, ...daysWastedHoursArr],
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(0, 0, 123, 1)',
        borderColor: 'rgba(0, 0, 123, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(0, 0, 123, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 5,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: 'rgba(0, 0, 123, 1)',
        pointHoverBorderColor: 'rgba(0, 0, 123, 1)',
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
      },
    ],
  };

  return (
    <div className={s.scrol}>
      <div className={s.charContainer}>
        <h2 className={s.charTitle}>Burndown Chart (Calendar team)</h2>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
