import React, { Component } from 'react';

import {
  Baseline,
  Box,
  Grid,
  Title,
  SubTitle,
  Button,
  Paragraph,
  TextInput,
  PasswordInput,
  FormField,
} from '../src';

class App extends Component {
  state = {
    value: 'wdawd',
  }

  onInput = (value) => {
    this.setState({ value });
  }

  onClick = () => 'Clicked!';

  render() {
    return (
      <Baseline>
        <Box>
          <Title text="Hello, World" />
          <SubTitle text="Hello, World" />
          <Grid>
            <Button text="LOLOL" onClick={this.onClick} />
            <Button text="LOLOL" disabled onClick={this.onClick} />
            <Button text="LOLOL" onClick={this.onClick} />
          </Grid>
          <Paragraph>Basic Text Example</Paragraph>
          <Grid>
            <TextInput
              onInput={this.onInput}
              onChange={() => console.log('CHANGE')}
              onEnter={() => console.log('SUBMIT')}
              value={this.state.value}
            />
            <TextInput placeholder={'lolol'} onInput={this.onInput} value={this.state.value} />
            <TextInput readOnly onInput={this.onInput} value={this.state.value} />
            <TextInput onInput={this.onInput} value={this.state.value} />
            <PasswordInput onInput={this.onInput} value={this.state.value} />
          </Grid>
          <FormField name="HAHAHA">
            <TextInput onInput={this.onInput} value={this.state.value} />
          </FormField>
        </Box>
      </Baseline>
    );
  }
}

export default App;
