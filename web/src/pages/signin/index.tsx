// import { providers, signIn, getSession, csrfToken } from "next-auth/client

import { signIn, getSession, getProviders, getCsrfToken } from "next-auth/react"
import { FcGoogle } from 'react-icons/fc'

function signin({ providers }) {
    return (
        <div className="mt-auto min-h-screen content-center mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
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
            </div>
    );
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
