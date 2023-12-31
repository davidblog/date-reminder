# date-reminder

## Description

這是一個日期提醒套件，  
可根據設定檔來判定今天是否是一個特別的日子，  
可以同時判定國曆及農曆日期。

## Installation

```
npm i date-reminder
```

## Usage

### Script Include 用法

```html
<script src="./docs/js/date-reminder.js"></script>
<script>
  const dr = dateReminder();
  dr.showConfig(); // 檢視設定檔內容
  dr.showReminder().isReminder; // 檢視今天是否為特別的節日
  dr.showReminder().reminderArray; // 檢視今天有哪一些特別的節日
</script>
```

### ES module 用法

```js
import dateReminder from "date-reminder";

const dr = dateReminder();

// 檢視設定檔內容(底下為目前有的預設內容)
dr.showConfig();

// [{"label":"新年","value":"01/01","type":"solar"},{"label":"情人節","value":"02/14","type":"solar"},{"label":"聖誕節","value":"12/25","type":"solar"},{"label":"春節","value":"01/01","type":"lunar"},{"label":"元宵節","value":"01/15","type":"lunar"},{"label":"端午節","value":"05/05","type":"lunar"},{"label":"中秋節","value":"08/15","type":"lunar"}]

// 檢視今天是否為特別的節日
dr.showReminder();

// {
//     "isReminder": false,
//     "reminderArray": []
// }
```

### Options(自定義節日)

```js
const dr = dateReminder({
    solarConfig = true, // 是否使用預設的國曆節日
    lunarConfig = true, // 是否使用預設的農曆節日
    customConfig = [] // 自定義節日
});

// 自定義節日的格式如下
// type：solar -> value：國曆日期
// type：lunar -> value：農曆日期
const dr = dateReminder({
    customConfig = [{label: '節日名稱', value: 'MM/DD', type: 'solar'}]
});
```

### customConfig 說明

| 屬性  | 型別 | 說明                                 |
| ----- | ---- | ------------------------------------ |
| label | 字串 | 日期名稱                             |
| value | 字串 | 只能使用 MM/DD 格式, 如 01/01, 12/01 |
| type  | 字串 | 國曆為：solar, 農曆為：lunar         |

## Author

- [David Huang 部落格](https://davidblog.github.io)
- [David Huang Github](https://github.com/davidblog)

## License

[MIT](https://choosealicense.com/licenses/mit/)
