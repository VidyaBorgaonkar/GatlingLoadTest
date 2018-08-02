var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40000",
        "ok": "32520",
        "ko": "7480"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "301",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "39365",
        "ok": "39365",
        "ko": "8545"
    },
    "meanResponseTime": {
        "total": "3820",
        "ok": "4688",
        "ko": "44"
    },
    "standardDeviation": {
        "total": "2524",
        "ok": "1935",
        "ko": "517"
    },
    "percentiles1": {
        "total": "4116",
        "ok": "4585",
        "ko": "0"
    },
    "percentiles2": {
        "total": "5269",
        "ok": "5382",
        "ko": "0"
    },
    "percentiles3": {
        "total": "7844",
        "ok": "7925",
        "ko": "0"
    },
    "percentiles4": {
        "total": "9954",
        "ok": "10675",
        "ko": "1396"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 208,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 32300,
        "percentage": 81
    },
    "group4": {
        "name": "failed",
        "count": 7480,
        "percentage": 19
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "727.273",
        "ok": "591.273",
        "ko": "136"
    }
},
contents: {
"req_synchronous-req-9cfe0": {
        type: "REQUEST",
        name: "Synchronous Request",
path: "Synchronous Request",
pathFormatted: "req_synchronous-req-9cfe0",
stats: {
    "name": "Synchronous Request",
    "numberOfRequests": {
        "total": "40000",
        "ok": "32520",
        "ko": "7480"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "301",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "39365",
        "ok": "39365",
        "ko": "8545"
    },
    "meanResponseTime": {
        "total": "3820",
        "ok": "4688",
        "ko": "44"
    },
    "standardDeviation": {
        "total": "2524",
        "ok": "1935",
        "ko": "517"
    },
    "percentiles1": {
        "total": "4118",
        "ok": "4585",
        "ko": "0"
    },
    "percentiles2": {
        "total": "5269",
        "ok": "5380",
        "ko": "0"
    },
    "percentiles3": {
        "total": "7844",
        "ok": "7925",
        "ko": "0"
    },
    "percentiles4": {
        "total": "9954",
        "ok": "10675",
        "ko": "1623"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 208,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 32300,
        "percentage": 81
    },
    "group4": {
        "name": "failed",
        "count": 7480,
        "percentage": 19
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "727.273",
        "ok": "591.273",
        "ko": "136"
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
