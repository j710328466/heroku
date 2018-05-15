import { BIRequest } from '../utils/request'
import host from '../utils/host'

export function login(options) {
  return BIRequest(`${host.devUrl}/api/biwork/service/userPlus/login/v1`, options)
}