
const now = new Date();

// 見積書の有効期限を割り出す
export const limitTime = time => {
    let limitTime = Date.parse(time),
        nowTime = Date.parse(now);

    if(nowTime < limitTime) {
        let l = limitTime - nowTime,
            d = l / (1000 * 60 * 60 * 24),
            day = Math.floor(d),

            h = (l - (day * 86400000)) / 3600000,
            hour = Math.floor(h),

            m = ((l - ((day * 86400000) - (hour * 3600000))) / 3600000 ),
            minutes = Math.floor(m),

            limit = '（残り' + day + '日と' + hour + '時間' +  minutes + '分)';

        return limit
    }

    return
};

// 曜日を割り出す
export const getWeekName = data => {
    let weekChars = ["日", "月", "火", "水", "木", "金", "土"],
        issuedAt = Date.parse(data),
        obj = new Date(issuedAt),
        wDay = obj.getDay();

    return weekChars[wDay]
};