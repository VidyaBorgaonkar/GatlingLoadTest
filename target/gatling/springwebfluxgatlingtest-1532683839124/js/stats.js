var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40000",
        "ok": "2448",
        "ko": "37552"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "302",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "62261",
        "ok": "62261",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "804",
        "ok": "13133",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "5400",
        "ok": "17737",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "1228",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "22508",
        "ko": "0"
    },
    "percentiles3": {
        "total": "612",
        "ok": "51595",
        "ko": "0"
    },
    "percentiles4": {
        "total": "34792",
        "ok": "58322",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 994,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 188,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1266,
        "percentage": 3
    },
    "group4": {
        "name": "failed",
        "count": 37552,
        "percentage": 94
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "245.399",
        "ok": "15.018",
        "ko": "230.38"
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
        "ok": "2448",
        "ko": "37552"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "302",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "62261",
        "ok": "62261",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "804",
        "ok": "13133",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "5400",
        "ok": "17737",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "1228",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "22508",
        "ko": "0"
    },
    "percentiles3": {
        "total": "612",
        "ok": "51595",
        "ko": "0"
    },
    "percentiles4": {
        "total": "34792",
        "ok": "58322",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 994,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 188,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1266,
        "percentage": 3
    },
    "group4": {
        "name": "failed",
        "count": 37552,
        "percentage": 94
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "245.399",
        "ok": "15.018",
        "ko": "230.38"
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
