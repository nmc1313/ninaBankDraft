// function Logout(){
//     const [show, setShow]     = React.useState(true);
//     const [status, setStatus] = React.useState('');  
  
//     return (
//       <Card
//         bgcolor="info"
//         header="Logout"
//         status={status}
//         body={show ? 
//           <LogoutForm setShow={setShow} setStatus={setStatus}/> :
//           <LogoutMsg setShow={setShow} setStatus={setStatus}/>}
//       />
//     ) 
//   }
  
//   function LogoutMsg(props){
//     return(<>
//       <h5>Success</h5>
//       <button type="submit" 
//         className="btn btn-light" 
//         onClick={() => props.setShow(true)}>
//            Thanks for Visiting
//       </button>
//     </>);
//   }
  
//   function LogoutForm(props){
//     const [email, setEmail]       = React.useState('');
//     const [password, setPassword] = React.useState('');
//     //const currentUser = {};
  
//     function handle(){
//       fetch(`/account/login/${email}/${password}`)
//       .then(response => response.text())
//       .then(text => {
//           try {
//               const data = JSON.parse(text);
//               props.setStatus('');
//               props.setShow(false);
//               console.log('JSON:', data);
//           } catch(err) {
//               props.setStatus(text)
//               console.log('err:', text);
//           }
//       });
//       document.getElementById('createAccount').style.display = 'inline';
//       document.getElementById('login').style.display = 'inline';
//       document.getElementById('logout').style.display = 'none';
//       document.getElementById('deposit').style.display = 'none';
//       document.getElementById('withdraw').style.display = 'none';
//       // document.getElementById('balance').style.display = 'inline';
//       document.getElementById('allData').style.display = 'none';
//       // currentUser.email = email; 
//       // currentUser.password = password; 
//       // currentUser.balance = Number(data.balance[0].balance);
//       // localStorage.setItem('currentUser', JSON.stringify(currentUser));
//       // console.log(currentUser.balance);
//     }
  
  
//     return (<>
  
//       Email<br/>
//       <input type="input" 
//         className="form-control" 
//         placeholder="Enter email" 
//         value={email} 
//         onChange={e => setEmail(e.currentTarget.value)}/><br/>
  
//       Password<br/>
//       <input type="password" 
//         className="form-control" 
//         placeholder="Enter password" 
//         value={password} 
//         onChange={e => setPassword(e.currentTarget.value)}/><br/>
  
//       <button type="submit" className="btn btn-light" onClick={handle}>Logout</button>
     
//     </>);
//   }

// function Logout(){
//     const [show, setShow]     = React.useState(true);
//     const [status, setStatus] = React.useState('');  
  
//     return (
//       <Card
//         bgcolor="secondary"
//         header="Logout"
//         //status={status}
//         body={LogoutForm}
//       />
//     ) 
  
//   function LogoutMsg(props){
//     return(<>
//       <h5>Successfully Logged Out</h5>
//       <button type="submit" 
//         className="btn btn-light" 
//         onClick={() => props.setShow(true)}>
//           Click login to login again.
//       </button>
//     </>);
//   }
  
//   function LogoutForm(props){
//     // const [email, setEmail]       = React.useState('');
//     // const [password, setPassword] = React.useState('');
//     //const currentUser = {};
  
//     function handle(){
//       document.getElementById('createAccount').style.display = 'inline';
//       document.getElementById('login').style.display = 'inline';
//       document.getElementById('logout').style.display = 'none';
//       document.getElementById('deposit').style.display = 'none';
//       document.getElementById('withdraw').style.display = 'none';
//       document.getElementById('balance').style.display = 'none';
//       document.getElementById('allData').style.display = 'none';
//       // currentUser.email = email; 
//       // currentUser.password = password; 
//       // currentUser.balance = Number(data.balance[0].balance);
//       // localStorage.setItem('currentUser', JSON.stringify(currentUser));
//       // console.log(currentUser.balance);
//     }
  
  
//     return (<>
  
//       {/* Email<br/>
//       <input type="input" 
//         className="form-control" 
//         placeholder="Enter email" 
//         value={email} 
//         onChange={e => setEmail(e.currentTarget.value)}/><br/>
  
//       Password<br/>
//       <input type="password" 
//         className="form-control" 
//         placeholder="Enter password" 
//         value={password} 
//         onChange={e => setPassword(e.currentTarget.value)}/><br/> */}
  
//       <button type="submit" className="btn btn-light" onClick={handle}>Logout</button>
     
//     </>); 
//   }
// }
