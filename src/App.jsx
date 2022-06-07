import React from 'react';

function App() {
  const profiles = [
    { name: 'taro', age: 10 },
    { name: 'Hanako', age: 5 }
  ]
  return (
    <div className='App'>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  );
}

function User(props) {
  return <div>I am {props.name}, and {props.age} years old1</div>;
}

export default App;
