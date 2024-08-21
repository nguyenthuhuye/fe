import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../actions/index'

export const useAuth = () => {
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)

    const handleLogin = (data) => {
        // console.log(data, 'dataa');
        dispatch(authActions.loginRequest(data))
    }

    return {
        authState,
        handleLogin
    }
}