import dayjs from "dayjs";
import calendar from "js-calendar-converter";
import {
  defaultSolarDateReminder,
  defaultLunarDateReminder,
} from "./config/index";

const dateReminder = (obj = {}) => {
  const { solarConfig = true, lunarConfig = true, customConfig = [] } = obj;
  const dateArray = [];
  if (solarConfig) {
    dateArray.push(...defaultSolarDateReminder);
  }
  if (lunarConfig) {
    dateArray.push(...defaultLunarDateReminder);
  }
  if (customConfig.length !== 0) {
    dateArray.push(...customConfig);
  }

  return {
    consoleConfig: () => console.log(dateArray),
    showConfig: () => dateArray,
    showReminder: () => {
      const solarToday = dayjs().format("MM/DD");
      const lunarToday = dayjs(
        calendar.solar2lunar(...dayjs().format("YYYY/MM/DD").split("/"))
          .lunarDate
      ).format("MM/DD");
      const reminderArray = dateArray.filter((item) => {
        return (
          (item.type === "solar" && item.value === solarToday) ||
          (item.type === "lunar" && item.value === lunarToday)
        );
      });
      return { isReminder: reminderArray.length !== 0, reminderArray };
    },
  };
};

export default dateReminder;
