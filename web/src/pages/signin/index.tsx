// import { providers, signIn, getSession, csrfToken } from "next-auth/client

import { signIn, getSession, getProviders, getCsrfToken } from "next-auth/react"
import { FcGoogle } from 'react-icons/fc'

function signin({ providers }) {
    return (
        <>
            {/* <div className="mt-auto min-h-screen content-center mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                {Object.values(providers).map((provider) => {
                    return (
                        <div key={provider.name}>
                            <button
                                className="group flex items-center justify-between mx-auto gap-4 text-primary rounded-lg border border-primary hover:bg-primary hover:text-white px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
                                onClick={() => signIn(provider.id)}>

                                <span>
                                    Estudiantes con email FIUBA
                                </span>
                                <span
                                    className="flex-shrink-0 rounded-full  p-2"
                                >
                                    <FcGoogle className="h-5 w-5 text-gray-400" />
                                </span>
                            </button>
                        </div>
                    );
                })}

            </div> */}
            {/* <!--
            This component uses @tailwindcss/forms

            yarn add @tailwindcss/forms
            npm install @tailwindcss/forms

            plugins: [require('@tailwindcss/forms')]
--> */}
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 flex place-items-center min-h-screen">
                <div className="mx-auto max-w-lg">
                    {/* <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                        Get started today
                    </h1>

                    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
                        dolores deleniti inventore quaerat mollitia?
                    </p> */}

                    <form
                        action=""
                        className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                    >
                        <p className="text-center text-lg font-medium">Ingreso Empresas/Organismos</p>

                        <div>
                            <label form="email" className="sr-only">Email</label>

                            <div className="relative">
                                <input
                                    type="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                />

                                <span
                                    className="absolute inset-y-0 right-0 grid place-content-center px-4"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label form="password" className="sr-only">Password</label>

                            <div className="relative">
                                <input
                                    type="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter password"
                                />

                                <span
                                    className="absolute inset-y-0 right-0 grid place-content-center px-4"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign in
                        </button>

                        <p className="text-center text-sm text-gray-500">
                            Para tramitar un usuario como empresa/organismo:
                            <a className="text-bold" href="mailto:inslab@fi.uba.ar"> Áca </a>
                        </p>

                        {Object.values(providers).map((provider) => {
                            return (
                                <div key={provider.name}>
                                    <button
                                        className="group flex w-full items-center justify-center mx-auto gap-4 text-primary rounded-lg border border-primary  px-5 py-3 transition-colors focus:outline-none focus:ring hover:text-white hover:bg-primary"
                                        onClick={(e) => {

                                            e.preventDefault()
                                            signIn(provider.id)
                                        }
                                        }
                                    >

                                        <span>
                                            Estudiantes con mail FIUBA
                                        </span>
                                        <span
                                            className="flex-shrink-0 rounded-full  p-2"
                                        >
                                            <FcGoogle className="h-5 w-5 text-gray-400" />
                                        </span>
                                    </button>
                                </div>
                            );
                        })}
                    </form>
                </div>
            </div >


        </>
    )
}

export default signin;

export async function getServerSideProps(context) {
    const { req } = context;
    const session = await getSession({ req });

    if (session) {
        return {
            redirect: { destination: "/dashboard" },
        };
    }

    return {
        props: {
            providers: await getProviders(context),
            csrfToken: await getCsrfToken(context),
        },
    };
}
