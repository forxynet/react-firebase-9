import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button>log in</button>
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}
