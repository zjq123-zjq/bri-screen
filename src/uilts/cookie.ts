import Cookie from 'js-cookie'

const TOKEN_key = 'token_key'
//设置Token
export const setToken = (value: string) => {
  Cookie.set(TOKEN_key, value)
}
//获取Token
export const getToken = () => {
  return Cookie.get(TOKEN_key)
}

//删除Token
export const removeToken = () => {
  Cookie.remove(TOKEN_key)
}
