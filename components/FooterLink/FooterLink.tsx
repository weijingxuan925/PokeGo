import './FooterLink.css';
import Link from "next/link";
import { FooterLinkProps } from "@/types/types";

const FooterLink = ({href, name} : FooterLinkProps) => {
    return (
        <li>
            <Link href={href} className="link label-2 footer-link hover-underline">{name}</Link>
        </li>
    )
}

export default FooterLink;