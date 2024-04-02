import { useParams, useLoaderData } from 'react-router-dom'
import Spinner from '../components/Spinner'

const JobPage = () => {
  // const { id } = useParams()
  const job = useLoaderData()

  return <h1>{job.title}</h1>
}

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`)
  const data = await res.json()
  return data
}

export { JobPage as default, jobLoader }
// ------------------------------------------------------------------------
// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import Spinner from '../components/Spinner'

// const JobPage = () => {
//   const { id } = useParams()
//   const [job, setJob] = useState(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchJob = async () => {
//       try {
//         const res = await fetch(`/api/jobs/${id}`)
//         const data = await res.json()
//         setJob(data)
//       } catch (error) {
//         console.log('Error fetching', error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchJob()
//   }, [id])

//   return loading ? <Spinner /> : <h1>{job.title}</h1>
// }

// export default JobPage
