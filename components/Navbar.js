import Link from "next/link"
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <Link href="/">
                        <a className="navbar-brand" >PARAMETRIZACION DE LA RED NEURONAL</a>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link href="/">
                                <a className="nav-link active" aria-current="page" href="#">Unicapa</a>
                            </Link>
                            <Link href="/multicapa">
                            <a className="nav-link" >Multicapa</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar