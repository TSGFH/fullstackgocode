
const ButtonElement = React.createElement('button', {onClick: () => alert("hi")}, 'clickMe')
const ParaElement = React.createElement('p',{} , 'hi')
const HeadElement = React.createElement('h1',{} , 'bye')
const SpanElement = React.createElement('span',{} , 'test')
const ImageElement = React.createElement("img", {src:"axe.png"}, null)
const LegendElement = React.createElement('legend',{} , 'Legendery')
const LinkElement = React.createElement('a',{href:"https://www.w3schools.com"} , 'links')
const LabelElement = React.createElement('label',{} , 'test2')
const ListElement = React.createElement('li',{} , 'super')
const TimeElement = React.createElement('time',{dateTime:"2008-02-14 20:00"} , '2008-02-14 20:00')


ReactDOM.render(ButtonElement, document.getElementById("app"))
ReactDOM.render(ParaElement, document.getElementById("ee"))
ReactDOM.render(HeadElement, document.getElementById("aa"))
ReactDOM.render(SpanElement, document.getElementById("bb"))
ReactDOM.render(ImageElement, document.getElementById("cc"))
ReactDOM.render(LegendElement, document.getElementById("dd"))
ReactDOM.render(LinkElement, document.getElementById("ff"))
ReactDOM.render(LabelElement, document.getElementById("gg"))
ReactDOM.render(ListElement, document.getElementById("ii"))
ReactDOM.render(TimeElement, document.getElementById("uu"))
