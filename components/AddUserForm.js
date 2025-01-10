import { useState } from 'react';
import Input from './ui/Input';
import Button from './ui/Button';

export default function AddUserForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <Input label="Email" type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
      <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <Button type="submit" classNames='bg-blue-500' >Add User</Button>
    </form>
  );
}
