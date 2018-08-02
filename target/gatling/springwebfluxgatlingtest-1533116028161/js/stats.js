var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "60000",
        "ok": "53879",
        "ko": "6121"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "301",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60030",
        "ok": "60030",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "3223",
        "ok": "3589",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "8430",
        "ok": "8822",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1213",
        "ok": "1258",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1554",
        "ok": "1613",
        "ko": "0"
    },
    "percentiles3": {
        "total": "22352",
        "ok": "26086",
        "ko": "0"
    },
    "percentiles4": {
        "total": "47945",
        "ok": "48167",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 6241,
        "percentage": 10
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 16647,
        "percentage": 28
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 30991,
        "percentage": 52
    },
    "group4": {
        "name": "failed",
        "count": 6121,
        "percentage": 10
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "400",
        "ok": "359.193",
        "ko": "40.807"
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
        "total": "60000",
        "ok": "53879",
        "ko": "6121"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "301",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60030",
        "ok": "60030",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "3223",
        "ok": "3589",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "8430",
        "ok": "8822",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1213",
        "ok": "1258",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1556",
        "ok": "1613",
        "ko": "0"
    },
    "percentiles3": {
        "total": "22352",
        "ok": "26084",
        "ko": "0"
    },
    "percentiles4": {
        "total": "47942",
        "ok": "48168",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 6241,
        "percentage": 10
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 16647,
        "percentage": 28
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 30991,
        "percentage": 52
    },
    "group4": {
        "name": "failed",
        "count": 6121,
        "percentage": 10
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "400",
        "ok": "359.193",
        "ko": "40.807"
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
