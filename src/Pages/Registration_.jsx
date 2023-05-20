import LayOut from "../components/Product/LayOut"
import "./registr.css"

function RegistrPage(){
    return(
        <>
       
        <LayOut hideFilter>
        <h3 className="h3_sign"> Sign In</h3>
        <div className="Reg_page">
            <button className="icon_button"></button>
            <form autoComplete="off"  onSubmit={(evt)=>(evt.preventDefault)} >
            <input className="Email_" placeholder=" Email" type="email"></input>
            <input className="Password" placeholder=" Password" type="password"></input>
            <button className="sign_In">Sign In</button>
            </form>
        </div>
        </LayOut>
        </>
    )
}
export default RegistrPage