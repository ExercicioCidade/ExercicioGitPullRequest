import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="w-full bg-blue-600 text-white shadow-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <NavLink to="/" className="text-2xl font-bold">
                    Planeta Brinquedos
                </NavLink>

                {/* Navegação */}
                <nav>
                    <ul className="flex items-center gap-6">

                        <li>
                            <NavLink
                                to="/"
                                className="transition hover:text-yellow-300"
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/produtos"
                                className="transition hover:text-yellow-300"
                            >
                                Produtos
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/sobre"
                                className="transition hover:text-yellow-300"
                            >
                                Sobre
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/contato"
                                className="transition hover:text-yellow-300"
                            >
                                Contato
                            </NavLink>
                        </li>

                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Header;