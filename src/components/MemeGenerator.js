import React from 'react'
import MemeComponent from './MemeComponent'

class MemeGenerator extends React.Component {
    constructor(props){
        super(props)
        this.state=
        {
            topText: "",
            bottomText: "",
            randomImg : "http://i.imgflip.com/1bij.jpg",
            allMemeImages: [],
        }
        this.handleChange= this.handleChange.bind(this)
        this.generateMeme= this.generateMeme.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => {return response.json()})
            .then(response => {
               // console.log(response.data.memes[0])
                this.setState({allMemeImages: response.data.memes })
            })
    }
    /**
     * onChange handler method
     * that update the corresponding state on every change of the input box
     */
    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }
     
    /**
     * method that, when the "Gen" button is clicked, chooses one of the
     * memes from allMemeImgs array at random and makes it so that is the
     * meme image that shows up in the bottom portion of our meme generator site
     */
    generateMeme(event){
        event.preventDefault()
        let allMemeImages = this.state.allMemeImages
        let imgUrl = (allMemeImages[Math.floor(Math.random()*allMemeImages.length)]).url;
        console.log(imgUrl)
        this.setState(
            {randomImg: imgUrl}
            , () => (console.log(this.state.bottomRandomImg)))     
    }

    render(){       
        return (
            <div>
                <form className="meme-form" onSubmit={this.generateMeme}>
                    <input type="text" name="topText" value={this.state.topText} placeholder="Top text" onChange={this.handleChange}></input>
                    <br />
                    <input type="text" name="bottomText" value={this.state.bottomText} placeholder="Bottom text" onChange={this.handleChange}></input>
                    <button>Gen</button>
                </form>

                <MemeComponent 
                    src={this.state.randomImg}
                    alt="random image"
                    topText={this.state.topText}
                    bottomText={this.state.bottomText}        
                />
            </div>
        )
    }
}
export default MemeGenerator
