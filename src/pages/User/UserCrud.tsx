import React, { useState } from 'react'
import InputCom from '../../components/Input'
import ButtonCom from '../../components/Button'

interface User {
  id: number
  name: string
  email: string
}

const UserCrud: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [form, setForm] = useState({ name: '', email: '' })
  const [editId, setEditId] = useState<number | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email) return
    if (editId !== null) {
      setUsers(users.map(u => u.id === editId ? { ...u, ...form } : u))
      setEditId(null)
    } else {
      setUsers([...users, { id: Date.now(), ...form }])
    }
    setForm({ name: '', email: '' })
  }

  const handleEdit = (user: User) => {
    setForm({ name: user.name, email: user.email })
    setEditId(user.id)
  }

  const handleDelete = (id: number) => {
    setUsers(users.filter(u => u.id !== id))
    if (editId === id) {
      setEditId(null)
      setForm({ name: '', email: '' })
    }
  }

  return (
    <div style={{ maxWidth: 500, margin: '40px auto', padding: 24, borderRadius: 12, boxShadow: '0 2px 16px #0001', background: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>User CRUD</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 32 }}>
        <div style={{ marginBottom: 16 }}>
          <InputCom
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ism"
            variant="outlined"
          />
        </div>
        <div style={{ marginBottom: 24 }}>
          <InputCom
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            variant="outlined"
          />
        </div>
        <ButtonCom type="submit" variant="filled" style={{ width: '100%' }}>
          {editId !== null ? 'Saqlash' : 'Qo‘shish'}
        </ButtonCom>
      </form>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map(user => (
          <li key={user.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #eee' }}>
            <div>
              <strong>{user.name}</strong> <br />
              <span style={{ color: '#666', fontSize: 14 }}>{user.email}</span>
            </div>
            <div>
              <ButtonCom variant="outlined" style={{ marginRight: 8 }} onClick={() => handleEdit(user)}>
                Tahrirlash
              </ButtonCom>
              <ButtonCom variant="default" onClick={() => handleDelete(user.id)}>
                O‘chirish
              </ButtonCom>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserCrud 