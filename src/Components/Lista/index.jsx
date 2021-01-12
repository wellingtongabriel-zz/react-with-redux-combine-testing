import React, { Component } from 'react'
import './index.css'

import { connect } from 'react-redux'
import api from '../../Services/Api'

class App extends Component {

    constructor(props)
    {
        super(props)
    }

    async componentDidMount ()
    {
        const response = await api.get('todos')
        const res = await this.props.setLista(response.data)
    }

    render ()
    {
        const { lista }  = { ...this.props }
        return (
            <div>
                <article id="article-content">
                    {
                        lista.map( lis => (
                            <div key={lis._id}>
                                <span>
                                    <strong> { lis.description } </strong>                           
                                    Done: { lis.done === true ? 'Yes' : 'No' }
                                </span>

                                <span> { lis.createdAt } </span>
                            </div>
                        ))
                    }
                </article>
            </div>
        )

    }

}

const mapStateToProps = state => ({
  lista: state.rootReducer.lista
})

const mapDispatchToProps = (dispatch) => ({
    setLista: ( lista ) => {
        dispatch({type: 'LISTAGEM', lista: lista })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)( App )