import { connect } from 'react-redux';
import {incrementar, decrementar } from '../redux/redux1';
const Botones = (props)=>{
    return (
        <div>
            <button onClick={()=>props.incrementar(1)}>Incrementar</button>
            <button onClick={()=>props.decrementar(1)}>Decrementar</button>
        </div>
    )
}

const mapDispatchToProps = {
    decrementar,
    incrementar
}
export default connect(null, mapDispatchToProps)(Botones);