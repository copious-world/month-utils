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
* [`next_midnight(local_clock_date) `](#timeline-injest-month)
* [`part_of_day(local_clock_date,partial)`](#timeline-injest-month)
* [`hours_of(lapse)`](#timeline-injest-month)
* [`calc_days(t_time)`](#timeline-injest-month)
* [`in_interval(instant,t_start,t_end)`](#timeline-injest-month)
* [`first_day_of_month(a_date)`](#timeline-injest-month)
* [`first_day_of_month_ts(timestamp)`](#timeline-injest-month)
* [`lower_month_bounday(timestamp)`](#timeline-injest-month)
* [`first_day_of_next_month(a_date)`](#timeline-injest-month)
* [`first_day_of_next_month_ts(timestamp)`](#timeline-injest-month)
* [`next_month_start`](#timeline-injest-month)
* [`first_day_of_relative_month(a_date)`](#timeline-injest-month)
* [`first_day_of_relative_month_ts(timestamp)`](#timeline-injest-month)
* [`same_day(t1,t2)`](#timeline-injest-month)
* [`day_is_clock_day(a_day,year,month,local_clock_date)`](#timeline-injest-month)
* [`day_is_before_clock_day(a_day,year,month,local_clock_date)`](#timeline-injest-month)
* [`day_is_after_clock_day(a_day,year,month,local_clock_date)`](#timeline-injest-month)


#### <u>prev midnight </u>

> Given a start time for a month, this method will either create or locate a data structure. If the month was not previously fetched, the month will be fetched with the month fetcher method.

