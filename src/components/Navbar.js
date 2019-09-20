import React, {  useContext } from 'react';//Brug Component,
import { ThemeContext } from '../Contexts/ThemeContext';
import { AuthContext } from '../Contexts/AuthContext';

// class Navbar extends Component {
//     // static contextType = ThemeContext;

    
//     render() { 
//         console.log(this.context);

        
//         return ( 
//             <AuthContext.Consumer>{(AuthContext) => (
//                 <ThemeContext.Consumer>{(themecontext) => {
//                     const { isAuthenticated, toggleAuth } = AuthContext;
//                     const { isLightTheme, light, dark } = themecontext;
//                     const theme = isLightTheme ? light : dark;
//                         return(
//                             <nav style={{ background: theme.ui, color: theme.syntax }}>
//                                 <h1>Context App</h1>
//                                 <div onClick={toggleAuth}>
//                                     { isAuthenticated ? 'Logged in' : 'Logged out' }
//                                 </div>
//                                 <ul>
//                                     <li>Home</li>
//                                     <li>About</li>
//                                     <li>Contact</li>
//                                 </ul>
//                             </nav>
//                         )
//                 }}</ThemeContext.Consumer>
//                 )}
            
//                 </AuthContext.Consumer>
//          );
//     }
// }

const Navbar = () => {
        const { isLightTheme, light, dark } = useContext(ThemeContext);
        const { isAuthenticated, toggleAuth } = useContext(AuthContext);
        const theme = isLightTheme ? light : dark;
    return ( 

         <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
                <div onClick={toggleAuth}>
                    { isAuthenticated ? 'Logged in' : 'Logged out' }
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
     );
}
 
export default Navbar;

// export default Navbar;