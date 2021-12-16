import {UserContext} from "../../context";

export const WithUser = InnerComponent => {
    return props => {
        return (
            <UserContext.Consumer>{
                user => (<InnerComponent user={user}/>)
            }</UserContext.Consumer>
        );
    }
}