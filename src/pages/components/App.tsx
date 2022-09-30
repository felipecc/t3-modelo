import * as React from "react";
import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";


export default function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-red-50 p-10">Header</header>
            <div className="flex-1 flex flex-col sm:flex-row">
                <nav className="order-first sm:w-32 bg-purple-200 p-2 mr-2 mt-2" >
                    <ul>
                        <li>
                            <NavLink to='/lista1'>
                                Lista1
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/lista2'>
                                Lista2
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/lista3'>
                                Lista3
                            </NavLink>
                        </li>

                    </ul>
                </nav>
                <main className="flex-1 bg-indigo-100 p-2 mt-2">
                    <Outlet />
                </main>
            </div>
            <footer className="bg-gray-100 p-2 mt-2">
                Footer
            </footer>
        </div>
    )
}

