# Wizard (1.0.0)

## Description
Is a simple wizard

the event `onChange` return a like standart event, but this object contain additional props:
```javascript
const event = {
    target: {
        name: 'foo' // name to wizard,
        value: 1 // current step
    },
    additionalProps: {
        count: 0 // this props contain length steps
    }
};
```

## Implementation

```javascript
    <Wizard
        ref={this.Wizard}
        onChange={this.handlerOnChange}
        name="wizardExample"
        initialStep={this.state.initialStep}
    >
        <Step title="Title 01">first content</Step>
        <Step title="Title 02">second content</Step>
        <Step title="Title 03">third content</Step>
        <Step title={(<span><strong>4</strong> El</span>)}>
            other content
        </Step>
        <Step title="Title 05">
            <div>last content</div>
        </Step>
    </Wizard>
```

## Method

name        | type      | description                               |
------------|-----------|-------------------------------------------|
ref         | React ref | react ref, (React.createRef()) |
onChange    | Function  | this event is call when step is changed |
name        | string    | unique name to wizard (this name is return in event on method onChange) |
initialStep | integer   | initial index to start wizard |
onNext      | Function  | provider with ref (ref.current.onNext()), change wizard to next page |
onPrevious  | Function  | provider with ref (ref.current.onPrevious()), change to wizard to prev page |