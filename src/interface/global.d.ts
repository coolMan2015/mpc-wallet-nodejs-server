interface RestResponse {
  code: 'success' | 'failed'
  data: any
  message?: string
}