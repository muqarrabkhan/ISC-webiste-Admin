import crypto from 'crypto';

let key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456',
    iv = '1234567890Abcdef';
key = crypto.createHash('md5').update(key).digest("hex");

export const createSlug = (title) => {
    let slug = title.replace(/[^a-zA-Z ]/g, "");
    slug = slug.replace(/\s+/g, "-").toLowerCase();
    return slug;
};

export const getParams = function (url) {
    let params = {};
    let parser = document.createElement('a');
    parser.href = url;
    let query = parser.search.substring(1);
    let vars = query.split('&');
    if (vars[0] !== "") {
        for (let i = 0; i < vars.length; i++) {
            let pair = vars[i].split('=');
            params[pair[0]] = decodeURIComponent(pair[1]);
        }
    }
    else {
        return null;
    }
    return params;
};


export const standardDate = (dat) => {
    const newDate = new Date(dat);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let time = formatAMPM(newDate);
    let hours12 = newDate.toLocaleString('en-US', {hour: 'numeric', hour12: true});
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    let dayName = days[newDate.getDay()];
    let dateNumber = ("0" + newDate.getDate()).slice(-2);
    let monthName = months[newDate.getMonth()];
    let monthNumber = ("0" + (newDate.getMonth() + 1)).slice(-2);
    let fullYear = newDate.getFullYear();
    let standardDate = monthNumber + "-" + dateNumber + "-" + fullYear;
    return {
        standardDate: standardDate,
        time: time,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        hours12: hours12,
        dayName: dayName,
        dateNumber: dateNumber,
        monthName: monthName,
        monthNumber: monthNumber,
        fullYear: fullYear
    };
};

function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let beautifiedTime = hours + ':' + minutes + ' ' + ampm;
    return beautifiedTime;
}

export const RestructorData = (data, len) => {
    let i = 0, size = 0;
    let newData = [];
    let main = [];
    while (i <= data.length) {
        if (size < len) {
            if (data[i] !== undefined)
                main.push(data[i]);
            size++;
            i++;
        }
        else {
            size = 0;
            newData.push(main);
            main = [];
        }
    }
    if (main.length !== 0) {
        newData.push(main);
    }
    return newData;
};

export const getTagsIds = (tags) => {
    return tags.map(a => a.id);
};

export const resetTags = (tags) => {
    let main = [];
    tags.forEach(single => {
        main.push({
            id: single.id
        })
    });
    return main;
};


export const decrypt = (_string) => {
    let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv),
        buffer = Buffer.concat([
            decipher.update(Buffer.from(_string, 'base64')),
            decipher.final()
        ]);
    return buffer.toString();
};

export const decryptObj = (obj) => {
    for (let key in obj) {
        obj[key] = decrypt(obj[key]);
    }
    return obj;
};


export const getRoutes = (type) => {
    switch(type){
        case "speciality":
            return "/specialities";
        case "blog":
            return "/blog/tags";
        case "event":
            return "/event/tags";
        case "news":
            return "/news/tags";
        default:
            return;
    }
}


