import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

class SpringWebFluxGatlingTest extends Simulation {

  private val baseUrl1 = "http://34.207.187.204:8080"
  private val baseUrl2 = "http://34.207.187.204:3000"

  private val contentType = "application/json"
  private val reactiveEndpoint = "/reactive/rates/TAJ"
  private val syncEndpoint = "/sync/rates/TAJ"
  val testTimeSecs = 20
  private val simUsers = 10000
  private val requestCount = 10

//.connectionHeader("keep-alive")

  val httpProtocol1: HttpProtocolBuilder = http
    .baseURL(baseUrl1)
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
    .contentTypeHeader(contentType)
    .doNotTrackHeader("1")

    .userAgentHeader("Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0")


  val httpProtocol2: HttpProtocolBuilder = http
    .baseURL(baseUrl2)
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
    .contentTypeHeader(contentType)
    .doNotTrackHeader("1")

    .userAgentHeader("Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0")


  val headers_0 = Map("Expect" -> "100-continue")

  val scn1: ScenarioBuilder = scenario("RecordedSimulation")
    .repeat(requestCount) {
      exec(http("Reactive Request")
        .get(reactiveEndpoint)
        .headers(headers_0)
        .check(status.is(200)))
    }

  val scn2: ScenarioBuilder = scenario("RecordedSimulation")
    .repeat(requestCount) {
      exec(http("Synchronous Request")
        .get(syncEndpoint)
        .headers(headers_0)
        .check(status.is(200)))
    }


 setUp(scn1.inject(atOnceUsers(simUsers))).protocols(httpProtocol1)

  //setUp(scn2.inject(atOnceUsers(simUsers))).protocols(httpProtocol2)

}

