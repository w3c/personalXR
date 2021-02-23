# Personalization XR Proof of Concept 

This is a proof of concept user interface for a immersive real-time communication UI. It has been built using the [Graphical User Interface framework for A-Frame](https://github.com/rdub80/aframe-gui) that was developed by Roland Dubois, @rdub80. The example also uses a  [curved image developed by Mozilla](https://aframe.io/aframe/examples/showcase/curved-mockups/) for the initial layout.

![Prototype of default state of futuristic communication interface with a large curved screen, and a range of UI controls for making and managing calls and other communications.](https://github.com/RealJoshue108/personalXR/blob/master/examples/images/POC_default.png)

Here we aim to demonstrate how user agents may implement Personalization Semantics in XR environments.

- https://w3c.github.io/personalization-semantics/content/

- https://www.w3.org/TR/personalization-semantics-requirements-1.0/

For examples of other implementations please see https://github.com/w3c/personalization-semantics/wiki/Implementations-of-Semantics 


### How it works

Pressing the <code>CNTRL</code> key will load the personalization widget. This was two toggles. One to simplify the UI, and another to load the symbolset.

This immersive communication UI has the following controls:

- Start Phone Call
- Stop Phone Call
- Lock
- Start Camera
- Search Contacts 
- EQ
- Like / Star
- Instant messaging
- Wifi Connection

as well as an interactive keyboard and text <code>input</code> area.

Pressing the <code>CNTRL</code> key and then selecting the Symbols option will load the suggested Symbol set:


Activating the UI toggles will be triggered by JavaScript.

For example, when the Symbol control is activated, a Bliss symbol set UI will be loaded, replacing the default:

![Demo futuristic immersive communication interface with a large curved screen, and a range of Bliss symbols to represent controls for making and managing calls and other communications.](https://github.com/RealJoshue108/personalXR/blob/master/examples/images/POC_symbols.png) 

The default immersive communication UI controls listed above map to the following Bliss symbols:

- Start Phone Call - 22904 call,telephone,ring-(to) (telephone + action indicator)  
- Stop Phone Call - 21841 relay (to stop + to start) - Character (superimposed)
- Lock - 16704 safe,safely,secure, securely (safety + description indicator)  
- Start Camera - 13111 camera (enclosure + light: box that uses the sunlight to record what the eye sees) - Character (superimposed)
- Search Contacts - 27053 exploration ([contr.] search + new)
- EQ - 23804 amplifier_(1) (machine + more + sound + intensity) SYMBOL SYNONYM 
- Like / Star - 17997 Valentine_(card) (paper + love: message of love) 
- Instant messaging - 24509 short_message_system_(SMS),text_message (letter + telephone) 
- Wifi Connection - 27156 wireless_connection (signal + digital + minus + fiber) Bliss-word synonym


## UI Aframe-gui Component framework

Examples of the UI component framework are available at:

[https://rdub80.github.io/aframe-gui/examples/index.html](https://rdub80.github.io/aframe-gui/examples/index.html)

## Why A-frame?

We chose to use A-frame, as it uses a component type architecture - and renders HTML. The entity component system is also useful, as well as the ability to add various ARIA or other accessibility related semantics in a way that would be familiar to developers.

There is also interesting work going on in the A-frame community around accessibility.
 

## Set up

Clone into your Git directory using:

https://github.com/RealJoshue108/personalXR.git


## Run locally

Using bash of your tool of choice, install npm

`npm install`

Run the following start the webpack-dev-server:

`npm start`

The webpack-dev-server should now be running at http://localhost:8080


## Personalization Components

This demo uses some of the aframe-gui components as a basis for adding Personalization semantics that are designed to trigger customisations in user agents.

In this example, we have added semantics like <code>data-simplify</code>, <code>data-symbol</code>. Note, any behaviours or customisations need to be hand coded but the idea here in our demo is to illustrate that if these semantics are supported in web content, then user agents can modify that content in particular ways what will meet the needs of people with cognitive disabilities.

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


#### Example of component customised with Personalization Semantics

The following component uses <code>data-simplification</code>, and <code>data-purpose</code> semantics, along with some ARIA role, state information - when activated the UI will be simplified by removing some controls.

```html
<a-gui-toggle simply
			data-simplification="critical"
			data-purpose="simplify"
				role="switch"
				aria-checked="false"
				state="off"
				aria-label="Simplification Control"
				width="2.2" height="0.75"
				onclick=" "
				value="Simple"
				font-family="Arial"
        			font-size="80px"
				margin="0 0 0.05 0"
				>
			</a-gui-toggle>

```

The following component uses <code>data-purpose</code>, and <code>data-symbol</code> semantics, along with some ARIA role, state information, to load a <a href="https://www.blissymbolics.org/index.php/symbol-files">Bliss symbol set</a>, to replace the default user interface.

```html
<a-gui-toggle symbols
			data-action="symbol-set"
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

The idea is this demo will show how user agents in XR may implement some of these Personalization Semantics - so rather than behaviours being defined by the author, they can simply be called in code by the author and implemented by the user agent. This would remove much complexity when building accessible XR experiences.

### Funders and acknowledgements

This work is supported by the [EC-funded WAI-Guide Project](https://www.w3.org/WAI/about/projects/wai-guide/).

Blissymbol resources based on the Blissymbolics Communication International Authorized Vocabulary (BCI-AV) are licensed under a [Creative Commons Attribution-Share Alike 3.0 Unported License](https://creativecommons.org/licenses/by-sa/3.0/"). 

Many thanks to Matthew Tylee Atkinson @maatk (APA) for review and scripting assistance.