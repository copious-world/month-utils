// ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

const TWENTY_FOUR = 24*3600*1000
const ONE_WEEK = 7*TWENTY_FOUR
const ONE_MONTH = 4*ONE_WEEK
const MIN15 = 15*60*1000
const MIN30 = 30*60*1000
const HOUR = 3600*1000



// next_midnight -> timestamp
function next_midnight(local_clock_date) {
    let lc_time = new Date(local_clock_date)
    let next_time = lc_time + TWENTY_FOUR
    let nextDay = new Date(next_time)
    let midnight_tmwr = new Date(nextDay.getFullYear(),nextDay.getMonth(),nextDay.getDate())
    return midnight_tmwr.getTime()
}

// prev_midnight -> timestamp
function prev_midnight(local_clock_date) {
    let lc_time = new Date(local_clock_date)
    let startDay = new Date(lc_time)
    let midnight_lastnight = new Date(startDay.getFullYear(),startDay.getMonth(),startDay.getDate())
    return midnight_lastnight.getTime()
}

function part_of_day(local_clock_date,partial) {
    if ( typeof partial !== 'number' ) return NaN
    let day_start = prev_midnight(local_clock_date)
    let day_end = next_midnight(local_clock_date)
    let time_point = Math.round(day_start + (day_end - day_start)*partial)
    return time_point
}


// day_is_today -> boolean
function day_is_clock_day(a_day,year,month,local_clock_date) {
    let lc_year = local_clock_date.getFullYear()
    let lc_month = local_clock_date.getMonth()
    let lc_day = local_clock_date.getDate()
    if ( lc_year !== year ) return false
    if ( lc_month !== month ) return false
    if ( lc_day !== a_day.day ) return false
    return true
}


// day_is_before_today -> boolean
function day_is_before_clock_day(a_day,year,month,local_clock_date) {
    let lc_year = local_clock_date.getFullYear()
    let lc_month = local_clock_date.getMonth()
    let lc_day = local_clock_date.getDate()
    //
    let day_date = new Date(lc_year,lc_month,lc_day)
    //
    let c_time = day_date.getTime()
    let b_date = new Date(year,month,a_day)
    let b_time = b_date.getTime()
    //
    if ( b_time < c_time ) {
        return true
    }
    //
    return false
}


// day_is_after_today -> boolean
function day_is_after_clock_day(a_day,year,month,local_clock_date) {
    let lc_year = local_clock_date.getFullYear()
    let lc_month = local_clock_date.getMonth()
    let lc_day = local_clock_date.getDate()
    //
    let day_date = new Date(lc_year,lc_month,lc_day)
    //
    let c_time = day_date.getTime()
    let b_date = new Date(year,month,a_day)
    let b_time = b_date.getTime()
    //
    if ( b_time > c_time ) {
        return true
    }
    //
    return false
}


// hours_of
function hours_of(lapse) {
    let hrs = ((lapse/1000)/3600)
    return hrs
}

// calc_days -> number
function calc_days(t_time) {
    let days = Math.trunc((t_time/1000)/3600/24)
    return days
}

// same_day -> boolean
function same_day(t1,t2) {
    return (new Date(t1).getDate() === (new Date(t2).getDate()))
}

// first_day_of_month -> timestamp
function first_day_of_month(a_date) {
    // a_date should be a Date object
    let mo = a_date.getMonth()
    let year = a_date.getFullYear()

    let nd = new Date(year,mo)
    let t = nd.getTime()
    return t
}


// first_day_of_next_month -> timestamp
function first_day_of_next_month(a_date) {
    // a_date should be a Date object
    let mo = a_date.getMonth()
    let year = a_date.getFullYear()

    mo = (mo + 1) % 12
    if ( mo === 0 ) year++

    let nd = new Date(year,mo)
    let t = nd.getTime()
    return t
}


// first_day_of_relative_month -> timestamp
function first_day_of_relative_month(a_date,mo_offset) {
    // a_date should be a Date object
    let mo = a_date.getMonth()
    let year = a_date.getFullYear()
    //
    if ( mo_offset !== 0 ) {
        let mm = mo + mo_offset
        if ( mo_offset > 0 ) {
            if ( mm > 12 ) {
                let yoffset = Math.trunc((mm - 12)/12) + 1
                year += yoffset
                mo = mm % 12
            } else {
                mo = mm
            }
        } else {
            if ( mm < 0 ) {
                mo = (mm % 12) + 12
                let yoffset = Math.trunc((mo_offset - mo)/12)
                year += yoffset
            } else {
                mo = mm
            }
        }
    }
    
    let nd = new Date(year,mo)
    let t = nd.getTime()
    return t
}



// ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

//
// in_interval -> boolean
function in_interval(instant,t_start,t_end) {
    //console.log("in_interval",instant,t_start,t_end)
    if ( (t_start <= instant) && (instant <= t_end) ) return true
    return false
}



// ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

// first_day_of_month_ts -> timestamp
function first_day_of_month_ts(timestamp) {
    let a_date = new Date(timestamp)
    return first_day_of_month(a_date)
}


// lower_month_bounday -> timestamp
function lower_month_bounday(a_time) {
    return first_day_of_month_ts(a_time)
}


// first_day_of_next_month_ts -> timestamp
function first_day_of_next_month_ts(timestamp) {
    let a_date = new Date(timestamp)
    return first_day_of_next_month(a_date)
}


// next_month_start -> timestamp
function next_month_start(a_time) {
    return first_day_of_next_month_ts(a_time)
}


// first_day_of_relative_month_ts -> timestamp
function first_day_of_relative_month_ts(timestamp,mo_offset) {
    let a_date = new Date(timestamp)
    return first_day_of_relative_month(a_date)
}


// ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

//
module.exports.prev_midnight = prev_midnight
module.exports.next_midnight = next_midnight
module.exports.part_of_day = part_of_day
//
module.exports.hours_of = hours_of
module.exports.calc_days = calc_days
module.exports.same_day = same_day
module.exports.first_day_of_month = first_day_of_month
module.exports.first_day_of_next_month = first_day_of_next_month
module.exports.in_interval = in_interval
module.exports.next_month_start = next_month_start
module.exports.first_day_of_relative_month = first_day_of_relative_month
module.exports.lower_month_bounday = lower_month_bounday
//
module.exports.first_day_of_month_ts = first_day_of_month_ts
module.exports.first_day_of_next_month_ts = first_day_of_next_month_ts
module.exports.first_day_of_relative_month_ts = first_day_of_relative_month_ts
//
module.exports.day_is_clock_day = day_is_clock_day
module.exports.day_is_before_clock_day = day_is_before_clock_day
module.exports.day_is_after_clock_day = day_is_after_clock_day
//
module.exports.TWENTY_FOUR = TWENTY_FOUR
module.exports.ONE_WEEK = ONE_WEEK
module.exports.ONE_MONTH = ONE_MONTH
module.exports.MIN15 = MIN15
module.exports.MIN30 = MIN30
module.exports.HOUR = HOUR
//

