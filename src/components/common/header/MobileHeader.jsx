import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

// IMPORT JSX COMPONENTS
import MobileHeaderItem from "./MobileHeaderItem"

const MobileHeader = () => {

    const [ isOpen, updateOpen ] = useState( false )

    return (
        <header className="bg-om_carbon_black md:hidden px-6 py-6 z-20 w-full">
            <div className="flex justify-between items-center z-20">
                <a href="/">
                <div className="w-10 aspect-square">
                    <img
                        src="/logo/mobile-header-logo.png"
                        alt="logo"
                        className="w-10 aspect-square"
                    />
                </div>
                </a>
                <div onClick={ () => updateOpen( !isOpen ) }>
                    {

                        isOpen &&
                        <img
                            src="/icons/close.svg"
                            className="w-6 aspect-square"
                        />

                    }
                    {

                        !isOpen &&
                        <img
                            src="/icons/menu.svg"
                            className="w-6 aspect-square"
                        />

                    }
                </div>
            </div>
            <AnimatePresence initial={ false }>
                {

                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate={ isOpen ? "open" : "collapsed" }
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "100vh" },
                            collapsed: { opacity: 0, height: "0px" }
                        }}
                        transition={{ duration: 0.3 }}
                        className="grow"
                    >
                        <div className="flex flex-col gap-1 items-center justify-center h-full z-10">
                            <ul className="flex flex-col gap-8">
                                <MobileHeaderItem>Web Design & Development</MobileHeaderItem>
                                <MobileHeaderItem>Website Optimization</MobileHeaderItem>
                                <MobileHeaderItem>Portfolio</MobileHeaderItem>
                                <MobileHeaderItem>Blog</MobileHeaderItem>
                                <MobileHeaderItem>About</MobileHeaderItem>
                                <MobileHeaderItem>Contact</MobileHeaderItem>

                            </ul>
                        </div>
                    </motion.div>

                }
            </AnimatePresence>
        </header>
    )

}

export default MobileHeader
