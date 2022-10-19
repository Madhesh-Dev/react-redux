import { connect } from 'react-redux';

import buyCake from '../redux/cake/cakeActions';

const Home = (props) => {
    return (
        <div>
            <h2>Cakes shop : { props.numberofcakes }</h2>
            <button onClick={()=> {props.buycake()} }>Purchase</button>
        </div>
    );
}


const mapStateToProps = (state)=>{

    return {
        numberofcakes : state.numberofcakes
    }
    

}

const mapStateToDispatch = (dispatch)=>{

    return {
        buycake:()=> dispatch(buyCake())
    }


}

 
export default connect(mapStateToProps,mapStateToDispatch)(Home);

