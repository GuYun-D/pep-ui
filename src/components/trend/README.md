# Trend 组件

> 用于表示某个 `属性` 的变化趋势

`props`

| prop name     | description                                   | type    | values        | default / require |
| ------------- | --------------------------------------------- | ------- | ------------- | ----------------- |
| type          | 标记当前趋势是上升还是下降                    | String  | `up` / `down` | `up`              |
| text          | 趋势显示的文字                                | String  | -             | -                 |
| downIcon      | 下降趋势的图标                                | String  | -             | ArrowDown         |
| upIocn        | 上升趋势图标                                  | String  | -             | ArrowUp           |
| upIconColor   | 上升趋势箭头颜色                              | String  | -             | `#f5222d`         |
| downIconColor | 下降趋势箭头颜色                              | String  | -             | `#52c41a`         |
| reverseColor  | 是否反转颜色,自定义颜色将会失效，因为没有意义 | Boolean | -             | `false`           |
| upTextColor   | 上升趋势文本颜色                              | String  | -             | `false`           |
| downTextColor | 下降趋势文本颜色                              | String  | -             | `false`           |


`slot`

| slot name | description | type | values | default / require |
| --------- | ----------- | ---- | ------ | ----------------- |
| defaule   | 默认的文本  | -    | -      | -                 |
