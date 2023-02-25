import React, { Component } from 'react'
import Signup from './Signup'
import BlogPost from './BlogPost'

export default class Signin extends Component {

    constructor(props) {
        super(props)

        this.email = React.createRef()
        this.password = React.createRef()
        this.state = {
            isLogging: true,
            admin: false,
            userAcount: null
        }

    }

    signup() {
        this.setState({
            isLogging: !this.state.isLogging
        })
    }

    componentDidMount() {
        fetch('http://localhost:3001/users?').then(response => response.json()).then(data => this.setState({
            userAcount: data
        }))

    }

    checked() {
        const array = this.state.userAcount.filter(data => {
            return data.user == this.email.current.value && data.password == this.password.current.value;
        });
        if (array.length > 0){
            this.setState({
                admin: true

            })}
            else{
                alert('Username or Password Incorrect!');
                this.email.current.value='';
                this.password.current.value=''

            }

    }

    render() {
        return (
            <>
                {console.log(this.state.userAcount)}
                {this.state.admin == true ? <BlogPost />

                    : <>
                        {this.state.isLogging == false ? <Signup />
                            :
                            <section id='main'>

                                Email
                                <input className='form-control ' ref={this.email} type={'email'} placeholder={'Email'} required />
                                <br />

                                Password
                                <input className='form-control ' ref={this.password} type={'password'} placeholder={'Password'} required />

                                <div className="btns mt-2">
                                    <button type='submit' className='btn btn-primary px-5 mt-5' onClick={this.checked.bind(this)} > Sign in</button>
                                </div>

                                <span >Not Register?</span>

                                <button className='mt-4 Btnsign' onClick={this.signup.bind(this)}>Sign Up</button>

                            </section>

                        }
                    </>
                }




            </>
        )
    }
}
