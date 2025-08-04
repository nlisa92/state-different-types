import { useState } from "react";
import UserInfo from "./UserInfo";

function ObjectComponent() {
  const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });

  const changeName = () => {
    const names = ["Pavel", "Ira"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    setUser((prevUser) => ({ ...prevUser, name: randomName }));
  };

  const increaseAge = () => {
    setUser((prevUser) => ({ ...prevUser, age: prevUser.age + 1 }));
  };

  const toggleActivity = () => {
    setUser((prevUser) => ({ ...prevUser, isActive: !prevUser.isActive }));
  };
  return (
    <div className="user-profile">
      <h2>Профиль пользователя</h2>
      <UserInfo user={user} />

      <div className="controls">
        <button onClick={changeName}>Сменить имя</button>
        <button onClick={increaseAge}>Увеличить возраст</button>
        <button onClick={toggleActivity}>Переключить активность</button>
      </div>
    </div>
  );
}

export default ObjectComponent;
