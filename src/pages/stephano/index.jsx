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

export default function Brevard({ project, project2, project3, project4 }) {
  return (
    <>
      <>
        <Head>
          <title>Speaking - Amit Kehar</title>
          <meta
            name="description"
            content="Photos I captured throughout this journey.."
          />
        </Head>
        <FancyImageClicabletitle project={project} />
        ARTIST SERIES
        <FancyImageClicabletitle
          project={project2}
          title="Aldara Final Selects"
        />
        <FancyImageClicabletitle project={project3} />
        <FancyImageClicabletitle project={project4} />
        <div id="LANDING-SOCIAL-MEDIA" className="ml-4 mt-4"></div>
        <div className="space-y-20"></div>
      </>
    </>
  )
}

export async function getStaticProps() {
  const projectRootFiles = await getProject(
    '/STEFANO_MARONI_WEB/Art Basel Collab - Cutlured Mag'
  )
  const projectRootFiles2 = await getProject(
    '/STEFANO_MARONI_WEB/Artist_Series/Aldara Final Selects'
  )
  const projectRootFiles3 = await getProject(
    '/STEFANO_MARONI_WEB/Artist_Series/Aldara Final Selects'
  )
  const projectRootFiles4 = await getProject(
    '/STEFANO_MARONI_WEB/Artist_Series/Aldara Final Selects'
  )
  // src/lib/projects/STEFANO_MARONI_WEB/Campaign_2

  // src/lib/projects/STEFANO_MARONI_WEB/Fall_Campaign_(art:creative direction

  // src / lib / projects / STEFANO_MARONI_WEB / Campaign_2
  // const projectRootFiles2 = await getProject(
  //   '/STEFANO_MARONI_WEB/Artist_Series/Aldara Final Selects'
  // )
  // console.log('Project', projectRootFiles)
  return {
    props: {
      project: projectRootFiles,
      project2: projectRootFiles2,
      project3: projectRootFiles3,
      project4: projectRootFiles4,
      // artSeries: artSeries,
    },
  }
}
