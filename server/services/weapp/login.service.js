const {
    BaseService
} = require('xc-core');
const axios = require('axios')
const {Biz} = require('./config')
const WXBizDataCrypt = require('./WXBizDataCrypt')

class LoginService extends BaseService {

    constructor(app) {
        super(app);
        this.person = app.$dbs.primary.person;
        this.family = app.$dbs.primary.family;
    }

    async login(req, res) {
        let query = req.query
        const code = query.code
        const appid = Biz.WXAppId
        const secret = Biz.WXSecret

        const url = "https://api.weixin.qq.com/sns/jscode2session"
        const httpsUrl = url + "?appid=" + appid + "&secret=" + secret + "&js_code=" + code + "&grant_type=authorization_code"

        let data = (await axios.get(httpsUrl)).data
        // ok
        // {
        //      "session_key": "2wubyh1azlEK4F5TN6rUhg==",
        //      "expires_in": 7200,
        //      "openid": "o27fs0C1oKUw8tpL9y0Hry9-DgDc"
        // }
        // error
        // {
        //      "errcode": 40029,
        //      "errmsg": "invalid code, hints: [ req_id: QGMFL14ce-ZvS ]"
        // }
        console.log(data)
        let person = {}
        if (data.openid) {
            req.query.where = '(openid,eq,' + data.openid + ')'
            req.query.fields = 'id,name,mobile_phone'
            // person = await this.person.findOne(req.query);
            let personList
            personList = await this.person.hasManyList({
                ...req.query,
                childs: `family.familyitem`
            })
            console.log('hasManyList:', personList)
            if (personList.length > 0) {
                person = personList[0]
            } else {
                return {}
            }

            if (!person.id) {
                const newPerson = {openid: data.openid, session_key: data.session_key}
                person = await this.person.insert(newPerson);
                console.log('insert:', person)
                data.person = person
            } else {
                const updatePerson = {}
                updatePerson.session_key = data.session_key
                const r = await this.person.updateByPk(person.id, updatePerson);
                console.log('updateByPk:', r)
                data.person = person
            }
        }
        return data || {}
    }

    async getUserInfo(req, res) {
        // console.log(req.body)
        const appId = Biz.WXAppId
        let sessionKey = req.body.session_key
        const encryptedData = req.body.encryptedData
        const iv = req.body.iv

        const pc = new WXBizDataCrypt(appId, sessionKey)
        const data = pc.decryptData(encryptedData, iv)
        delete data.watermark
        console.log('解密后 data: ', data)
        return data
    }

}

module.exports = LoginService;