import React from 'react';
import ReactDOM from 'react-dom';
import Styles from './Style.css';
import Content from './components/content';

class Main extends React.Component {

render() {

return(
 <div className={Styles.body}>
   <Content/>
</div>
);
}

}

ReactDOM.render(<Main/>, app);
