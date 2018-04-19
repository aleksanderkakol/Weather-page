import React from 'react';

class WeatherIcons extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.descript);
        return (
            <div className='WeatherIcons'>

                {/*///-----------SUN------------------*/}
                {this.props.descript==='clear sky'?<div className='icons'>
                    <div className="sun">
                        <div className="rays"> </div>
                    </div>
                </div>:null}
                {this.props.descript==='Sky is Clear'?<div className='icons'>
                    <div className="sun">
                        <div className="rays"> </div>
                    </div>
                </div>:null}

                {/*/////----------RAIN---------*/}

                {this.props.descript==='rain'?<div className="icons">
                    <div className="cloud"> </div>
                    <div className="rain"> </div>
                </div>:null}
                {this.props.descript==='moderate rain'?<div className="icons">
                    <div className="cloud"> </div>
                    <div className="rain"> </div>
                </div>:null}
                {this.props.descript==='heavy intensity rain'?<div className="icons">
                    <div className="cloud"> </div>
                    <div className="rain"> </div>
                </div>:null}


                {/*/////-----------SNOW------------*/}

                {this.props.descript==='snow'?<div className='icons'>
                    <div className="cloud"> </div>
                    <div className="snow">
                        <div className="flake"> </div>
                        <div className="flake"> </div>
                    </div>
                </div>:null}
                {this.props.descript==='light snow'?<div className='icons'>
                    <div className="cloud"> </div>
                    <div className="snow">
                        <div className="flake"> </div>
                        <div className="flake"> </div>
                    </div>
                </div>:null}

                {/*///--------CLOUDS---------*/}

                {this.props.descript==='few clouds'?<div className="icons cloudy">
                    <div className="cloud" > </div>
                    <div className="cloud"> </div>
                </div>:null}
                {this.props.descript==='scattered clouds'?<div className="icons cloudy">
                    <div className="cloud"> </div>
                    <div className="cloud"> </div>
                </div>:null}

                {this.props.descript==='broken clouds'?<div className="icons cloudy">
                    <div className="cloud"> </div>
                    <div className="cloud"> </div>
                </div>:null}
                {this.props.descript==="overcast clouds"?<div className="icons cloudy">
                    <div className="cloud"> </div>
                    <div className="cloud"> </div>
                </div>:null}
                {this.props.descript==="fog"?<div className="icons cloudy">
                    <div className="cloud"> </div>
                    <div className="cloud"> </div>
                </div>:null}
                {this.props.descript==="mist"?<div className="icons cloudy">
                    <div className="cloud"> </div>
                    <div className="cloud"> </div>
                </div>:null}
                {this.props.descript==="haze"?<div className="icons cloudy">
                    <div className="cloud"> </div>
                    <div className="cloud"> </div>
                </div>:null}

                {/*//-------------THUNDERSTORM--------*/}

                {this.props.descript==="thunderstorm with light rain"?<div className="icons">
                    <div className="cloud"> </div>
                    <div className="lightning">
                        <div className="bolt"> </div>
                        <div className="bolt"> </div>
                    </div>
                </div>:null}

                {/*///--------LIGHT----RAIN-------------*/}

                {this.props.descript==='light rain'?<div className='icons'>
                    <div className="cloud"> </div>
                    <div className="sun">
                        <div className="rays"> </div>
                    </div>
                    <div className="rain"> </div>
                </div>:null}
                {this.props.descript==='light intensity shower rain'?<div className='icons'>
                    <div className="cloud"> </div>
                    <div className="sun">
                        <div className="rays"> </div>
                    </div>
                    <div className="rain"> </div>
                </div>:null}
                {this.props.descript==='proximity moderate rain'?<div className='icons'>
                    <div className="cloud"> </div>
                    <div className="sun">
                        <div className="rays"> </div>
                    </div>
                    <div className="rain"> </div>
                </div>:null}
            </div>
        )
    }
}

export default WeatherIcons;