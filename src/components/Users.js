import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const showActiveUsers = searchParams.get('filter') === 'active'
    return (
        <div>
            <h1>user 1</h1>
            <h1>user 2</h1>
            <h1>user 3</h1>
            <Outlet />
            <div>
                <button onClick={() => setSearchParams({ filter: 'active' })}>Active User</button>
                <button onClick={() => setSearchParams({})}>Reset User</button>
            </div>
            {
                showActiveUsers ? (
                    <h2>Showing Active user</h2>
                ) : (
                    <h2>Showing All users</h2>
                )
            }
        </div>
    )
}

export default Users