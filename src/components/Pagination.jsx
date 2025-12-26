import React from 'react'
import { Pagination } from '@mui/material'

export default function PaginationComponent({ page, count, onPageChange }) {
  return (
    <div className="flex justify-center mt-4">
      <Pagination
        count={count}          
        page={page}            
        onChange={onPageChange}
        color="primary"
        shape="rounded"
        className="!bg-white p-2 rounded-lg shadow-md"
      />
    </div>
  )
}
