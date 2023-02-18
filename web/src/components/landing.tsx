import Image from 'next/image'

import LoginForm from '@/components/loginForm'

const Landing: React.FC = () =>
    <>
        <section>
            <div className="mt-auto min-h-screen content-center mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid my-auto grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div
                        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full bg-primary"
                    >
                        <Image
                            src="/FIUBA.jpg"
                            alt="FIUBA Logo"
                            className="absolute inset-0 h-auto w-full object-scale-down"
                            fill
                            priority
                        />

                    </div>

                    <div className="lg:py-0">
                        <h3 className="text-3xl font-bold sm:text-4xl">Sistema de Gestión Informática</h3>
                        <h2 className="text-3xl font-bold sm:text-4xl">SIGBAS</h2>

                        <p className="mt-4 text-gray-800">
                            Secretaria de Inclusión, Género, Bienestar y Articulación Social
                        </p>
                        <p className="mt-1 text-gray-800">
                            Facultad de Ingeniería de la Universidad de Buenos Aires
                        </p>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </section>

    </>

export default Landing
