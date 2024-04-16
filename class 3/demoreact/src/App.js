import Profile from "./Profile";

function App() {
  let name = 'Md Faysal Alam'
  let age = 19
  let alive = false
  return (
    <>
      <Profile myName = {name} />
      <Profile myName = 'Parvez Alam' myThana = 'Motlab'/>
      <Profile myThana = 'Tongi' />
      <p>{age >= 18 ? 'He Can Give Vote' : 'He Can\'t Give Vote'}</p>
      <p>{age >= 18 ? (alive === true ? 'He can give vote' : 'He can\'t give vote') : 'He is too child'}</p>
    </>
  );
}

export default App;
