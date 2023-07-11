// import { data } from './data.js'
// async function sortData(allData) {
//   console.log('DATA', allData)
//   return allData.filter((a) => {
//     a.name === projectName
//   })
// }
// export async function getProject(projectName) {
//   //   let art = await glob(['.js'], {
//   //     cwd: path.join(process.cwd(), 'src/lib/data'),
//   //   })
//   // console.log('ART', allData)
//   let items = await Promise.all(
//     data.filter((i) => {
//       for (let value in i) {
//         console.log('VALUE', value)
//       }
//       console.log('DATA', i)
//       return i.name === projectName
//     })
//   )
//   // console.log('FinalDATA', items)
//   return items
// }
import glob from 'fast-glob'
import Image from 'next/image'
import * as path from 'path'

async function importBlog(blogFilename) {
  // console.log(
  //   'FILE_NAME_IMPORT: ' + blogFilename.filePath,
  //   blogFilename.fileNme
  // )
  const fileSource = `${blogFilename.filePath + '/' + blogFilename.fileNme}`
  console.log('FILE_SORCE', fileSource)
  const image = `<Image
      src={${fileSource}}
      alt="me"
      width="64"
      height="64"
    />`

  const projectImage = `<img
    key={p.sug}
    src={'/projects/BREVARD_WEB/brevard_web/email_image.jpg'}
  />`
  // let { file } = await import(`./projects/${blogFilename}`)
  // console.log('METADATA: ', meta)
  // console.log('DEFAULT_COMPONENT: ' + component)
  return {
    slug: blogFilename,
    ...image,
    // component,
  }
}

export async function getProject(projectFolderName) {
  console.log('PROJECT_NAME: ', projectFolderName)

  let projectFileNames = await glob(
    ['*.jpg', '*.png', '*.JPG', '*.jpeg'],
    {
      cwd: path.join(process.cwd(), `src/lib/projects/${projectFolderName}`),
    },
    { hello: 'hello world' }
  )

  const projectRootFiles = projectFileNames.map((pName) => {
    return {
      fileName: pName,
      filePath: path.join(`/projects/${projectFolderName}/${pName}`),
    }
  })
  console.log('photoResource: ', projectRootFiles)
  // console.log('PROJECT__FILES_NAMESS____: ', projectFileNames)
  //
  // let projectRootFiles = await Promise.all(photosResources.map(importBlog))

  // let projectRootFiles = await Promise.all(
  //   projectFileNames.map((p) => {
  //     console.log('FILE_NAME P: ' + p)
  //     // const source = path.join(`/projects/${projectFolderName}/${p}`)
  //     const file = importBlog(`src/lib/projects/${projectFolderName}/${p}`)
  //     return {
  //       slug: file,
  //       // ...meta,
  //       // component,
  //     }
  //   })
  // )
  // console.log('PROJECT: ', projectRootFiles)
  return projectRootFiles
}
