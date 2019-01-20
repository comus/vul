export const IS_PROD = process.env.NODE_ENV === 'production'
export const API_URL = IS_PROD
  ? 'https://vul.now.sh/api'
  : 'http://localhost:3000/api'
