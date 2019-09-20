import React, { Component } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';

class BookList extends Component {

    static contextType = ThemeContext;

    render() { 
        const { isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return ( 
            <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
                <ul>
                    <li style={{background: theme.ui}} >Test din side</li>
                    <li style={{background: theme.ui}} >Jeg tester din side</li>
                    <li style={{background: theme.ui}} >Din side er testet</li>
                </ul>
            </div>
         );
    }
}
 
export default BookList;