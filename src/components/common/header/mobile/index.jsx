// IMPORTS COMPONENTS
import ListItem from "@/atoms/header/mobile/list-item/index.jsx"

// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index.jsx"
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

// IMPORTS FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion"

// IMPORTS REACT
import { useState } from "react"

const MobileHeader = () => {

    const [ isOpen, updateOpen ] = useState( false )

    return (
        <header className="bg-om_carbon_black md:hidden px-6 py-6 z-20 w-full">
            <div className="flex justify-between items-center z-20">
                <Link href="/" aria_label="orbitmedia logo">
                    <div className="w-10 aspect-square">
                        <PictureInternalContain
                            alternative_text="orbitmedia logo"
                            source="/logo/mobile-header-logo.png"
                        />
                    </div>
                </Link>
                <div onClick={ () => updateOpen( !isOpen ) }>
                    {

                        isOpen &&
                        <div className="w-6 aspect-square">
                            <PictureInternalContain
                                alternative_text="close icon"
                                source="/icons/close.svg"
                            />
                        </div>

                    }
                    {

                        !isOpen &&
                        <div className="w-6 aspect-square">
                            <PictureInternalContain
                                alternative_text="menu icon"
                                source="/icons/menu.svg"
                            />
                        </div>

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
                                <ListItem>Web Design & Development</ListItem>
                                <ListItem>Website Optimization</ListItem>
                                <ListItem>Portfolio</ListItem>
                                <ListItem>Blog</ListItem>
                                <ListItem>About</ListItem>
                                <ListItem>Contact</ListItem>
                            </ul>
                        </div>
                    </motion.div>

                }
            </AnimatePresence>
        </header>
    )

}

export default MobileHeader
