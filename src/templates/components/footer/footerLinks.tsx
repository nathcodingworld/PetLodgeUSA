import Link from "next/link"; 
type link = {
    title: string
    href: string
}
type linksType = {
    links: link[]
}

export default function FooterLinks ({links}: linksType) {
    return (
        <div >
            {links.map( link => <Link key={link.title} href={link.href}>{link.title}</Link>)} 
        </div>
    )
}