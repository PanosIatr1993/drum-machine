class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      display: "‎",
      volume: 0.3 };

    this.handleDrumPad = this.handleDrumPad.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.power = this.power.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  /*Handles Drum Pad Buttons*/
  handleDrumPad(event) {
    if (this.state.power === false) {
      return;
    }

    switch (event.target.id) {
      case "heater-1":
        document.getElementById('Q').play();
        this.setState({ display: "Heater 1" });
        break;
      case "heater-2":
        document.getElementById('W').play();
        this.setState({ display: "Heater 2" });
        break;
      case "heater-3":
        document.getElementById('E').play();
        this.setState({ display: "Heater 3" });
        break;
      case "heater-4":
        document.getElementById('A').play();
        this.setState({ display: "Heater 4" });
        break;
      case "clap":
        document.getElementById('S').play();
        this.setState({ display: "Clap" });
        break;
      case "open-hh":
        document.getElementById('D').play();
        this.setState({ display: "Open HH" });
        break;
      case "kick-n-hat":
        document.getElementById('Z').play();
        this.setState({ display: "Kick-n-Hat" });
        break;
      case "kick":
        document.getElementById('X').play();
        this.setState({ display: "Kick" });
        break;
      case "closed-hh":
        document.getElementById('C').play();
        this.setState({ display: "Closed HH" });
        break;
      default:
        break;}

  }

  /*Handles Pressing Corresponding Keys*/
  handleKeyDown(event) {
    if (this.state.power === false) {
      return;
    }

    const keyMappings = {
      KeyQ: 'heater-1',
      KeyW: 'heater-2',
      KeyE: 'heater-3',
      KeyA: 'heater-4',
      KeyS: 'clap',
      KeyD: 'open-hh',
      KeyZ: 'kick-n-hat',
      KeyX: 'kick',
      KeyC: 'closed-hh' };


    const drumPadId = keyMappings[event.code];
    if (drumPadId) {
      const drumPadButton = document.getElementById(drumPadId);
      if (drumPadButton) {
        drumPadButton.click();
      }
    }
  }

  handleVolumeChange(event) {
    const newVolume = parseFloat(event.target.value);
    this.setState({ volume: newVolume });

    // Update the volume of each audio element
    const audioElements = document.querySelectorAll('.clip');
    audioElements.forEach(audio => {
      audio.volume = newVolume;
    });
  }

  power() {
    this.setState(prevState => ({
      power: !prevState.power }));

  }

  render() {
    const powerButton = {
      backgroundColor: this.state.power ? 'green' : 'red',
      height: 20,
      width: 20 };


    return /*#__PURE__*/(
      React.createElement("div", { id: "container", className: "container-fluid" }, /*#__PURE__*/
      React.createElement("div", { id: "drum-pads", className: "col-md-8" }, /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("button", { id: "heater-1", className: "drum-pad col-md-3", onClick: this.handleDrumPad }, "Q", /*#__PURE__*/React.createElement("audio", { id: "Q", className: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" })), /*#__PURE__*/

      React.createElement("div", { className: "col-md-1" }), /*#__PURE__*/
      React.createElement("button", { id: "heater-2", className: "drum-pad col-md-3", onClick: this.handleDrumPad }, "W", /*#__PURE__*/React.createElement("audio", { id: "W", className: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" })), /*#__PURE__*/

      React.createElement("div", { className: "col-md-1" }), /*#__PURE__*/
      React.createElement("button", { id: "heater-3", className: "drum-pad col-md-3", onClick: this.handleDrumPad }, "E", /*#__PURE__*/React.createElement("audio", { id: "E", className: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" }))), /*#__PURE__*/


      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("button", { id: "heater-4", className: "drum-pad col-md-3", onClick: this.handleDrumPad }, "A", /*#__PURE__*/React.createElement("audio", { id: "A", className: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" })), /*#__PURE__*/

      React.createElement("div", { className: "col-md-1" }), /*#__PURE__*/
      React.createElement("button", { id: "clap", className: "drum-pad col-md-3", onClick: this.handleDrumPad }, "S", /*#__PURE__*/React.createElement("audio", { id: "S", className: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" })), /*#__PURE__*/

      React.createElement("div", { className: "col-md-1" }), /*#__PURE__*/
      React.createElement("button", { id: "open-hh", className: "drum-pad col-md-3", onClick: this.handleDrumPad }, "D", /*#__PURE__*/React.createElement("audio", { id: "D", className: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" }))), /*#__PURE__*/


      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("button", { id: "kick-n-hat", className: "drum-pad col-md-3", onClick: this.handleDrumPad }, "Z", /*#__PURE__*/React.createElement("audio", { id: "Z", className: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" })), /*#__PURE__*/

      React.createElement("div", { className: "col-md-1" }), /*#__PURE__*/
      React.createElement("button", { id: "kick", className: "drum-pad col-md-3", onClick: this.handleDrumPad }, "X", /*#__PURE__*/React.createElement("audio", { id: "X", className: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" })), /*#__PURE__*/

      React.createElement("div", { className: "col-md-1" }), /*#__PURE__*/
      React.createElement("button", { id: "closed-hh", className: "drum-pad col-md-3", onClick: this.handleDrumPad }, "C", /*#__PURE__*/React.createElement("audio", { id: "C", className: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" })))), /*#__PURE__*/



      React.createElement("div", { id: "sidebar", className: "col-md-4" }, /*#__PURE__*/
      React.createElement("p", { id: "power-text" }, "Power"), /*#__PURE__*/
      React.createElement("button", { id: "power-button", onClick: this.power, style: powerButton }), /*#__PURE__*/
      React.createElement("div", { id: "display" }, this.state.display), /*#__PURE__*/
      React.createElement("div", { id: "volume-slider" }, /*#__PURE__*/
      React.createElement("input", { max: "1", min: "0", step: "0.01", type: "range", value: "0.3", value: this.state.volume, onChange: this.handleVolumeChange })))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(DrumMachine, null), document.getElementById("drum-machine"));