// import { providers, signIn, getSession, csrfToken } from "next-auth/client

import { signIn, getSession, getProviders, getCsrfToken } from "next-auth/react"
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { FormEventHandler } from "react";

import { useState } from "react"
import { FcGoogle } from 'react-icons/fc'
import { IoCloseSharp } from 'react-icons/io5'
import { MdOutlineAlternateEmail, MdOutlinePassword, MdInfo } from 'react-icons/md'
import router from "next/router";
interface FormData {
    email: String,
    password: String
}

export default function SignIn({ providers, csrfToken }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [form, setForm] = useState<FormData>({ email: "", password: "" })
    const [error, setError] = useState(false)

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setError(false)

        const res = await signIn("credentials", {
            email: form.email,
            password: form.password,
            redirect: false
        });

        console.log(res)
        if (res?.error) {
            setError(true)
        } else {
            router.push('/dashboard');
        }
    };

    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 flex place-items-center min-h-screen">
                <div className="mx-auto max-w-lg">
                    <form
                        onSubmit={handleSubmit}
                        className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                        <p className="text-center text-lg font-medium">Ingreso Empresas/Organismos</p>

                        <label className="sr-only">
                            Usuario
                        </label>
                        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                        <div className="relative">
                            <input
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Usuario"
                                name="email"
                                onChange={(e) => {
                                    setForm({ ...form, email: e.target.value })
                                }}
                                required />
                            <span
                                className="absolute inset-y-0 right-0 grid place-content-center px-4"
                            >
                                <MdOutlineAlternateEmail />
                            </span>


                        </div>
                        <label className="sr-only">Contraseña</label>
                        <div className="relative">
                            <input type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Contraseña"
                                onChange={(e) => {
                                    setForm({ ...form, password: e.target.value })
                                }}
                                required
                            />
                            <span
                                className="absolute inset-y-0 right-0 grid place-content-center px-4"
                            >
                                <MdOutlinePassword />
                            </span>
                        </div>
                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white"
                        >Ingresar</button>

                        {error ?
                            <div id="alert-2" className="flex p-4 mb-4  border-red-600 border-2 rounded-lg  bg-white text-red-600" role="alert">
                                <MdInfo/>
                                <span className="sr-only">Info</span>
                                <div className="ml-3 text-sm font-medium">
                                    Credenciales incorrectas. Intente nuevamente
                                </div>
                                <button onClick={(e) => {
                                    e.preventDefault
                                    setError(false)
                                }}
                                    type="button"
                                    className="ml-auto -mx-1.5 -my-1.5 bg-white text-red-600 rounded-lg focus:ring-2 focus:ring-red-600 p-2 hover:bg-red-300 inline-flex h-8 w-8 " data-dismiss-target="#alert-2" aria-label="Close">
                                    <span className="sr-only">X</span>
                                    <IoCloseSharp />
                                </button>
                            </div> : <></>}

                        <p className="text-center text-sm text-gray-500">
                            Para tramitar un usuario como empresa/organismo:
                            <a className="text-bold text-lg" href="mailto:inslab@fi.uba.ar"> inslab@fi.uba.ar </a>
                        </p>

                        {providers &&
                            Object.values(providers).map((provider) => {
                                return (
                                    (provider.name != 'Credentials' ?
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
                                        : <></>)
                                );
                            })}

                    </form>
                </div >
            </div >
        </>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {

    // const { req } = context;
    // const session = await getSession({ req });

    // if (session) {
    //     return {
    //         redirect: { destination: "/dashboard" },
    //     };
    // }

    return {
        props: {
            providers: await getProviders(),
            csrfToken: await getCsrfToken(context),
        },
    };
}
