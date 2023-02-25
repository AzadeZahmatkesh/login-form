import React, { Component } from 'react'
import Signin from './Signin'

export default class Signup extends Component {

    constructor(props) {
        super(props)
        this.email = React.createRef()
        this.password = React.createRef()
        this.state = {
            isLogging: true,
            user: {}
        }
    }

    signin() {
        this.setState({
            isLogging: !this.state.isLogging
        })
    }

    componentDidMount() {
        this.email.current.focus()
    }
    async handleClick() {
        const set = await this.setState({
            user: { user: this.email.current.value, password: this.password.current.value }
        })
        const data = this.state.user
        console.log(data)
        const response = await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return await response.json(),
        alert('You are registered , click on signin ')
    }


    render() {
        return (
            <>

                {this.state.isLogging == false ? <Signin />
                    :
                    <section id='main'>

                        Email
                        <input className='form-control ' ref={this.email} type={'email'} placeholder={'Email'} required />
                        <br />
                        Password
                        <input className='form-control ' ref={this.password} type={'password'} placeholder={'Password'} required />
                        <br />
                        Tel
                        <input className='form-control ' type={'tel'} placeholder={'Phone Number'} />

                        <div className="btns mt-2">
                            <button type='submit' className='btn btn-success px-5 mt-5' onClick={this.handleClick.bind(this)}> Sign Up</button>
                        </div>
                        <br />
                        <span >You Login!</span>

                        <button className='mt-2 Btnsign bt ' onClick={this.signin.bind(this)}> Sign in</button>

                    </section>}
            </>
        )
    }
}
