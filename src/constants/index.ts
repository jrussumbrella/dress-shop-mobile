export const IS_PROD = !__DEV__;
export const API_URL = IS_PROD
  ? 'https://dress-shop-api.vercel.app/api'
  : 'http://192.168.43.103:5000/api';
