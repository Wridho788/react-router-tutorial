import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {
    const params = useParams()
    const userId = params.userId
    return (
        <div>Detail About use {userId}</div>
    )
}

export default UserDetail