import { getSession } from 'next-auth/react';
import { GetServerSidePropsContext } from 'next';

// import DashboardLayout from "@/components/Dashboard/dashboardLayout"
// import DashboardLanding from "@/components/Dashboard/dasboardLanding"


export default function dashboardLayout() {
    return (
        <h1>Redireccionando</h1>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { req } = context;
    const session = await getSession({ req });

    // console.log(session)

    if (!session) {
        return {
            redirect: { destination: "/signin" },
        };
    }

    // if(session.user?.role  == "Admin"){
    // }

    return { props: {} }

}
