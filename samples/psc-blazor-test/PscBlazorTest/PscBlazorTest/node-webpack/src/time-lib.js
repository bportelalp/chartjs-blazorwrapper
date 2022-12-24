import moment from "moment";

function getCurrentTime() {
    return moment().format();
}

export {
    getCurrentTime
}