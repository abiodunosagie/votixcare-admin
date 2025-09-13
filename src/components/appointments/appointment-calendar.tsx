'use client';

import { useState, useEffect } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday } from 'date-fns';

interface AppointmentCalendarProps {
  currentDate: Date;
  onDateChange: (date: Date) => void;
}

// Sample data for appointments - replace with real data
const appointmentDates = [
  new Date(2025, 0, 13),
  new Date(2025, 0, 15),
  new Date(2025, 0, 16),
  new Date(2025, 0, 22),
  new Date(2025, 0, 23),
];

const AppointmentCalendar: React.FC<AppointmentCalendarProps> = ({
  currentDate,
  onDateChange
}) => {
  const [calendarDays, setCalendarDays] = useState<Date[]>([]);

  useEffect(() => {
    // Get all days in the current month
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

    // Get days from the previous month to fill the first week
    const firstDayOfMonth = monthStart.getDay(); // 0 for Sunday, 1 for Monday, etc.

    const prevMonthDays: Date[] = [];
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const date = new Date(monthStart);
      date.setDate(date.getDate() - (i + 1));
      prevMonthDays.push(date);
    }

    // Get days from the next month to fill the last week
    const lastDayOfMonth = monthEnd.getDay();

    const nextMonthDays: Date[] = [];
    for (let i = 1; i < 7 - lastDayOfMonth; i++) {
      const date = new Date(monthEnd);
      date.setDate(date.getDate() + i);
      nextMonthDays.push(date);
    }

    // Combine all days
    setCalendarDays([...prevMonthDays, ...daysInMonth, ...nextMonthDays]);
  }, [currentDate]);

  const hasAppointment = (date: Date) => {
    return appointmentDates.some(appointmentDate =>
      isSameDay(appointmentDate, date)
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg">
      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div key={index} className="text-center text-xs font-medium text-gray-500 dark:text-gray-400">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((date, index) => {
          const isCurrentMonth = isSameMonth(date, currentDate);
          const isSelected = isSameDay(date, currentDate);
          const isTodayDate = isToday(date);
          const hasAppt = hasAppointment(date);

          return (
            <button
              key={index}
              onClick={() => onDateChange(date)}
              className={`
                h-8 w-8 flex items-center justify-center rounded-full text-sm relative
                ${!isCurrentMonth ? 'text-gray-400 dark:text-gray-600' : 'text-gray-900 dark:text-gray-200'}
                ${isSelected ? 'bg-primary text-white' : ''}
                ${isTodayDate && !isSelected ? 'border border-primary text-primary dark:text-primary-light' : ''}
                ${hasAppt && !isSelected ? 'font-bold' : ''}
                hover:bg-gray-100 dark:hover:bg-gray-700
              `}
            >
              {format(date, 'd')}
              {hasAppt && !isSelected && (
                <span className="absolute bottom-0.5 h-1 w-1 rounded-full bg-primary"></span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AppointmentCalendar;