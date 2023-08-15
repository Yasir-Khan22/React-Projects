import "./App.css"
const App = () => {
  return (
    <div className="navbar">
      <nav>
        <div>
          <img className="logo" src="./images/brand-logo.png" alt="" />
        </div>
        <ul>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#location">Location</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>

        <button>Login</button>
      </nav>
    </div>
  )
}
export default App;