const queryString = require('query-string');
const {curly} = require('node-libcurl');

class Helper {
    static parseHeader(headers = {}) {
        let headersArrays = [];
        for (let key in headers) {
            headersArrays.push(`${key}: ${headers[key]}`)
        }
        return headersArrays;
    }

    static parseData(options = {}) {
        if (options?.json) {
            return JSON.stringify(options.json)
        }
        if (options?.data) {
            return queryString.stringify(options?.data)
        }
        return options?.raw || "";
    }

    // static parseQueryString(options={}){
    //     return JSON.stringify(options.json || options.data | options.json )
    // }
    static responseData(data) {
        try {
            return JSON.parse(data?.toString('utf-8'))
        } catch (e) {
            return data;
        }
    }
}

class FreeHttpclient {
    static async post(url, options = {
        headers: {},
        json: {},
        form: {},
        raw: {}
    }) {
        const httpHeader = Helper.parseHeader(options?.headers);
        const postFields = Helper.parseData(options);
        const {statusCode, data, headers} = await curly.post(url, {
            postFields: postFields,
            httpHeader: httpHeader
            ,
        })
        return {
            status: statusCode,
            data: Helper.responseData(data),
            headers: headers
        }

    }
    static async put(url, options = {
        headers: {},
        json: {},
        form: {},
        raw: {}
    }) {
        const httpHeader = Helper.parseHeader(options?.headers);
        const postFields = Helper.parseData(options);
        const {statusCode, data, headers} = await curly.put(url, {
            postFields: postFields,
            httpHeader: httpHeader
            ,
        })
        return {
            status: statusCode,
            data: Helper.responseData(data),
            headers: headers
        }

    }

    static async get(url, options = {
        headers: {}
    }) {
        const httpHeader = Helper.parseHeader(options?.headers);
        const {statusCode, data, headers} = await curly.get(url, {
            httpHeader: httpHeader,
        })
        return {
            status: statusCode,
            data: Helper.responseData(data),
            headers: headers
        }

    }

    static async delete(url, options = {
        headers: {}
    }) {
        const httpHeader = Helper.parseHeader(options?.headers);
        const {statusCode, data, headers} = await curly.delete(url, {
            httpHeader: httpHeader,
        })
        return {
            status: statusCode,
            data: Helper.responseData(data),
            headers: headers
        }

    }
}


module.exports = FreeHttpclient;