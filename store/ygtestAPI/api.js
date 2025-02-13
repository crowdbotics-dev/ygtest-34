import axios from "axios"
const ygtestAPI = axios.create({
  baseURL: "https://ygtest1-34.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return ygtestAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return ygtestAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return ygtestAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_ubvfg_list(payload) {
  return ygtestAPI.get(`/api/v1/ubvfg/`)
}
function api_v1_ubvfg_create(payload) {
  return ygtestAPI.post(`/api/v1/ubvfg/`, payload)
}
function api_v1_ubvfg_retrieve(payload) {
  return ygtestAPI.get(`/api/v1/ubvfg/${payload.id}/`)
}
function api_v1_ubvfg_update(payload) {
  return ygtestAPI.put(`/api/v1/ubvfg/${payload.id}/`, payload)
}
function api_v1_ubvfg_partial_update(payload) {
  return ygtestAPI.patch(`/api/v1/ubvfg/${payload.id}/`, payload)
}
function api_v1_ubvfg_destroy(payload) {
  return ygtestAPI.delete(`/api/v1/ubvfg/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return ygtestAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return ygtestAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return ygtestAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return ygtestAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return ygtestAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return ygtestAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return ygtestAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return ygtestAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return ygtestAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return ygtestAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return ygtestAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_ubvfg_list,
  api_v1_ubvfg_create,
  api_v1_ubvfg_retrieve,
  api_v1_ubvfg_update,
  api_v1_ubvfg_partial_update,
  api_v1_ubvfg_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
