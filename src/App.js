import './App.css';
import Button from './Components/Button';
import Users from './Components/User';
import Planets from './Components/Planet';

function App() {
  const age = 25;
  const isEligible = false;
  const users = [
  {name: "Jagan", age: 25},
  {name: "Babu", age: 24},
  {name: "Korra", age: 26}
  ];

  const planets = [
{name: 'Mars', isGasPlanet: false},
{name: 'Earth', isGasPlanet: false},
{name: 'Jupiter', isGasPlanet: true},
{name: 'Venus', isGasPlanet: false},
{name: 'Neptune', isGasPlanet: true},
{name: 'Uranus', isGasPlanet: true}
]

return (
<div className="App">
 {
 users.map((user, index) => (
  <Users name={user.name} age={user.age}/>

 ))
 }
 
 {
  planets
   .map((planet, index) => planet.isGasPlanet && <Planets name={planet.name} />)
 }
 <h1 className='name'>Hi Jagan Babu</h1>
 <Button/>
 <Job salary={99999999} position="SDE 2" company="SAP"/>
 <UserData name="Jagan" age={25} city="Hydearabad"/>
 {age >= 18 ? <h2 className='vote'>You are eligible to vote</h2> : <h2>You are not eligible to vote</h2>}
 <h1 style={{color: isEligible ? "green" : "violet"}}>You have a color</h1>
</div>
);

}

const UserData = (probs) => {
return (
  <div>
    <h1>{probs.name}</h1>
    <h2>{probs.age}</h2>
    <h3>{probs.city}</h3>
  </div>
  )
}

const Job = (probs) => {
return (
  <div>
    <h1>{probs.salary}</h1>
    <h2>{probs.position}</h2>
    <h3>{probs.company}</h3>
  </div>  
 )
}

export default App;