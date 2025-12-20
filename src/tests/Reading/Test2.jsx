import React, { useState } from 'react'
import PaginationComponent from '../../components/Pagination'
import { Outlet, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

export default function Test2() {
  const [page, setPage] = useState(1) // hozirgi sahifa
  const navigate = useNavigate()
  const handleChange = (event, value) => {
    setPage(value)
    navigate(`/test/test2/part${value}`)
  }
  return (
    <div className='w-full'>
      <h1 className='text-center'>
        {location.pathname === "/test/test2" && <Button onClick={() => navigate('/test/test2/part1')}>Boshlash</Button>}
        <Outlet />
      </h1>
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <PaginationComponent
          page={page}
          count={5}
          onPageChange={handleChange}
        />
      </div>
    </div>
  )
}
