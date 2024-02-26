export const homeAPI = async ( ENDPOINT ) => {

    // NETWORK CALL TO GET DATA
    const network_data = await fetch( ENDPOINT + "/home" )
    const data_json = await network_data.json()

    const { home, team, testimonials, meta_tags } = data_json.data

    let home_data = {

        // HOME PROPS
        hero : "",
        recent_projects : "",
        cofounder_talk : "",
        partner_with_us : "",
        reviews : "",
        awards : "",
        founder_of_sti : "",
        meet_our_team : "",
        optimize_website : "",
        data_driven_company : "",
        data_and_analytics : "",
        keyword_research : "",
        interview_and_investigate : "",
        update_messaging : "",
        edit_any_page : "",
        website_design : "",
        not_sure : "",
        reach_out_to_chris : ""

    }
    home.map( ( data ) => {

        if( data.slug === "hero" )
            home_data.hero = data
        else if( data.slug === "recent-projects" )
            home_data.recent_projects = data
        else if ( data.slug === "cofounder-talk" )
            home_data.cofounder_talk = data
        else if ( data.slug === "partner-with-us" )
            home_data.partner_with_us = data
        else if ( data.slug === "reviews" )
            home_data.reviews = data
        else if ( data.slug === "awards" )
            home_data.awards = data
        else if ( data.slug === "founder-of-sti" )
            home_data.founder_of_sti = data
        else if( data.slug === "meet-our-team" )
            home_data.meet_our_team = data
        else if ( data.slug === "optimize-website" )
            home_data.optimize_website = data
        else if ( data.slug === "data-driven-company" )
            home_data.data_driven_company = data
        else if ( data.slug === "data-and-analytics" )
            home_data.data_and_analytics = data
        else if ( data.slug === "keyword-research" )
            home_data.keyword_research = data
        else if ( data.slug === "interview-and-investigate" )
            home_data.interview_and_investigate = data
        else if ( data.slug === "update-messaging" )
            home_data.update_messaging = data
        else if ( data.slug === "edit-any-page" )
            home_data.edit_any_page = data
        else if ( data.slug === "website-design" )
            home_data.website_design = data
        else if ( data.slug === "not-sure" )
            home_data.not_sure = data
        else if ( data.slug === "reach-out-to-chris" )
            home_data.reach_out_to_chris = data

    })

    return { home_data, team, testimonials, meta_tags }

}
