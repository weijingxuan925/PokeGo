import './ViewMenu.css';
import Link from "next/link";

const ViewMenu = () => {
    return (
        <Link href="/" className="link btn btn-primary slider-reveal">
            <span className="text text-1">View Our Menu</span>
            <span className="text text-2" aria-hidden="true">View Our Menu</span>
        </Link> 
    )
}

export default ViewMenu;
