import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

class ArtistList extends Component {

    state= {
        artists:[]
    }

    componentDidMount() {
        axios.get('/api/artists').then((res) => {
            this.setState({artists: res.data})
        })
    }

    render() {
        return (
            <div>
                <h1>ArtistList: Yooooo</h1>
                {this.state.artists.map(artist => (
                    <div>
                    <Link to={`/artist/${artist.id}`}>
                    {artist.name}
                    </Link>
                    </div>
                    ))}
            </div>
        );
    }
}

export default ArtistList;