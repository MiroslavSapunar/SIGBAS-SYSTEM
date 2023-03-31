import Head from "next/head";
import Link from "next/link";
const Custom404 = () => {
    return (
        <>
            <Head>
                <title>404 - Página no encontrada</title>
            </Head>
            <div className="grid h-screen px-4 bg-white place-content-center">
                <div className="text-center">
                    <h1 className="font-black text-gray-200 text-9xl">404</h1>

                    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        ¡Oh no!
                    </p>

                    <p className="mt-4 text-gray-500">No pudimos encontrar este contenido.</p>

                    <Link
                        className="inline-block px-5 py-3 mt-6 text-sm font-medium border-primary border-2 text-primary bg-white rounded hover:bg-primary hover:text-white focus:outline-none focus:ring"
                        href="/"
                    >
                        Volver al Inicio
                    </Link>

                </div>
            </div>
        </>

    );
};
export default Custom404;
