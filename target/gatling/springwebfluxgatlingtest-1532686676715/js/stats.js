var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40000",
        "ok": "5622",
        "ko": "34378"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "101",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "62405",
        "ok": "62405",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1582",
        "ok": "11254",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "7183",
        "ok": "16071",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "531",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "21996",
        "ko": "0"
    },
    "percentiles3": {
        "total": "8055",
        "ok": "47952",
        "ko": "0"
    },
    "percentiles4": {
        "total": "42189",
        "ok": "55192",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 3070,
        "percentage": 8
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 69,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2483,
        "percentage": 6
    },
    "group4": {
        "name": "failed",
        "count": 34378,
        "percentage": 86
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "208.333",
        "ok": "29.281",
        "ko": "179.052"
    }
},
contents: {
"req_reactive-reques-c44ca": {
        type: "REQUEST",
        name: "Reactive Request",
path: "Reactive Request",
pathFormatted: "req_reactive-reques-c44ca",
stats: {
    "name": "Reactive Request",
    "numberOfRequests": {
        "total": "40000",
        "ok": "5622",
        "ko": "34378"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "101",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "62405",
        "ok": "62405",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1582",
        "ok": "11254",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "7183",
        "ok": "16071",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "531",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "21996",
        "ko": "0"
    },
    "percentiles3": {
        "total": "8055",
        "ok": "47952",
        "ko": "0"
    },
    "percentiles4": {
        "total": "42189",
        "ok": "55192",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 3070,
        "percentage": 8
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 69,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2483,
        "percentage": 6
    },
    "group4": {
        "name": "failed",
        "count": 34378,
        "percentage": 86
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "208.333",
        "ok": "29.281",
        "ko": "179.052"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
