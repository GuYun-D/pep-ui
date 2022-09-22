import { ElMessage } from 'element-plus'

/**
 * @description 复制操作
 * @param text 
 */
export const useCopy = (text: string) => {
  let input = document.createElement('input')
  input.value = text
  document.body.appendChild(input)
  input.select()
  document.execCommand('Copy')
  document.body.removeChild(input)
  ElMessage.success('复制成功')
}