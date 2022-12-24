import { getCurrentTime } from "./time-lib.js";
import { Chart} from 'chart.js'

function BlazorGetTime() {
    return getCurrentTime();
}

let chart = new Chart();

export {
    BlazorGetTime
}