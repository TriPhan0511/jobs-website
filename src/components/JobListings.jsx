import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import JobListing from './JobListing'
import Spinner from './Spinner'

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // let apiUrl = 'http://localhost:8000/jobs'
    let apiUrl = '/api/jobs'
    // Note: Using a proxy that was set in vite.config.js:
    // server: {
    //   port: 3000,
    //   proxy: {
    //     '/api': {
    //       target: 'http://localhost:8000',
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, ''),
    //     },
    //   },
    // },

    apiUrl = isHome ? `${apiUrl}?_limit=3` : apiUrl
    const fetchJobs = async () => {
      try {
        const res = await fetch(apiUrl)
        const data = await res.json()
        setJobs(data)
      } catch (error) {
        console.log('Error fetching data', error)
      } finally {
        setLoading(false)
      }
    }
    fetchJobs()
  }, [isHome])

  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

JobListings.propTypes = {
  isHome: PropTypes.bool,
}

export default JobListings
