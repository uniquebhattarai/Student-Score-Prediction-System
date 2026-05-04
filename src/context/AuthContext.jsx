import React, { createContext, useContext, useState, useEffect } from 'react'
import { getUser, getPhoto } from '@services/Apis'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => !!localStorage.getItem('access')
  )
  const [role, setRole] = useState(() => localStorage.getItem('role') || '')
  const [fullName, setFullName] = useState(
    () => localStorage.getItem('fullName') || ''
  )
  const [photoUrl, setPhotoUrl] = useState('')

  // Fetch user details whenever the user logs in
  useEffect(() => {
    if (!isAuthenticated) return

    const fetchUserDetails = async () => {
      try {
        const userData = await getUser()
        const user = Array.isArray(userData) ? userData[0] : userData
        setFullName(user?.data?.full_name || '')
        setRole(user?.data?.role || '')

        const photoResponse = await getPhoto()
        if (photoResponse?.profile_picture_url) {
          setPhotoUrl(photoResponse.profile_picture_url)
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error)
      }
    }

    fetchUserDetails()
  }, [isAuthenticated])

  const login = () => {
    setIsAuthenticated(true)
    setRole(localStorage.getItem('role') || '')
  }

  const logout = () => {
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    localStorage.removeItem('role')
    localStorage.removeItem('fullName')
    setIsAuthenticated(false)
    setRole('')
    setFullName('')
    setPhotoUrl('')
    // Redirect is handled by the caller or PrivateRoute
    window.location.href = '/'
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, role, fullName, photoUrl, setPhotoUrl, setFullName }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>')
  return ctx
}
