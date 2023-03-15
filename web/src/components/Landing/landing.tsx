import Image from 'next/image'
import Link from 'next/link'

const Landing: React.FC = () =>
    <>
        <div className="m-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 min-h-screen place-items-center flex">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="bg-primary p-8 md:p-12 lg:px-16 lg:py-24 place-items-center flex rounded">
                    <div className="my-auto max-w-xl text-center">
                        <h2 className="text-2xl font-bold text-white md:text-3xl text-left">
                            Sistema de Gestión Informática SIGBAS-SyS
                        </h2>

                        <p className="hidden text-white/90 sm:mt-4 sm:block text-left">
                            Secretaria de Inclusión, Género, Bienestar y Articulación Social
                        </p>
                        <p className="hidden text-white/90 sm:mt-1 sm:block text-left">
                            Facultad de Ingeniería de la Universidad de Buenos Aires
                        </p>

                        <div className="mt-4 md:mt-8">
                            <Link
                                href="/signin"
                                className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-primary transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Ingresar con credenciales
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                    <img
                        alt="Student"
                        src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
                        className="h-40 w-full object-cover sm:h-56 md:h-full"
                    />

                    <img
                        alt="Student"
                        src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        className="h-40 w-full object-cover sm:h-56 md:h-full"
                    />
                </div>
            </div>
        </div>
    </>
export default Landing

