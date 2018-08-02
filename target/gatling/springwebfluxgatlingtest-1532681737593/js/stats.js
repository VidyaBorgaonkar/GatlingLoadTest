var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40000",
        "ok": "39645",
        "ko": "355"
    },
    "minResponseTime": {
        "total": "21",
        "ok": "302",
        "ko": "21"
    },
    "maxResponseTime": {
        "total": "13427",
        "ok": "13427",
        "ko": "8410"
    },
    "meanResponseTime": {
        "total": "8611",
        "ok": "8630",
        "ko": "6471"
    },
    "standardDeviation": {
        "total": "3503",
        "ok": "3510",
        "ko": "1351"
    },
    "percentiles1": {
        "total": "9483",
        "ok": "9531",
        "ko": "6650"
    },
    "percentiles2": {
        "total": "11780",
        "ok": "11787",
        "ko": "7467"
    },
    "percentiles3": {
        "total": "12933",
        "ok": "12937",
        "ko": "8231"
    },
    "percentiles4": {
        "total": "13211",
        "ok": "13211",
        "ko": "8260"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 525,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 39107,
        "percentage": 98
    },
    "group4": {
        "name": "failed",
        "count": 355,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "615.385",
        "ok": "609.923",
        "ko": "5.462"
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
        "ok": "39645",
        "ko": "355"
    },
    "minResponseTime": {
        "total": "21",
        "ok": "302",
        "ko": "21"
    },
    "maxResponseTime": {
        "total": "13427",
        "ok": "13427",
        "ko": "8410"
    },
    "meanResponseTime": {
        "total": "8611",
        "ok": "8630",
        "ko": "6471"
    },
    "standardDeviation": {
        "total": "3503",
        "ok": "3510",
        "ko": "1351"
    },
    "percentiles1": {
        "total": "9483",
        "ok": "9531",
        "ko": "6650"
    },
    "percentiles2": {
        "total": "11780",
        "ok": "11787",
        "ko": "7467"
    },
    "percentiles3": {
        "total": "12933",
        "ok": "12937",
        "ko": "8231"
    },
    "percentiles4": {
        "total": "13211",
        "ok": "13211",
        "ko": "8260"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 525,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 39107,
        "percentage": 98
    },
    "group4": {
        "name": "failed",
        "count": 355,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "615.385",
        "ok": "609.923",
        "ko": "5.462"
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
