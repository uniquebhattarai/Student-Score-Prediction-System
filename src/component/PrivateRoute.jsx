import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@context/AuthContext'

export default function PrivateRoute({ children, expectedRole }) {
  const { isAuthenticated, role } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/" />
  }

  if (expectedRole && role !== expectedRole) {
    return <Navigate to={`/${role}/dashboard`} />
  }

  return children
}
