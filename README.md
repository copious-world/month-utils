# Month Utils

This is a short collection of methods for working with months and timestamps. 

This is not a formatting library. It helps switch between Date objects and timestamps for such needs as finding the first timestamp of the first day of a month when the some later day is known. It is just a few of these kinds of methods.

* Since the small number of methods are common occurring requirements the module proves useful to have for a number of projects. 

* Since the number of methods is few, the module is very short and uses less than 8K of space uncompressed and 4K compressed by terser.

## Install 

For use in node.js projects:

```
npm install i --save month-utils
```

In your node.js program you can access classes in the following manner:

```
const month_utils = require('month-utils')
```

## Web Page Use

A rollup.config.js file has been added to the package. The npm package should be released after running `npm run build`. (That is best effort.)

Builds that use rollup may simply include event-days in their devDependencies field within package.json. It may help to run a second npm install a such:

```
npm install i --save-dev month-utils
```

**Example**: This class is being used in a Svelte project. The module is included in an App.svelte file as follows:

```
import month_utils from 'month-utils'
```

## Constants


* **TWENTY_FOUR**
* **ONE_WEEK**
* **ONE_MONTH**
* **MIN15**
* **MIN30**
* **HOUR**


## Methods

* [`prev_midnight(local_clock_date)`](#prev-midnight)
* [`next_midnight(local_clock_date) `](#next-midnight)
* [`part_of_day(local_clock_date,partial)`](#part_of_day)
* [`hours_of(lapse)`](#hours_of)
* [`calc_days(t_time)`](#calc_days)
* [`in_interval(instant,t_start,t_end)`](#in_interval)
* [`first_day_of_month(a_date)`](#first_day_of_month)
* [`first_day_of_month_ts(timestamp)`](#first_day_of_month_ts)
* [`lower_month_bounday(timestamp)`](#lower_month_bounday)
* [`first_day_of_next_month(a_date)`](#first_day_of_next_month)
* [`first_day_of_next_month_ts(timestamp)`](#first_day_of_next_month_ts)
* [`next_month_start`](#next_month_start)
* [`first_day_of_relative_month(a_date,nth)`](#first_day_of_relative_month)
* [`first_day_of_relative_month_ts(timestamp,nth)`](#first_day_of_relative_month_ts)
* [`same_day(t1,t2)`](#same_day)
* [`day_is_clock_day(a_day,year,month,local_clock_date)`](#day_is_clock_day)
* [`day_is_before_clock_day(a_day,year,month,local_clock_date)`](#day_is_before_clock_day)
* [`day_is_after_clock_day(a_day,year,month,local_clock_date)`](#day_is_after_clock_day)


<a name="prev-midnight" ></a>
#### <u>prev midnight </u>

* Date -> timestamp

> Given a date object for a time on a pariticular day, returns the timestamp of the preceding midnight.

<a name="next-midnight" ></a>
#### <u>next midnight </u>

* Date -> timestamp

> Given a date object for a time on a pariticular day, returns the timestamp of the midnight for the end of the day.


<a name="part_of_day" ></a>
#### <u>part of day </u>

* Date, number -> timestamp

> Given a date object for a time on a pariticular day, returns the timestamp equal to the partial mutiplied by the difference between the next midnight and the prev midnight added to the preceding midnight. That is, the timestamp of a fraction of the day.

<a name="hours_of" ></a>
#### <u>hours of</u>

* timestamp -> number

> Given a timestamp representing a duration, returns the number of hours.

<a name="calc_days" ></a>
#### <u>calc days</u>

* timestamp -> number

> Given a timestamp representing a duration, returns the number of days.

<a name="in_interval" ></a>
#### <u>in interval</u>

* timestamp, timestamp, timestamp -> boolean

> Given a timestamp representing an instant of time, a start time and an end time for an interval, returns true if the instant is in the interval.


<a name="first_day_of_month" ></a>
#### <u>first day of month</u>

* Date-> timestamp

> Given a Date representation of a point in time, returns the timestamp of the midnight starting the first day of the month containing the point in time.


<a name="first_day_of_month_ts" ></a>
#### <u>first day of month ts</u>

* timestamp-> timestamp

> The same as <u>first day of month</u> but this takes a timestamp representation of the point in time.


<a name="lower_month_bounday" ></a>
#### <u>lower month bounday</u>

* timestamp-> timestamp

> Alias for <u>first day of month ts</u>.


<a name="first_day_of_next_month" ></a>
#### <u>first day of next month</u>

* Date-> timestamp

> Given a Date representation of a point in time, returns the timestamp of the midnight starting the first day of the next month not containing the point in time.


<a name="first_day_of_next_month_ts" ></a>
#### <u>first day of next month ts</u>

* timestamp-> timestamp

> The same as <u>first day of next month</u> but this takes a timestamp representation of the point in time.


<a name="next_month_start" ></a>
#### <u>lower month bounday</u>

* timestamp-> timestamp

> Alias for <u>first day of next month ts</u>.


<a name="first_day_of_relative_month" ></a>
#### <u>first day of relative month</u>

* Date, number -> timestamp

> Given a Date representation of a point in time, returns the timestamp of the midnight starting the first day of the nth (number) beyond the month containing the point in time.

<a name="first_day_of_relative_month_ts" ></a>
#### <u>first day of relative month ts</u>

* timestamp, number-> timestamp

> The same as <u>first day of relative month</u> but this takes a timestamp representation of the point in time.

<a name="same_day" ></a>
#### <u>same day</u>

* timestamp, timestamp-> boolean

> Returns true if the two timestamps have the same date.


<a name="day_is_clock_day" ></a>
#### <u>day is clock day </u>

* number, number, number,  Date -> boolean

> (day, year month, Date) returns true if the day given is the same day as the Date's day.


<a name="day_is_before_clock_day" ></a>
#### <u>day is before clock day </u>

* number, number, number,  Date -> boolean

> (day, year month, Date) returns true if the day given is less than the day that is the Date's day where the time is taken from the midnight before the day.


<a name="day_is_after_clock_day" ></a>
#### <u>day is after clock day </u>

* number, number, number,  Date -> boolean

> (day, year month, Date) returns true if the day given is greater than the day that is the Date's day where the time is taken from the midnight ending the day.


