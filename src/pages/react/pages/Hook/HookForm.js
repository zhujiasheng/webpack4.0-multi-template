import React, { useState } from 'react'

function useInput(initValue = '') {
  const [value, setValue] = useState(initValue)

  const clearInput = () => {
    setValue('')
  }

  const bind = {
    value,
    onChange(e) {
      setValue(e.target.value)
    },
  }

  return [value, bind, clearInput]
}

function HookForm() {
  const [userName, bindUserName, resetUserName] = useInput()
  const [userPass, bindUserPass, resetUserPass] = useInput()

  const resetForm = () => {
    resetUserName()
    resetUserPass()
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(userName, 'username')
    console.log(userPass, 'userPass')
    resetForm()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          密码：
          <input type='text' {...bindUserPass} />
        </label>
      </div>
      <div>
        <label>
          用户名：
          <input type='text' {...bindUserName} />
        </label>
      </div>
      <div>
        <input type='submit' value='提交' />
      </div>
    </form>
  )
}

export default HookForm
