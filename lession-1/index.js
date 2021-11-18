/*
data - значение даты/времени в любом формате (hh-dd-mm-yyyy; mm-hh-dd-mm-yyyy; ss-mm-hh-dd-mm-yyyy)
*/

let data = process.argv;
const time = [];

for (i = 2; i <= data.length - 1; i++) {
    console.log(reverseString(data[i]));
    time.push(timer(reverseString(data[i])));
}

console.log(time[0]);
if (time[0] == undefined) {
    return console.log("Вы не задали таймер");
}
if (isNaN(time[0])) {
    return console.log("Вы не верно задали дату");
}

function timer(data) {
    const start = Date.now();
    const end = new Date(data);
    return end - start;
}

function reverseString(str) {
    str = str.split("-").reverse();
    if (str.length == 4) {
        return str = str[0] + "-" + str[1] + "-" + str[2] + "T" + str[3] + ":00:00";
    }
    if (str.length == 5) {
        return str = str[0] + "-" + str[1] + "-" + str[2] + "T" + str[3] + ":" + str[4] + ":00";
    }
    if (str.length == 6) {
        return str = str[0] + "-" + str[1] + "-" + str[2] + "T" + str[3] + ":" + str[4] + ":" + str[5];
    }
    return str.join("-");
}

let n = 1;
const runTimer = async (time) => {
    console.log("Осталось ", parseInt(time / 1000), "секунд до конца таймера");
    await new Promise(resolve => setTimeout(resolve, 1000))
    time = time - 1000;
    if (parseInt(time / 1000) == 0) {
        return console.log("Таймер ", n++, "закончил свою работу")
    } else await runTimer(time);
}

for (i = 0; i <= time.length - 1; i++) {
    if (time[i] < 0) {
        return console.log("Ваша дата уже истекла");
    }
    runTimer(time[i]);
}