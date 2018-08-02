var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40000",
        "ok": "3566",
        "ko": "36434"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "303",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59971",
        "ok": "59971",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1189",
        "ok": "13334",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "6041",
        "ok": "15730",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "8851",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "17114",
        "ko": "0"
    },
    "percentiles3": {
        "total": "4126",
        "ok": "51006",
        "ko": "0"
    },
    "percentiles4": {
        "total": "38248",
        "ok": "57904",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 617,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 156,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2793,
        "percentage": 7
    },
    "group4": {
        "name": "failed",
        "count": 36434,
        "percentage": 91
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "199.005",
        "ok": "17.741",
        "ko": "181.264"
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
        "ok": "3566",
        "ko": "36434"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "303",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59971",
        "ok": "59971",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1189",
        "ok": "13334",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "6041",
        "ok": "15730",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "8851",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "17114",
        "ko": "0"
    },
    "percentiles3": {
        "total": "4126",
        "ok": "51006",
        "ko": "0"
    },
    "percentiles4": {
        "total": "38248",
        "ok": "57904",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 617,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 156,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2793,
        "percentage": 7
    },
    "group4": {
        "name": "failed",
        "count": 36434,
        "percentage": 91
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "199.005",
        "ok": "17.741",
        "ko": "181.264"
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
