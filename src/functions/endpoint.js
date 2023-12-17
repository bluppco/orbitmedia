export const endpointFetch = ( environment ) => {

    return environment === "staging" ? "https://staging.api.orbitmedia.blupp.co" : "https://api.orbitmedia.blupp.co"

}
