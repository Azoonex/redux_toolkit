import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./userSlice"
import { Typography } from "@mui/material"

export default function User() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
                {
                    user.loading && <h2>Loading...</h2>
                }
                {user.loading && user.error ? <h3>Error : {user.error}</h3> : null}
                {
                    !user.loading && user.users.length ? (
                        <ul>
                            {user.users.map(user => (
                                <li key={user.id}>{user.title}</li>
                            ))}
                        </ul>
                    )
                        : null}
        </div>
    )
}
