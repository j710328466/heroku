/**
 * @author  ZhiXiong Jiang <jiangzhixiong@jimistore.com>
 * @date    2018/05/13
 */
import fetch from 'dva/fetch';
import host from './host';
import MD5 from './MD5'

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * @param  {string} url       请求的接口
 * @param  {object} [options] 请求的配置参数
 * @return {object}           返回 "data" 或者 "err"
 */
export async function BIRequest(url, options) {
  const password = host.BIPwd;
  const appid = 'jimi';
  const userId = navigator.platform;
  const deviceId = navigator.platform;
  const OSVersion = parseFloat(navigator.appVersion);
  const timestamp = new Date().getTime();

  let source = [];
  source.push(appid + '=appId');
  source.push(password + '=password');
  source.push(userId + '=userId');
  source.push(deviceId + '=deviceId');
  source.push(OSVersion + '=OSVersion');
  source.push(timestamp + '=timestamp');
  source = source.sort();

  const sources = source.join('&');
  const signature = MD5(sources);

  const params = {
    method: options.method || 'POST',
    body: options.method === 'GET' ? null : JSON.stringify(options.data),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      appId: appid,
      deviceId: deviceId,
      userId: userId,
      OSVersion: OSVersion,
      timestamp: timestamp,
      signature: signature,
    },
  };

  const response = await fetch(url, params)

  checkStatus(response)

  const data = await response.json()

  return data
}
