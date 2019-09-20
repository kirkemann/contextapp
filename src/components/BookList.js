import React, { useContext } from 'react';//der kan brugs Component
import { ThemeContext } from '../Contexts/ThemeContext';
import { BookContext } from '../Contexts/BookContext';

// class BookList extends Component {

//     static contextType = ThemeContext;

//     render() { 
//         const { isLightTheme, light, dark} = this.context;
//         const theme = isLightTheme ? light : dark;
//         return ( 
//             <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
//                 <ul>
//                     <li style={{background: theme.ui}} >Test din side</li>
//                     <li style={{background: theme.ui}} >Jeg tester din side</li>
//                     <li style={{background: theme.ui}} >Din side er testet</li>
//                 </ul>
//             </div>
//          );
//     }
// }

const BookList = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const { books } = useContext( BookContext );
    const theme = isLightTheme ? light : dark;
    return ( 
        <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
            <ul>
                {books.map(book =>{
                    return ( 
                        <li key={book.id} style={{background: theme.ui}} >{ book.title }</li>
                    )
                })} 
            </ul>
        </div>
     );
}
 
export default BookList;
 
// export default BookList;