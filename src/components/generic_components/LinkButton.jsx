import { Link } from "@chakra-ui/react"

const LinkButton = ({ href, tag }) => {
    return (
        <Link color={"white"} px={1} fontWeight={"bold"} href={href}>{tag}</Link>
    )
}

export default LinkButton