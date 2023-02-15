import Image from 'next/image'
import Login from 'src/components/login'


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
                        <Login />

                        {/* <Link href="/login"
                  className="mt-8 inline-flex items-center rounded border border-sky-600 bg-sky-600 px-8 py-3 text-white hover:bg-transparent hover:text-sky-600 focus:outline-none focus:ring active:text-sky-500"
                >
                  <span className="text-sm font-medium"> Ingresar </span>
  
                  <svg
                    className="ml-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link> */}
                    </div>
                </div>
            </div>
        </section>

    </>

export default Landing
