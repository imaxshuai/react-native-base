import { Http } from "../utils/http";

// app Login and Register
export const register = (params)=>Http.post('v1/shoppers', params);
export const login = (params)=>Http.post('v1/oauth/token', params);

// user
export const me = (header)=>Http.get('v1/me', null, header);
export const update = (params, header)=>Http.put('v1/me', params, header);
export const qr = (header)=>Http.get('v1/me/qr', null, header);

//notifications
export const notifications = (params, header)=>Http.get('v1/me/notifications', params, header);
export const notificationDetail = (id)=>Http.get('v1/me/notifications/'+id, null, Env.authorization);
export const notificationDelete = (id)=>Http.delete('v1/me/notifications/'+id, null, Env.authorization);
export const systemNotifications = (params, header)=>Http.get('v1/me/notifications/system', params, header);
export const hasNewNotifications = (header)=>Http.get('v1/me/notifications/system/has_new', null, header);

//valid email
export const email = (params)=>Http.post('v1/valid/email', params);
export const resetPassword = (params, header)=>Http.put('v1/me/password', params, header);
export const forgetPasswordOtp = (params)=>Http.post('v1/oauth/password_reset/otps', params);
export const forgetPassword = (params)=>Http.put('v1/oauth/passwords', params);

//otp
export const otp = (params)=>Http.post('v1/oauth/mobile_verification/otps', params);

//receipt
export const submitReceipt = (params, header)=>Http.post('v1/me/receipts', params, header);
export const submitQRReceipt = (params, header)=>Http.post('v1/me/purchase_transactions', params, header);
