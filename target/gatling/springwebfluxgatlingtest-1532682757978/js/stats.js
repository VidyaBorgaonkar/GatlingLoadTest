var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40000",
        "ok": "2966",
        "ko": "37034"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "302",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "62909",
        "ok": "62909",
        "ko": "33121"
    },
    "meanResponseTime": {
        "total": "1018",
        "ok": "13721",
        "ko": "1"
    },
    "standardDeviation": {
        "total": "5869",
        "ok": "17027",
        "ko": "172"
    },
    "percentiles1": {
        "total": "0",
        "ok": "1988",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "25772",
        "ko": "0"
    },
    "percentiles3": {
        "total": "616",
        "ok": "50216",
        "ko": "0"
    },
    "percentiles4": {
        "total": "37002",
        "ok": "58016",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1172,
        "percentage": 3
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 170,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1624,
        "percentage": 4
    },
    "group4": {
        "name": "failed",
        "count": 37034,
        "percentage": 93
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "175.439",
        "ok": "13.009",
        "ko": "162.43"
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
        "ok": "2966",
        "ko": "37034"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "302",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "62909",
        "ok": "62909",
        "ko": "33121"
    },
    "meanResponseTime": {
        "total": "1018",
        "ok": "13721",
        "ko": "1"
    },
    "standardDeviation": {
        "total": "5869",
        "ok": "17027",
        "ko": "172"
    },
    "percentiles1": {
        "total": "0",
        "ok": "1988",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "25772",
        "ko": "0"
    },
    "percentiles3": {
        "total": "616",
        "ok": "50216",
        "ko": "0"
    },
    "percentiles4": {
        "total": "37002",
        "ok": "58016",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1172,
        "percentage": 3
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 170,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1624,
        "percentage": 4
    },
    "group4": {
        "name": "failed",
        "count": 37034,
        "percentage": 93
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "175.439",
        "ok": "13.009",
        "ko": "162.43"
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
