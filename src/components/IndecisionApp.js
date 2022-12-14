import React from "react";
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from "./OptionModal";


export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove)
    }))
  }
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }))
  }
  handleAddOption = (option) => {
    if (!option) {
      return 'enter valid value to add item'
    } else if (this.state.options.includes(option)) {
      return 'This option already exists'
    }
    this.setState((prevState) => ({ 
      options: [...prevState.options, option] 
    }));
  }
  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  }
  componentDidMount() {
    try {
      const jsonData = localStorage.getItem('options')
      const options = JSON.parse(jsonData)

      if (options) this.setState(() => ({ options }))
    } catch (e) {
      throw new Error(e);
    }

  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const jsonData = JSON.stringify(this.state.options)
      localStorage.setItem('options', jsonData)
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  render() {
    const subtitle = 'Let a computer call the shots!';
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action 
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options 
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption 
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    )
  }
}