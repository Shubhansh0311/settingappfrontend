import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PreferNetworkType = () => {
  const navigate = useNavigate()

  const [networktype, setNetworkType] = useState()
  const handleChange = async e => {
    const netID = e.target.id
    const data = { id: netID }
    try {
      const response = await axios.post(
        'http://localhost:8008/sim/networkType',
        data
      )
      setNetworkType(response.data.networkType)
    } catch (err) {
      console.log('network type not set : ', err)
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'http://localhost:8008/sim/getNetworkType'
      )
      setNetworkType(response.data.networkType)
    }
    fetchData()
  }, [])
  return (
    <div className='main_container'>
      <div className='sub_container'>
        <span
          className='btn_top'
          onClick={() => {
            navigate(-1)
          }}
        >
          {' '}
          {'←'}
        </span>
        <h1 className='heading_primary'>Preferred network type</h1>
        <div className='preferNet' style={{ margin: '8px' }}>
          <span className='vrBtn'>
            <input
              type='radio'
              id='network5G'
              checked={networktype == 'network5G'}
              onChange={handleChange}
              name='preferredNetwork'
            />
            <label htmlFor='network5G'>Prefer 5G</label>
          </span>
          <span className='vrBtn'>
            <input
              type='radio'
              id='networkLTE'
              checked={networktype == 'networkLTE'}
              onChange={handleChange}
              name='preferredNetwork'
            />
            <label htmlFor='networkLTE'>Prefer LTE</label>
          </span>
        </div>
      </div>
    </div>
  )
}

export default PreferNetworkType
