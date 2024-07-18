import { useState } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
  eachDayOfInterval,
  isWithinInterval
} from 'date-fns';

const holidays = {
  '2024-01-01': 'New Year\'s Day',
  '2024-12-25': 'Christmas Day',
  // Add more holidays here
};

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [leaves, setLeaves] = useState([]);
  const [leaveRange, setLeaveRange] = useState({ start: null, end: null });

  const renderHeader = () => {
    const dateFormat = 'MMMM yyyy';

    return (
      <div className="flex justify-between items-center py-2">
        <div>
          <button onClick={prevMonth} className="text-blue-600">
            Prev
          </button>
        </div>
        <div>
          <span className="text-xl font-semibold text-blue-600">
            {format(currentMonth, dateFormat)}
          </span>
        </div>
        <div>
          <button onClick={nextMonth} className="text-blue-600">
            Next
          </button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const dateFormat = 'EEEE';
    const startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-xs font-semibold text-center">
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="grid grid-cols-7">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = 'd';
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        const dateStr = format(day, 'yyyy-MM-dd');

        const isHoliday = holidays[dateStr];
        const isLeave = leaves.some(leave =>
          isWithinInterval(day, { start: new Date(leave.start), end: new Date(leave.end) })
        );

        days.push(
          <div
            className={`p-4 text-center cursor-pointer border ${!isSameMonth(day, monthStart)
              ? 'text-gray-400'
              : isSameDay(day, selectedDate)
                ? 'bg-blue-500 text-white'
                : 'text-black'
              } ${isHoliday ? 'bg-yellow-100' : ''} ${isLeave ? 'bg-blue-100' : ''}`}
            key={day}
            onClick={() => onDateClick(cloneDay)}
          >
            <span>{formattedDate}</span>
            <div>
              {isHoliday && (
                <div className="text-xs mt-1">{holidays[dateStr]}</div>
              )}
            </div>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div>{rows}</div>;
  };

  const onDateClick = (day) => {
    const dateStr = format(day, 'yyyy-MM-dd');

    if (!leaveRange.start) {
      setLeaveRange({ start: day, end: null });
    } else {
      const newLeave = {
        start: leaveRange.start,
        end: day
      };

      const updatedLeaves = leaves.filter(leave => {
        const leaveStart = new Date(leave.start);
        const leaveEnd = new Date(leave.end);
        return !isWithinInterval(day, { start: leaveStart, end: leaveEnd });
      });

      if (updatedLeaves.length === leaves.length) {
        setLeaves([...leaves, newLeave]);
      } else {
        setLeaves(updatedLeaves);
      }

      setLeaveRange({ start: null, end: null });
    }
    setSelectedDate(day);
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
    <div>
      <div>
        <h1 className=' text-blue-600 text-center' >Your Absence Table</h1>
      </div>
    <div className="mt-24 w-full flex items-center justify-center light:bg-gray-100">
      
      <div className=" rounded-lg shadow-md p-4 w-full max-w-6xl">
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>
    </div>
    </div>
  );
};

export default Calendar;
