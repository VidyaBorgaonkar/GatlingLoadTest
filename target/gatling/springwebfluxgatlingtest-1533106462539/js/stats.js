var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40000",
        "ok": "38442",
        "ko": "1558"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "301",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59982",
        "ok": "59982",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "5297",
        "ok": "5511",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "11065",
        "ok": "11235",
        "ko": "0"
    },
    "percentiles1": {
        "total": "2097",
        "ok": "2216",
        "ko": "0"
    },
    "percentiles2": {
        "total": "4155",
        "ok": "4200",
        "ko": "0"
    },
    "percentiles3": {
        "total": "35624",
        "ok": "37869",
        "ko": "0"
    },
    "percentiles4": {
        "total": "54836",
        "ok": "54902",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12738,
        "percentage": 32
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1625,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 24079,
        "percentage": 60
    },
    "group4": {
        "name": "failed",
        "count": 1558,
        "percentage": 4
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "439.56",
        "ok": "422.44",
        "ko": "17.121"
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
        "ok": "38442",
        "ko": "1558"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "301",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59982",
        "ok": "59982",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "5297",
        "ok": "5511",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "11065",
        "ok": "11235",
        "ko": "0"
    },
    "percentiles1": {
        "total": "2098",
        "ok": "2218",
        "ko": "0"
    },
    "percentiles2": {
        "total": "4155",
        "ok": "4198",
        "ko": "0"
    },
    "percentiles3": {
        "total": "35624",
        "ok": "37869",
        "ko": "0"
    },
    "percentiles4": {
        "total": "54836",
        "ok": "54902",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12738,
        "percentage": 32
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1625,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 24079,
        "percentage": 60
    },
    "group4": {
        "name": "failed",
        "count": 1558,
        "percentage": 4
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "439.56",
        "ok": "422.44",
        "ko": "17.121"
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
