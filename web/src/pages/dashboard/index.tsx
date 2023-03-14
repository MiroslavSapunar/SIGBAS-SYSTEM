import { getSession } from 'next-auth/react';

import DashboardLayout from "@/components/Dashboard/dashboardLayout"
import DashboardLanding from "@/components/Dashboard/dasboardLanding"


export default function dashboardLayout() {
    return (
        <DashboardLayout>
            <DashboardLanding internships={[]} />
        </DashboardLayout>
    )
}

export async function getServerSideProps(context) {
    const { req } = context;
    const session = await getSession({ req });

    console.log("session")
    console.log(session)

    if (!session) {
        return {
            redirect: { destination: "/signin" },
        };
    }

    return { props: {} }

}
