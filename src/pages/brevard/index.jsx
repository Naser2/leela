import Head from 'next/head'

// import { Card } from '@/components/Card'
// import { Section } from '@/components/Section'
// import { SimpleLayout } from '@/components/SimpleLayout'
// import { getProject } from '@/lib/getAllStills'
import Image from 'next/image'
import clsx from 'clsx'
// import { Title } from '@/components/Title'
import Link from 'next/link'
import { FancyImageClicabletitle } from '@/components/Gallery'
// import { SocialMedia } from '@/components/SocialMedia'
import { getProject } from '@/lib/getProject'

export default function Brevard({ project }) {
  return (
    <>
      <Head>
        <title>Speaking - Amit Kehar</title>
        <meta
          name="description"
          content="Photos I captured throughout this journey.."
        />
      </Head>

      <FancyImageClicabletitle project={project} />

      <div id="LANDING-SOCIAL-MEDIA" className="ml-4 mt-4"></div>
      <div className="space-y-20"></div>
    </>
  )
}

export async function getStaticProps() {
  const projectRootFiles = await getProject('BREVARD_WEB/brevard_web')
  // const project = []
  // console.log('Project', projectRootFiles)
  return {
    props: {
      project: projectRootFiles,
    },
  }
}
