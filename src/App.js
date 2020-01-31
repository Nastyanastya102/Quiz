import React from 'react';
import './App.scss';
import Question from "./questions/questions.js";
import Result from "./result/result.js";
const DESTINATIONS = [
  {
    text: "Who was the legendary Benedictine monk who invented champagne?",
    responses: [
      {text: 'Veuve Clicquot', key : '1'}, 
      {text: 'Dom Perignon', correct: true, key : '2'}, 
      {text: 'G.H. Mumm', key : '3'}, 
      {text: 'Piper-Heidsieck', key : '4'}, 
    ],
    title: "Dom Pierre Pérignon,(December 1639 – 14 September 1715) was a French Benedictine monk who made important contributions to the production and quality of champagne wine in an era when the region's wines were predominantly still red. ",
  }, {
    text: "What is the world's longest river? ",
    responses: [
      {text: 'Amazon', correct: true , key : '1'}, 
      {text: 'Dnipro', key : '2'}, 
      {text: 'Yangzi', key : '3'}, 
      {text: 'Nile', key : '4'}, 
    ],
    title: "The longest river in the world, measured from its mouth to its most distant, year-round source, is likely the Amazon, which flows 4,345 miles from the Peruvian Andes through Brazil to the Atlantic Ocean",
  }, {
    text: "Name the world's largest ocean? ",
    responses: [
      {text: 'Atlantic', key : '2'}, 
      {text: 'Arctic', key : '3'}, 
      {text: 'Indian', key : '4'}, 
      {text: 'Pacific', correct: true , key : '1'}, 
    ],
    title: "Covering approximately 63 million square miles and containing more than half of the free water on Earth, the Pacific is by far the largest of the world’s ocean basins.",
  }, {
     text: "What is the capital city of Spain? ",
      responses: [
        {text: 'Madrid', correct: true , key : '1'}, 
        {text: 'Barchelona', key : '2'}, 
        {text: 'Valencia', key : '3'}, 
        {text: 'Seville', key : '4'}, 
      ],
      title: "Madrid is the third-largest city in the European Union behind only London and Berlin. It is the capital and largest city of Spain with a population of roughly 3.2 million. ",
    }, {
      text: "In 2011, which country hosted a Formula 1 race for the first time? ",
      responses: [
        {text: 'Switzerland', key : '2'}, 
        {text: 'India', correct: true , key : '1'}, 
        {text: 'Marocco', key : '3'}, 
        {text: 'China', key : '4'}, 
      ],
      title: "India hosted aformula 1 race for the first time in 2011",
    }, {
      text: "Name the famous ballet Russian dancer who changed the face of modern ballet ",
      responses: [
        {text: 'Boris Akimov', key : '2'}, 
        {text: 'George Balanchine', key : '3'}, 
        {text: 'Rudolf Nureyev', correct: true , key : '1'}, 
        {text: '	Mikhail Baryshnikov', key : '4'}, 
      ],
      title: "Nijinsky changed the face of dancing and changed the role of male dancers from standing behind the ballerina to being stars themselves",
    }, {
      text: "What is the painting 'La Gioconda' more usually known as? ",
      responses: [
        {text: 'The Mona Lisa', correct: true , key : '1'}, 
        {text: 'Guernica', key : '2'}, 
        {text: 'Girl With a Pearl Earring', key : '3'}, 
        {text: 'The Birth of Venus', key : '4'}, 
      ],
      title: "... a young Florentine woman, Monna Lisa, who in 1495 married the well-known figure, Francesco del Giocondo, and thus came to be known as 'La Gioconda'",
    }, {
      text: "What flavour is Cointreau? ",
      responses: [
        {text: 'Babana', key : '2'}, 
        {text: 'Orange', correct: true , key : '1'}, 
        {text: 'Apple', key : '3'}, 
        {text: 'Blueberries', key : '4'}, 
      ],
      title: "Cointreau is an orange-flavoured triple sec liqueur produced in Saint-Barthélemy-d'Anjou, France.",
    }, {
      text: "Who became the first World Badminton Champion from India? ",
      responses: [
        {text: 'Saina Newal', key : '2'}, 
        {text: 'Sania Mirza', key : '3'}, 
        {text: 'K Srikant', key : '4'}, 
        {text: 'P V Sindhu', correct: true , key : '1'}, 
      ],
      title: "P V Sindhu on Sunday became the first Indian to win badminton World Championships gold by beating familiar rival Nozomi Okuhara of Japan in a lop-sided final here on Sunday",
    }, {
    text: "Dashain' is the grandest festival of ..... ",
      responses: [
      {text: 'Bangladesh' , key : '1'}, 
      {text: 'Bhutan', key : '2'}, 
      {text: 'Nepal', key : '3', correct: true}, 
      {text: 'Sri Lanka', key : '4'}, 
    ],
    title: "This is the longest Hindu festival in Nepal, traditionally celebrated for two weeks with prayers and offerings to Durga, the Universal Mother Goddess. ",
  }, {
    text: " At the time of downloading from the internet, some files may be in compressed form having extension",
    responses: [
      {text: '.rar', key : '1'}, 
      {text: '.tar', key : '2'}, 
      {text: '.zip', key : '3'}, 
      {text: 'All of these', key : '4' , correct: true }, 
    ],
    title: "No comment =)",
  }, 
];




class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          count: 0,
          result : 0,
          showResult: false,
      };
  }
  handleChange = (props,item) => { 
    this.setState({
      count: this.state.count + 1,
    })  
    if(props.correct === true){
      this.setState({
        result: this.state.result + 1
      }) 
    }
    if(DESTINATIONS.length - 1 === this.state.count ) {
      this.setState({
        showResult: true,
      }) 
    }
}
resetClick=()=> {
  this.setState({
    showResult: false,
    count: 0,
    result : 0,
  }) 
}
   render(){
     let destination = DESTINATIONS;
      const showResult = this.state.showResult;
      let block;
      if (!showResult) {
        block = <Question responses={destination} count={this.state.count} handleChange={this.handleChange}/>;
      } else {
      block = <Result result={this.state.result}  resetClick={this.resetClick} length={destination.length}/>;
      }
      return (
        <div className="App">
        {block}
        </div>
      )
    }
} 

export default App;
