import { useState } from 'react'

function ObjectComponent({}) {
    const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
    });
    
const changeName = () => {
    const names = ['Pavel', 'Ira']
    const randomName = names[Math.floor(Math.random() * names.length)]
    setUser(prevUser => ({...prevUser, name: randomName}))
}

const increaseAge = () => {
    setUser(prevUser => ({...prevUser, age: prevUser.age + 1}))
}

const toggleActivity = () => {
    setUser(prevUser => ({...prevUser, isActive: !prevUser.isActive}))
}
    return (
    <div className="user-profile">
      <h2>Профиль пользователя</h2>
      
      <div className="user-info">
        <p>Имя:{user.name} </p>
        <p>Возраст:{user.age} </p>
        <p>Статус:{user.isActive ? "Да": "Нет"}</p>
      </div>

      <div className="controls">
        <button onClick={changeName}>Сменить имя</button>
        <button onClick={increaseAge}>Увеличить возраст</button>
        <button onClick={toggleActivity}>Переключить активность</button>
      </div>
    </div>
    )
}

export default ObjectComponent
