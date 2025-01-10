import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function UserList({ users, onDelete, onChangePassword }) {
  const [editingUserId, setEditingUserId] = useState(null);
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordChange = (userId) => {
    onChangePassword(userId, newPassword);
    setEditingUserId(null);
    setNewPassword('');
  };

  const handleCancel = () => {
    setEditingUserId(null);
    setNewPassword('');
  };

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} className="flex items-center justify-between border-t border-gray-300 pb-4">
          <span>{user.email}</span>
          <div className="flex items-center space-x-2 min-h-[85px]">
            {editingUserId === user.id ? (
              <>
                <Input
                  placeholder="New Password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <Button onClick={() => handlePasswordChange(user.id)} classNames='bg-blue-500'>
                  Save
                </Button>
                <Button onClick={handleCancel} classNames='bg-gray-500' >
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                icon={LockIcon}
                onClick={() => setEditingUserId(user.id)}
                classNames='bg-yellow-500'
              >Change Password</Button>
            )}
            <Button
              icon={DeleteIcon}
              onClick={() => onDelete(user.id)}
              classNames='bg-red-500'
            > Delete </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
