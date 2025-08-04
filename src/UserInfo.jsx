import React from "react";

function UserInfo({ user }) {
  console.log("UserInfo rerender");
  return (
    <div className="user-info">
      <p>Имя:{user.name} </p>
      <p>Возраст:{user.age} </p>
      <p>Статус:{user.isActive ? "Да" : "Нет"}</p>
    </div>
  );
}

export default React.memo(UserInfo);
