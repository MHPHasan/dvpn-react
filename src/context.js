import Axios from 'axios'
import React, { Component } from 'react'
import allData from './data/data.json'

const DataContext = React.createContext()

class DataProvider extends Component {

    state = {
        allData: {},
        search: false,
        offcanvas: false
    }

    componentDidMount() {
        this.setState({
            allData: allData
        })
    }
    
    handleSearch = () => {
        this.setState({
            search: !this.state.search
        })
    }
    
    handleOffcanvas = () => {
        this.setState({
            offcanvas: !this.state.offcanvas
        })
    }


    render() {

        return (
            <DataContext.Provider value={{...this.state, handleSearch: this.handleSearch, handleOffcanvas: this.handleOffcanvas}}>
                { this.props.children }
            </DataContext.Provider>
        )
    }
}

const DataConsumer = DataContext.Consumer

export {
    DataContext,
    DataProvider,
    DataConsumer
}
