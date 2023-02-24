import React from "react"

export default function App() {
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    const [formData, setFormData] = React.useState({
        userid:"",password1:"",password2:"",newsletter:false
    })
    function handleChange(event){
        const {name,value,type,checked} = event.target
        setFormData({
            ...formData,
            [name]: type==="checkbox" ? checked : value
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        formData.email && formData.password1&&formData.password2 && formData.password1 == formData.password2 ? 
        console.log("SUCCESS") : 
        console.log("Passwords Dont Match")
    }
    console.log(formData)
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    value={formData.email}
                    name="userid"
                    placeholder="User ID"
                    className="form--input"
                    onChange={handleChange}
                />
                <input 
                    name="password1"
                    value={formData.password1}
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                />
                {/* <input 
                    name="password2"
                    value={formData.password2}
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                /> */}
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="newsletter"
                        value={formData.newsletter}
                        onChange={handleChange}
                        
                    />
                    <label htmlFor="okayToEmail">Remember Me</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Log In
                </button>
            </form>
        </div>
    )
}
