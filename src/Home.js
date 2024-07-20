const Home = (props) => {
 const logoffHandler = props.logoffHandler


  return (
    <div>
      <header>
        <h1>Welcome to Login</h1>
      </header>
      <div>
        <button onClick={logoffHandler}>Log Off</button>
      </div>
    </div>
  );
};

export default Home;
