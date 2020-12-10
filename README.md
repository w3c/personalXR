# Personalization XR Proof of Concept 

This is a proof of concept user interface for a immersive real-time communication UI. It has been built using the graphical User Interface framework for [A-Frame](https://aframe.io) that was developed by Roland Dubois, @rolanddubois - who is also doing interesting work in the area of XR accessibility. The example also leverages a curved type UI developed by Mozilla for the initial layout.

![Personalization XR - POC default](https://github.com/RealJoshue108/personalXR/blob/master/examples/images/POC_default.png)

Here we aim to demonstrate how user agents may implement Personalization Semantics in XR environments.

- https://w3c.github.io/personalization-semantics/content/

- https://www.w3.org/TR/personalization-semantics-requirements-1.0/

For examples of other implementations please see https://github.com/w3c/personalization-semantics/wiki/Implementations-of-Semantics 

For example, when the Symbol control is activated, a Bliss symbol set UI is loaded:

![Personalization XR - POC Bliss Symbol UI](https://github.com/RealJoshue108/personalXR/blob/master/examples/images/POC_symbols.png) 

The default POC controls map to the following Bliss symbols:

- Play - 16200 play-(to) (play + action indicator)
- Stop - 21841 relay (to stop + to start) - Character (superimposed)
- Lock - 16704 safe,safely,secure, securely (safety + description indicator)  
- Camera - 13111 camera (enclosure + light: box that uses the sunlight to record what the eye sees) - Character (superimposed)
- Phone - 22904 call,telephone,ring-(to) (telephone + action indicator)  
- Search - 27053 exploration ([contr.] search + new)
- EQ - 23804 amplifier_(1) (machine + more + sound + intensity) SYMBOL SYNONYM 
- Star - 17997 Valentine_(card) (paper + love: message of love) 
- Instant messaging - 24509 short_message_system_(SMS),text_message (letter + telephone) 
- Wifi - 27156 wireless_connection (signal + digital + minus + fiber) Bliss-word synonym


## UI Aframe-gui Component framework

Examples of the UI component framework are available at:

[https://rdub80.github.io/aframe-gui/examples/index.html](https://rdub80.github.io/aframe-gui/examples/index.html)

## Why A-frame?

We chose to use A-frame, as it uses a component type architecture - and renders HTML. The entity component system is also useful, as well as the ability to add various ARIA or other accessibility related semantics in a way that would be familiar to developers.

There is also interesting work going on in the A-frame community around accessibilty.
 

## Use in your AFrame project

Include the following Javascript in the head of the page containing your AFrame scene:

`https://rawgit.com/rdub80/aframe-gui/master/dist/aframe-gui.min.js
`
## Building

Run the following to build to the examples/js folder:

`npm run dist-example`

`npm run dist-example-min`

## Run locally

Run the following start the webpack-dev-server:

`npm start`

The webpack-dev-server should now be running at http://localhost:8080


## Personalization Components

This POC uses some of the aframe-gui componenets as a basis for adding Personalization semantics that are designed to trigger customisations in user agents.

In this example, we have added semantics like <code>data-simplify</code>, <code>data-symbol</code>. Note, any behaviours or customisations need to be hand coded but the idea here in our POC is to illustrate that if these sementics are supported in web content, then user agents can modify that content in particular ways what will meet the needs of people with cognitive disabilities.

For example, the following component is provided in the aframe-gui framework, and it has been customised as shown below.


### a-gui-toggle Component

#### Regular Properties

| Property         | Description                                               | Default Value  |
| --------         | -------------------------------------------------------   | -------------  |
| on               | Event that triggers onclick action                        | click          |
| text             |                                                           | 'text'         |
| active           |                                                           | true           |
| checked          |                                                           | false          |
| border-width     |                                                           | 1              |
| font-family      |                                                           | 'Arial'        |
| font-size        |                                                           | '150px'        |
| font-color       |                                                           | #2c3037        |
| border-color     |                                                           | #22252a        |
| background-color |                                                           | #d3d3d4        |
| hover-color      |                                                           | #606876        |
| active-color     |                                                           | #ed5b21        |
| handle-color     |                                                           | #d3d3d4        |
| height           | Height of item                                            | 1              |
| width            | Width of item                                             | 1              |
| margin           | Margin around item                                        | 0 0 0 0        |


#### Example of componenent customised with Personalization Semantics

The following component uses <code>data-simplification</code>, and <code>data-purpose</code> semantics, along with some ARIA role, state information - when activated the UI will be simplified by removing some controls.

```html
<a-gui-toggle simply
			data-simplification="critical"
			data-purpose="simplify"
				role="switch"
				aria-checked="false"
				state="off"
				aria-label="Simplication Control"
				width="2.2" height="0.75"
				onclick=" "
				value="Simple"
				font-family="Arial"
        			font-size="80px"
				margin="0 0 0.05 0"
				>
			</a-gui-toggle>

```

The following component uses <code>data-purpose</code>, and <code>data-symbol</code> sematics, along with some ARIA role, state information, to load a Bliss symbol set, to replace the default user interface.

```html
<a-gui-toggle symbols
			data-purpose="symbol-set"
			data-symbol="17978"
				role="switch"
				aria-checked="false"
				aria-label="Load Symbol set"
				state="off"
				width="2.2" height="0.75"
				onclick=""
				value="Symbols"
				font-family="Arial"
        			font-size="80px"
				margin="0 0 0.05 0"
				>
			</a-gui-toggle>
```

The idea is this POC demonstrates how user agents in XR may implement some of these Personalization Semantics - so rather than behaviours being defined by the author, the can simply be called by the author and implemented by the user agent. This would remove much complexity when building accessible XR experiences.