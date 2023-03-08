import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from '@/components/layout'

const SIGBAS_SYSTEM = ({ Component }: AppProps) =>
  <Layout>
    <Component />
  </Layout>

export default SIGBAS_SYSTEM
