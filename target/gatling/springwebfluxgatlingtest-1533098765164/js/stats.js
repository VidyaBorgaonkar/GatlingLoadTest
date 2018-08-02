var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40000",
        "ok": "6518",
        "ko": "33482"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "101",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "61404",
        "ok": "61404",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1426",
        "ok": "8754",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "6477",
        "ok": "13903",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "320",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "13913",
        "ko": "0"
    },
    "percentiles3": {
        "total": "6915",
        "ok": "39725",
        "ko": "0"
    },
    "percentiles4": {
        "total": "36266",
        "ok": "55598",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 3727,
        "percentage": 9
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 26,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2765,
        "percentage": 7
    },
    "group4": {
        "name": "failed",
        "count": 33482,
        "percentage": 84
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "232.558",
        "ok": "37.895",
        "ko": "194.663"
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
        "ok": "6518",
        "ko": "33482"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "101",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "61404",
        "ok": "61404",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1426",
        "ok": "8754",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "6477",
        "ok": "13903",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "320",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "13913",
        "ko": "0"
    },
    "percentiles3": {
        "total": "6915",
        "ok": "39725",
        "ko": "0"
    },
    "percentiles4": {
        "total": "36266",
        "ok": "55598",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 3727,
        "percentage": 9
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 26,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2765,
        "percentage": 7
    },
    "group4": {
        "name": "failed",
        "count": 33482,
        "percentage": 84
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "232.558",
        "ok": "37.895",
        "ko": "194.663"
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
