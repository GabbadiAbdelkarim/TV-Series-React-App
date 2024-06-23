import React, {Component} from "react";
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from "../../components/Intro";

class Series extends Component{
    state = {
        series : [],
        seriesName:'',
        isFetching: false
      }
    
    //   componentDidMount(){
    //     // const series = ["Vikings", "Game of Thrones"];
    //     // setTimeout(() => {
    //     //   this.setState({series}) // series : lesSeries si != nom
    //     // }, 2000); //2sec
    //     fetch('http://api.tvmaze.com/search/shows?q=Vikings')
    //     .then((response) => response.json()) //promise
    //     .then(json => this.setState({series:json}))
    //   }

    onSeriesInputChange = e =>{
        this.setState({seriesName:e.target.value, isFetching:true});

        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then((response) => response.json()) //promise
            .then(json => this.setState({series:json, isFetching:false}))
    }

    render(){
        const {series, seriesName, isFetching} = this.state;

        return (
            <div>
                <Intro message="Ici vous trouvez vos meilleures series"/>
                <div>
                    <input value={seriesName} type="text" onChange={this.onSeriesInputChange} />
                </div>
                {
                    !isFetching && series.length ===0 && seriesName.trim() ===''
                    &&
                    <p>Veuillez rechercher une serie</p>
                }
                {
                     !isFetching && series.length ===0 && seriesName.trim() !==''
                     &&
                     <p>Pas de résultat</p>
                }
                {
                    isFetching && <Loader/>
                }
                {
                    !isFetching && <SeriesList list={this.state.series}/>
                }
                <SeriesList list={this.state.series} />
            </div>
        )
    }
}

export default Series;