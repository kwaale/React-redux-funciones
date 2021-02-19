import { connect } from 'react-redux';
const EstadoNumeros = (props)=>{    
    return (
        <div>
            {props.contador}
        </div>
    )
}
const mapStateToProps = (state)=>{
    console.log("Estado",state)
    return{
        contador:state.numReducer.contador
    }
}
export default connect (mapStateToProps)(EstadoNumeros);