import { Navigate } from 'react-router-dom'

function ProtectedRoute({ isAuthed, children }) {
    if (!isAuthed) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectedRoute