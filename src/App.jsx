import { useState } from 'react'


function App() {
  const [form, setForm] = useState({name:'', email:'', pass:'', confirm:'', otp:''});
  const [users, setUsers] = useState([]);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic email validation: must contain '@'
    if (!form.email || !form.email.includes('@')) {
      alert('Please enter a valid email containing "@"');
      return;
    }
 
    if (form.pass !== form.confirm) {
      alert('Password doent match');
      return;
    }

    if (form.pass.length < 8) {
      alert('Required Min 8 chars');
      return;
    }

    const arr = [123, 234, 345];

    // accept OTP that matches one of the allowed values
    if (!arr.map(String).includes(form.otp)) {
      console.log(typeof(form.otp));
      alert('Not match otp')
      return;
    }

    setUsers([...users, form]);
    setForm({name:'', email:'', pass:'', confirm:'', otp:''})

    alert('OTP Verified Successfully, now you have registerd')
  }

  return (
    <>
    <h1>Registration Form</h1>
      <form>
        <input type="text" placeholder='Enter username' value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}/>
        <input type="email" placeholder='Enter email' value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}/>
        <input type="text" placeholder='Enter password' value={form.pass} onChange={(e) => setForm({...form, pass: e.target.value})}/>
        <input type="text" placeholder='Enter confirm password' value={form.confirm} onChange={(e) => setForm({...form, confirm: e.target.value})}/>
        <input type="text" placeholder='enter otp from 123, 234, 345' value={form.otp} onChange={(e) => setForm({...form, otp: e.target.value})}/>
        <button onClick={handleSubmit}>Register</button>
      </form>

      <ul>
        <h3>Registered</h3>
        {users.map((user, index) => (
            <li key={index}>
              {user.name} - {user.email}
            </li>
          ))}
      </ul>

     
    </>
  )
}

export default App
