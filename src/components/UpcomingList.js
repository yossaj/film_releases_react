import React, { Component, Fragment } from 'react'
import Movie from './Movie'

class UpcomingList extends Component{

    render(){
        const upcomingComponents = this.props.movies.map((movieData)=>{
            return(
                <Movie 
                    title = {movieData.name}
                >
                    {movieData.url}  
                </Movie>
            )
        })

        return (
            <Fragment>
                {upcomingComponents}
            </Fragment>
        )
    }

}



export default UpcomingList