import Head from "next/head";
const Custom403 = () => {
    return (
        <>
            <Head>
                <title>403 - Acceso no autorizado</title>
            </Head>
            <div className="grid h-screen px-4 bg-white place-content-center dark:bg-gray-900">
                <h1 className="tracking-widest text-gray-500 uppercase dark:text-gray-400">
                    403 | Acceso no Autorizado
                </h1>
            </div>

        </>

    );
};
export default Custom403;
