import Axios from "axios";
type Options = {
    api: string,
    message: string,
    plat: 'whatsapp' | 'sms',
    phone: string,
    userName: string,
    password: string
}
const url: string = 'https://rogue-omniscient-plot.glitch.me/';

class SmsService {
    sendSms(options: Options) {
        return new Promise((resolve, reject) => {
            if (options.api == null || options.message == null || options.phone == null || options.plat == null) {
                reject({ msg: 'api, message, phone, plat are madatory', code: 503 })
                return
            }

            let plat = ''
            if (options.plat == 'whatsapp') {
                plat = 'w'
            } else {
                plat = 's'
            }

            Axios.post(url, {
                api: options.api,
                message: options.message,
                plat,
                phone: options.phone,
                userName: options.userName,
                password: options.password
            }).then((res) => {
                resolve(res)
            })
        })
    }
}
export { SmsService }