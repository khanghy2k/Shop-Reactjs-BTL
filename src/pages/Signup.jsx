import React,{useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container,Row,Col,Form,FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import {  createUserWithEmailAndPassword,updateProfile } from "firebase/auth";

import {ref,uploadBytesResumable,getDownloadURL} from "firebase/storage";
import { setDoc,doc } from 'firebase/firestore';
import {auth} from '../firebase.config';
import {storage} from "../firebase.config";
import {toast} from 'react-toastify';
import "../styles/login.css";

const Signup = () => {

  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [file,setFile] = useState(null);
  const [loading,setLoading] = useState(false)

  const signup = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const userCredential = await createUserWithEmailAndPassword(auth,email,password)

      const user = userCredential.user
      console.log(user)
    } catch (error) {

      
    }
  }



  return <Helmet title ='Signup'>
    <section>
      <Container>
        <Row>
          <Col lg='6' className='m-auto text-center'>
          <h3 className='fw-bold mb-4'>SignUp</h3>

          <Form className='auth__form' onSubmit={signup}>
          <FormGroup className='form__group'>
            <input type='text' placeholder='Username' 
            value={username} onChange={e =>setUsername(e.target.value)}/>
            </FormGroup>

            <FormGroup className='form__group'>
            <input type='email' placeholder='Enter your email' 
            value={email} onChange={e =>setEmail(e.target.value)}/>
            </FormGroup>

            <FormGroup className='form__group'>
            <input type='password' placeholder='Enter your password'
               value={password} onChange={e =>setPassword(e.target.value)}
            />
            </FormGroup>

            <FormGroup className='form__group'>
            <input 
                type='file'
             
               onChange={e =>setFile(e.target.files[0])}
            />
            </FormGroup>


            <button type='sumbit' className='buy__btn auth__btn'>
              Create an Account
            </button>
            <p>Already have an account ?<Link to='/login'>Login</Link></p>
          </Form>
      
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Signup;