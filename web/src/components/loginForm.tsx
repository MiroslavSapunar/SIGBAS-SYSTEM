import { useState } from "react"

import { MdAlternateEmail, MdPassword } from 'react-icons/md';

interface FormData {
  user: string,
  pass: string
}

export default function LoginForm() {

  const [form, setForm] = useState<FormData>({ user: '', pass: '' })

  return (
    <>
      <form onSubmit={e => {
        e.preventDefault()
        console.log("HIII")
      }}
        className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
        <p className="text-lg font-medium">Ingreso con credenciales</p>

        <div>
          <label form="email" className="text-sm font-medium">Usuario</label>

          <div className="relative mt-1">
            <input
              type="email"
              id="email"
              value={form.user}
              onChange={e => setForm({ ...form, user: e.target.value })}
              placeholder="Usuario"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm "
            />

            <span className="absolute inset-y-0 right-4 inline-flex items-center">
              <MdAlternateEmail className="h-5 w-5 text-gray-400" />
            </span>
          </div>
        </div>

        <div>
          <label form="password" className="text-sm font-medium">Contraseña</label>

          <div className="relative mt-1">
            <input
              type="password"
              id="password"
              placeholder="* * * * *"
              value={form.pass}
              onChange={e => setForm({ ...form, pass: e.target.value })}
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            />

            <span className="absolute inset-y-0 right-4 inline-flex items-center">
              <MdPassword className="h-5 w-5 text-gray-400" />
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white  hover:bg-white hover:text-primary hover:border-primary border-transparent border-2 "
        >
          Sign in
        </button>
      </form>
    </>
  )
}