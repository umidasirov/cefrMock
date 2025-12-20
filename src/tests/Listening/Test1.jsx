import { Button, Pagination } from '@mui/material'
import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import PaginationComponent from '../../components/Pagination'
export default function Test1() {
  const [page, setPage] = useState(1) // hozirgi sahifa
  const navigate = useNavigate()
  const handleChange = (event, value) => {
    setPage(value)
    navigate(`/test/test1/part${value}`)
  }
  console.log(page);

  return (
    <div className='w-full'>
      <h1 className='text-center font-bold mb-30'>
        {location.pathname === "/test/test1" && <Button onClick={() => navigate('/test/test1/part1')}>Boshlash</Button>}
        <Outlet />
      </h1>
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <PaginationComponent
          page={page}
          count={6}
          onPageChange={handleChange}
        />
      </div>


    </div>
  )
}
