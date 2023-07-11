// import { allProjects } from './data.js'
async function sortData(allData) {
  console.log('DATA', allData)
  return allData.filter((a) => {
    a.name === projectName
  })
}
export async function getProject(projectName) {
  //   let art = await glob(['.js'], {
  //     cwd: path.join(process.cwd(), 'src/lib/data'),
  //   })
  // console.log('ART', allData)
  let items = await Promise.all(
    allData.filter((i) => {
      return i.name === projectName
    })
  )
  // console.log('FinalDATA', items)
  return items
}
