/**
 * @author GuYun-D
 * @description 将大驼峰转换成 '-' + 加小驼峰的方式 
 * @param value 
 * @returns 
 */
export const toLine = (value: string) => {
  return value.replace(/(A-Z)/g, '-$1').toLocaleLowerCase()
}