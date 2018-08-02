var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "60000",
        "ok": "59948",
        "ko": "52"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "302",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "39119",
        "ok": "39119",
        "ko": "13890"
    },
    "meanResponseTime": {
        "total": "11835",
        "ok": "11844",
        "ko": "798"
    },
    "standardDeviation": {
        "total": "4254",
        "ok": "4242",
        "ko": "3223"
    },
    "percentiles1": {
        "total": "13573",
        "ok": "13588",
        "ko": "0"
    },
    "percentiles2": {
        "total": "14429",
        "ok": "14429",
        "ko": "0"
    },
    "percentiles3": {
        "total": "14781",
        "ok": "14781",
        "ko": "6201"
    },
    "percentiles4": {
        "total": "21856",
        "ok": "21857",
        "ko": "13844"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 161,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 858,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 58929,
        "percentage": 98
    },
    "group4": {
        "name": "failed",
        "count": 52,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "618.557",
        "ok": "618.021",
        "ko": "0.536"
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
        "total": "60000",
        "ok": "59948",
        "ko": "52"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "302",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "39119",
        "ok": "39119",
        "ko": "13890"
    },
    "meanResponseTime": {
        "total": "11835",
        "ok": "11844",
        "ko": "798"
    },
    "standardDeviation": {
        "total": "4254",
        "ok": "4242",
        "ko": "3223"
    },
    "percentiles1": {
        "total": "13585",
        "ok": "13584",
        "ko": "0"
    },
    "percentiles2": {
        "total": "14429",
        "ok": "14429",
        "ko": "0"
    },
    "percentiles3": {
        "total": "14781",
        "ok": "14781",
        "ko": "6201"
    },
    "percentiles4": {
        "total": "21851",
        "ok": "21858",
        "ko": "13844"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 161,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 858,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 58929,
        "percentage": 98
    },
    "group4": {
        "name": "failed",
        "count": 52,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "618.557",
        "ok": "618.021",
        "ko": "0.536"
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
