const NewsletterForm = ( props ) => {

    const { cy } = props

    return (

        <div className="space-y-2 relative">
            <div className="flex items-center">
                <div className="w-full">
                    <input
                        type="text"
                        placeholder="Email Address (Required)"
                        className="h-14 w-full rounded px-6 text-lg text-om_carbon_black font-proxima_nova font-light"
                        name="email"
                    />
                </div>
                <button className="absolute right-1 h-12 px-6 bg-om_orange text-white font-proxima_nova_condensed text-xl font-bold rounded">Sign me up</button>
            </div>
        </div>

    )

}

export default NewsletterForm
