import { NativeModules } from 'react-native';

const { RNReactNativeTraceRoute } = NativeModules;
class Traceroute {
  // /**
  //  *
  //  * Get RTT (Round-trip delay time)
  //  *
  //  * @static
  //  * @param {string} ipAddress - For example : 8.8.8.8
  //  * @param {Object} option - Some optional operations
  //  * @param {number} option.timeout - timeout
  //  * @returns
  //  * @memberof Ping
  //  */
  // static async start(ipAddress, option) {
  //   const result = await RNReactNativePing.start(ipAddress, option);
  //   return result;
  // }
  // static async getTrafficStats() {
  //   const result = await RNReactNativePing.getTrafficStats();
  //   return result;
  // }

  /**
   * @static
   * @param {string} hostName host name that need to analyse tracerouting to
   * @returns
   * @memberof Traceroute
   */
  static async start(hostName) {
    return 'some result' + hostName;
  }
}

export default Traceroute;
