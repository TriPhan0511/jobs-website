const App = () => {
  const name = 'John'
  const x = 10
  const y = 20
  const names = ['Bard', 'Mary', 'Joe', 'Sara']
  const loggedIn = false

  const welcomeMsg = loggedIn && 'Hi member'
  // const welcomeMsg = loggedIn ? 'Hi member' : 'Hello guest'

  return (
    <>
      <div className='text-5xl text-orange-600'>App</div>
      <p style={{ color: 'red' }}>Hello {name}</p>
      <p>
        The sum of {x} and {y} is {x + y}.
      </p>
      <ul>
        {names.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
      <h2>{welcomeMsg}</h2>
    </>
  )
}

export default App
