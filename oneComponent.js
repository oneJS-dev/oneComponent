import {oneIcons} from './oneIcons.js';
import {matchUrl, Component, BaseComponent, themeVariable} from '@onejs-dev/onecore';



/*STANDARD COMPONENTS:
Html standard components to be used on the web.
Naming convention: Exact same name as the html tag with CamelCase with first letter in capital.
    -Remarks: 
    <object> is Obj not to colide with Object reserved word.
    <iframe> is IFrame
    <tbody> is TBody 
    <map> is OneMap to avoid collision with Map
*/

/** 
* @description All the unpaired/self-closing HTML tags.
* @type {Array<String>} 
*/
export const A = BaseComponent('A', true, 'a');
export const Abbr = BaseComponent('Abbr', true, 'abbr');
export const Address = BaseComponent('Address', true, 'address');
export const Area = BaseComponent('Area', false, 'area');
export const Article = BaseComponent('Article', true, 'article');
export const Aside = BaseComponent('Aside', true, 'aside');
export const Audio = BaseComponent('Audio', true, 'audio');
export const B = BaseComponent('B', true, 'b');
export const Base = BaseComponent('Base', false, 'base');
export const Bdi = BaseComponent('Bdi', true, 'bdi');
export const Bdo = BaseComponent('Bdo', true, 'bdo');
export const Blockquote = BaseComponent('Blockquote', true, 'blockquote');
export const Body = BaseComponent('Body', true, 'body');
export const Br = BaseComponent('Br', false, 'br');
export const Button = BaseComponent('Button', true, 'button');
export const Canvas = BaseComponent('Canvas', true, 'canvas');
export const Caption = BaseComponent('Caption', true, 'caption');
export const Cite = BaseComponent('Cite', true, 'cite');
export const Code = BaseComponent('Code', true, 'code');
export const Col = BaseComponent('Col', false, 'col');
export const Colgroup = BaseComponent('Colgroup', false, 'colgroup');
export const Data = BaseComponent('Data', true, 'data');
export const Datalist = BaseComponent('Datalist', true, 'datalist');
export const Dd = BaseComponent('Dd', true, 'dd');
export const Del = BaseComponent('Del', true, 'del');
export const Details = BaseComponent('Details', true, 'details');
export const Dfn = BaseComponent('', true, 'dfn');
export const Dialog = BaseComponent('', true, 'dialog');
export const Div = BaseComponent('Div', true, 'div');
export const Dl = BaseComponent('Dl', true, 'dl');
export const Dt = BaseComponent('Dt', true, 'dt');
export const Em = BaseComponent('Em', true, 'em');
export const Embed = BaseComponent('Embed', false, 'embed');
export const Fieldset = BaseComponent('Fieldset', true, 'fieldset');
export const Figcaption = BaseComponent('Figcaption', true, 'figcaption');
export const Figure = BaseComponent('Figure', true, 'figure');
export const Footer = BaseComponent('Footer', true, 'footer');
export const Form = BaseComponent('Form', true, 'form');
export const H1 = BaseComponent('H1', true, 'h1');
export const H2 = BaseComponent('H2', true, 'h2');
export const H3 = BaseComponent('H3', true, 'h3');
export const H4 = BaseComponent('H4', true, 'h4');
export const H5 = BaseComponent('H5', true, 'h5');
export const H6 = BaseComponent('H6', true, 'h6');
export const Head = BaseComponent('Head', true, 'head');
export const Header = BaseComponent('Header', true, 'header');
export const Hr = BaseComponent('Hr', false, 'hr');
export const Html = BaseComponent('Html', true, 'html');
export const I = BaseComponent('I', true, 'i');
export const IFrame = BaseComponent('IFrame', true, 'iframe');
export const Img = BaseComponent('Img', false, 'img');
export const input = BaseComponent('Input', false, 'input'); //"Input" is defined later in a custom way
export const Ins = BaseComponent('Ins', true, 'ins');
export const Kbd = BaseComponent('Kbd', true, 'kbd');
export const Label = BaseComponent('Label', true, 'label');
export const Legend = BaseComponent('Legend', true, 'legend');
export const Li = BaseComponent('Li', true, 'li');
export const Link = BaseComponent('Link', false, 'link');
export const Main = BaseComponent('Main', true, 'main');
export const OneMap = BaseComponent('Map', true, 'map'); //"Map", is it colliding with any reserved word?
export const Mark = BaseComponent('Mark', true, 'mark');
export const Meta = BaseComponent('Meta', true, 'Meta', false, 'meta');
export const Meter = BaseComponent('Meter', true, 'meter');
export const Nav = BaseComponent('Nav', true, 'nav');
export const Noscript = BaseComponent('Noscript', true, 'noscript');
export const Obj = BaseComponent('Object', true, 'object'); //"Obj", otherwise collides with "Object" reserved word
export const Ol = BaseComponent('Ol', true, 'ol');
export const Optgroup = BaseComponent('Optgroup', true, 'optgroup');
export const Option = BaseComponent('Option', true, 'option');
export const Output = BaseComponent('Output', true, 'output');
export const P = BaseComponent('P', true, 'p');
export const Param = BaseComponent('Param', false, 'param');
export const Picture = BaseComponent('', true, 'picture');
export const Pre = BaseComponent('Pre', true, 'pre');
export const Progress = BaseComponent('Progress', true, 'progress');
export const Q = BaseComponent('Q', true, 'q');
export const Rp = BaseComponent('Rp', true, 'rp');
export const Rt = BaseComponent('Rt', true, 'rt');
export const Ruby = BaseComponent('Ruby', true, 'ruby');
export const S = BaseComponent('S', true, 's');
export const Samp = BaseComponent('Samp', true, 'samp');
export const Script = BaseComponent('Script', true, 'script');
export const Section = BaseComponent('Section', true, 'section');
export const Select = BaseComponent('Select', true, 'select');
export const Small = BaseComponent('Small', true, 'small');
export const Source = BaseComponent('Source', false, 'source');
export const Span = BaseComponent('Span', true, 'span');
export const Strong = BaseComponent('Strong', true, 'strong');
export const Style = BaseComponent('Style', true, 'style');
export const Sub = BaseComponent('Sub', true, 'sub');
export const Summary = BaseComponent('Summary', true, 'summary');
export const Sup = BaseComponent('Sup', true, 'sup');
export const Svg = BaseComponent('Svg', true, 'svg');
export const Table = BaseComponent('Table', true, 'table');
export const TBody = BaseComponent('TBody', true, 'tbody');
export const Td = BaseComponent('Td', true, 'td');
export const Template = BaseComponent('Template', true, 'template');
export const Textarea = BaseComponent('Textarea', true, 'textarea');
export const TFoot = BaseComponent('TFoot', true, 'tfoot');
export const Th = BaseComponent('Th', true, 'th');
export const Thead = BaseComponent('Thead', true, 'thead');
export const Time = BaseComponent('Time', true, 'time');
export const Title = BaseComponent('Title', true, 'title');
export const Tr = BaseComponent('Tr', true, 'tr');
export const Track = BaseComponent('Track', false, 'track');
export const U = BaseComponent('U', true, 'u');
export const Ul = BaseComponent('Ul', true, 'ul');
export const Var = BaseComponent('Var', true, 'var');
export const Video = BaseComponent('Video', true, 'video');
export const Wbr = BaseComponent('Wbr', false, 'wbr');


/*CUSTOM COMPONENTS:
In order to provide a reusable framework for web and native, the following components are provided:
- View: Base component to wrap other component's structure. It is a standard DIV with enhanced functionality:
    - Allows simple animations when the following properties are modified: visible, selected, active (current url matches target url) 
    - Allows simple positioning of the content, e.g.: "center-center", "column top-left", etc.
    - Allows routing in a simple way by setting the url property.
- Icon: Displays and icon from the svg gallery.
- Modal: Base component to display overlaying content.
- Slider(scrollview): Creates a stacked views that allow the user to slide across the component's children.
- Input: Consolidates different HTML types of inputs: textarea, selectect (optgroup and option) and range.
- Text: It is just the html "p" tag.
*/  

export const Text = BaseComponent('Text', true, 'p');
let inputTypes = ['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];
export const Input = ({options, type, ...attributes}={}) => {
    //Standar input
    if(!type) return input(attributes);
    //Textarea for longer text input
    else if(type === 'textarea') {
        return Textarea(attributes)();
    }
    //Multiple choice input
    else if(type === 'select') {
        //options (array): ['Volvo', 'Mercedes', 'Rolex', 'Cartier']; //For more simple scenarios       
        if(Array.isArray(options)) {
            return Select(attributes)(options.map(item => Option({value: item})(item)));
        }
        //options (object): {cars: {volvo: 'Volvo', mercedes: 'Mercedes'}, watches: {rolex: 'Rolex', cartier: 'Cartier'}}; //Only allows 1 level of indentation
        else if(typeof options === 'object') {
            return Select(attributes)(Object.entries(options).map(([key, value]) => {
                if(value && typeof value === 'object') {
                    return Optgroup({label: key})(Object.entries(value).map(([subkey, subvalue]) => {return Option({value: subkey})(subvalue)}));
                }
                else return Option({value: key})(value);
            }));
        }
        else {
            return Select(attributes)();
        }
    }
    //Range slider input
    else if(type === 'range' && attributes['value'] !== undefined) {
        let min = attributes['min'] || 0;
        let max = attributes['max'] || 100;
        let value = 100.0 * (attributes['value'] - min) / (max - min);
        //console.log(attributes['value']);
        //console.log('min: ' + min + ', max: ' + max + ', value: ' + value)
        let style = {//Styles the filled part of the slider in a different color
            // id: 'rangeStyle',
            // 'input[type="range"]' : {
                background: 'linear-gradient(to right, ' + themeVariable('primaryColor') + ' 0%, ' + themeVariable('primaryColor')  + ' ' + value + '%, ' +  themeVariable('neutralColor') + ' ' + value + '%, ' + themeVariable('neutralColor') + ' 100%)',
            // }
        }
        // console.log('are we using this')
        return input({...attributes, style: style}); //This overrides any style defined by the user
    }
    //Input with datalist options
    else if(type === 'list') {
        if(Array.isArray(options)) {
            return Select(attributes)(options.map(item => Option({value: item})(item)));
        }
    }
    //The rest of the inputs
    else {
        return input(attributes);
    }
}

/** 
Definition: Animations object can be used to set default animations on attibute change events; visibility, selected and active.
Example: view({animations: {visible: 'fade-in', 'not-visible': 'fade-out'}})('content')
**/
export const animations = {//In order for transform animations to work we need position absolute, but it is still working for some. https://www.w3schools.com/js/js_htmldom_animate.asp
    //Working for position relative and static
    'appear': {style: {display: 'flex'}},
    'disappear': {style: {display: 'none'}},
    'fade-in': {keyframes: {opacity: [0,1], 'webkit-transform': 'none'}, options: {duration: 300, easing: 'ease-in-out'}},
    'fade-in-left': {keyframes: {opacity: [0,1], transform: ['translate3d(-100%, 0, 0)', 'none']}, options: {duration: 300, easing: 'ease-in-out'}},
    'fade-in-right': {keyframes: {opacity: [0,1], transform: ['translate3d(100%, 0, 0)', 'none']}, options: {duration: 300, easing: 'ease-in-out'}},
    'fade-out': {keyframes: {opacity: [1,0], 'webkit-transform': 'none'}, options: {duration: 300, easing: 'ease-in-out'}, style: {display: 'none'}},
    'fade-out-left': {keyframes: {opacity: [1,0], transform: ['translate3d(-100%, 0, 0)', 'none']}, options: {duration: 300, easing: 'ease-in-out'}, style: {display: 'none'}},
    'fade-out-right': {keyframes: {opacity: [1,0], transform: ['translate3d(100%, 0, 0)', 'none']}, options: {duration: 300, easing: 'ease-in-out'}, style: {display: 'none'}},
    'slide-in-left': {keyframes: {transform: ['translate3d(-100%, 0, 0)', 'none']}, options: {duration: 300, easing: 'ease-in-out'}},
    'slide-in-right': {keyframes: {transform: ['translate3d(100%, 0, 0)', 'none']}, options: {duration: 300, easing: 'ease-in-out'}},
    'slide-in-up': {keyframes: {transform: ['translate3d(0, 100%, 0)', 'none']}, options: {duration: 300, easing: 'ease-in-out'}},
    'slide-in-down': {keyframes: {transform: ['translate3d(0, -100%, 0)', 'none']}, options: {duration: 300, easing: 'ease-in-out'}},
    'slide-out-left': {keyframes: {transform: ['none', 'translate3d(-100%, 0, 0)']}, options: {duration: 300, easing: 'ease-in-out'}, style: {display: 'none'}},
    'slide-out-right': {keyframes: {transform: ['none', 'translate3d(100%, 0, 0)']}, options: {duration: 300, easing: 'ease-in-out'}, style: {display: 'none'}},
    'slide-out-up': {keyframes: {transform: ['none', 'translate3d(0, -100%, 0)']}, options: {duration: 300, easing: 'ease-in-out'}, style: {display: 'none'}},
    'slide-out-down': {keyframes: {transform: ['none', 'translate3d(0, 100%, 0)']}, options: {duration: 300, easing: 'ease-in-out'}, style: {display: 'none'}},
    //Not-working: Scale must use position absolute
    'expand': {keyframes: {transform: ['scale(0)', 'scale(1.3)', 'scale(1)']}, options: {duration: 300, easing: 'ease-in-out'}},
    'shrink': {keyframes: {transform: ['scale(1)', 'scale(0)']}, options: {duration: 300, easing: 'ease-in-out'}, style: {display: 'none'}},
    'vertical-expand': {keyframes: {transform: ['scaleY(0)', 'none'], margin: ['10px', 0]}, options: {duration: 300, easing: 'ease-in-out'}},
    'vertical-shrink': {keyframes: {transform: ['none', 'scaleY(0)']}, options: {duration: 300, easing: 'ease-in-out'}, style: {display: 'none'}},
    'horizontal-expand': {keyframes: {transform: ['scaleX(0)', 'none'],  margin: ['10px', 0]}, options: {duration: 300, easing: 'ease-in-out'}},
    'horizontal-shrink': {keyframes: {transform: ['none', 'scaleX(0)']}, options: {duration: 300, easing: 'ease-in-out'}, style: {display: 'none'}}
};

/** 
Definition: This is the webcomponent used to wrap all the custom oneJS elements. It behaves like an HTML 'div' block with some additional features such as routing, animations and positioning.
Properties:
    -Visible: Used to toggle display:flex to display:none.
    -Active: If the specified url matches the actual url, the active attribute is set.
    -Selected: Can be usdd to trigger animations if the element is selected.
    -Content: Specifies how the content of the element is positioned, first vertically then horizontally. E.g.: top-left. (This positioning is based on flexbox)
        -Vertically: Top, center, bottom, stretch, space and distribute.
        -Horizontally: Left, center, right, stretch, space and distribute.
        -Direction: Row or column.
        -Example: view({content: 'top-left column'}})('content')
    -Expand: TO-DO. Specifies how much the element grows compared to the siblings.
    -Url: The url property contains all the elements to perform the routing of the app.
        -Active: Determines when the active attribute is set.
        -Visible: Determines when the visible attribute is set and therefore displayed on the screen.
        -Link: Determines the url where the app is routed to when the element is clicked.
        -Example: view({url: {visible: '/* /* /events', active: '/* /* /events'}})('content')
    -Animations: Animations can be set on attribute change events. The {animations} object provides some predefined options.
        -Attribute: The attribute state that triggers the animation. E.g.: visible: when the element visible attribute is added triggers animation. 'not-visible': when the visible attribute is removed triggers the animation.
        -Keyframes: Each of the CSS keyframes for the standard animate() function
        -Options: Each of the options, such as the timing and the easing, for the standard animate() function
        -Style: New styles being set after the animation.
        -Example: view({animations: {visible: 'fade-in', 'not-visible': 'fade-out'}})('content')
**/

// var emotionCSSClasses = [];

 /*POSITION CONTENT*/
const positionContent = (content) => {
    // console.log('position content called')
    let direction = 'row';
    let alignment = 'top-left';
    let longitudinal = 'flex-start';//Positioning in the content direction
    let transversal = 'flex-start'; //Positioning in the cross direction, perpendicular to the content
    let overflow = 'flex-start';    //Positioning of the different rows and columns of content that overflow how are they aligned to each other.
    if(content) {
        if(content.includes('column')) direction = 'column';
        if(content.includes('-')) alignment = content.split(' ').filter(item => {return item.includes('-')})[0];
        alignment = alignment.split('-');
        longitudinal = direction === 'row' ? alignment[1] : alignment[0]; //in the content direction
        transversal = direction === 'row' ? alignment[0] : alignment[1];  

        //Options for longitudinal alignment in CSS (justify-content): flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right
        //Options for longitudinal alignment in oneJS: left, center, right (for rows). top, center, bottom (for cols). space, distribute (for both)
        if(longitudinal === 'center') longitudinal = longitudinal;
        else if(longitudinal === 'bottom' || longitudinal === 'right') longitudinal = 'flex-end';
        else if(longitudinal === 'distribute') longitudinal = 'space-around';
        else if(longitudinal === 'space') longitudinal = 'space-between';
        else longitudinal = 'flex-start';       

        //Options for transversal alignemnt in CSS (align-items): stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end
        //Options for transversal alignment in oneJS: left, center, right (for cols). top, center, bottom (for rows). stretch?
        //Options for transversal alignment of the contet overflow in CSS (align-content): flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline
        //These options are also used to align the content overflow:
        if(transversal === 'center') {transversal = transversal; overflow = 'center';}
        else if(transversal === 'bottom' || transversal === 'right') {transversal = 'flex-end'; overflow = 'flex-end';}
        else if(transversal === 'distribute') {transversal = 'center'; overflow = 'space-around';}
        else if(transversal === 'space') {transversal = 'center'; overflow = 'space-between';}
        else if(transversal === 'stretch') {transversal = 'stretch'; overflow = 'stretch';} //Stretch: If the transversal dimension is not known, stretches the element. To be able to stretch the element 'align-content' also needs to be set to stretch.
        else {transversal = 'flex-start'; overflow = 'flex-start';}           
    }
    /* Due to the fact that this styling takes place just after the initial render, the component flickers changing to the new position.
    This could be solved if insted we do this on every loop and return it as a slyle class to be added (like content-class). The id could be the content */ 
    //Uncomment
    // component.style['flex-direction'] = direction;       //Row or column
    // component.style['justify-content'] = longitudinal;   //Longinutinal alignment of the items
    // component.style['align-items'] = transversal;        //Transversal alignment of the items
    // component.style['align-content'] = overflow;         //Content overflow alignment of the items 
    // if(expand) component.style['flex-grow'] = expand; //Expand with the force indicated (e.g.: expand: 5)

    let inlineStyle = {};
    inlineStyle = {flexDirection: direction, justifyContent: longitudinal, alignItems: transversal, alignContent: overflow}; 
    return inlineStyle;

    // component.style['justify-content'] = 'center';   //Longinutinal alignment of the items
    // component.style['align-items'] = 'center';        //Transversal alignment of the items
    //Standard CSS can further be used to complement these properties.    
    // if(attributes['id']) console.log(attributes['id'])
    // console.log('direction:' + direction + ' longitudinal: ' + longitudinal + ' transversal: ' + transversal)
}

/*ANIMATE CONTENT*/
const animate = (animation, property) => (newValue, component) => { //Setup animation on property changes
    //Triggers animation on attribute change: {'visible': {keyframes: [], options: {}, style: {new styles after animation}}, 'visible-off': 'fade-out'} //Visible is default and does not need to be specified
    /*
    TODO: Would be better to configure animate this way; animation: {visible: [true, 'fadeIn', false, 'fadeOut']}
    {visible: {values: [true, false], animations: ['fadeIn', 'fadeOut']}}
    */
    //This is the approach for complex animations where to each value we assign an animation object.
    let selectedAnimation = {}; //Default for visible 
    // if(!animation || typeof animation === 'function' ) return;
    console.log('animation')
    console.log(animation)
    //Check the animation is formatted correctly
    if(Array.isArray(animation)) {
        try{selectedAnimation = newValue ? animation[0] : animation[1];}
        catch(error) {console.error("animation should be in this format: ['in-animation', 'out-animation']"); return;}
    }
    else if(animation && typeof animation === 'object') {
        try{selectedAnimation = animation instanceof Map ? animation[newValue] : undefined;}
        catch(error) {console.error('No animation set for ' + newValue); return;}
    }
    
    else {console.error('animation should be an Array or Map: ' + animation); return;}
    //Animations should go inside the ONEJS object
    if(typeof selectedAnimation === 'string') {//If is a string, take it from the predesigned animations
        // conso
        // if(selectedAnimation === 'none') return;
        selectedAnimation = animations[selectedAnimation];
        if(!selectedAnimation) {console.warn('No such animation: ' + selectedAnimation); return;}
    } 
         
    // let not = newValue? '' : 'not-'; //Determine if is entry or exit animatio
    // if(animation && animation[not + property]) {//Extract animation
    //     selectedAnimation = animation[not + property];
    //     if(typeof selectedAnimation === 'string') {selectedAnimation = animations[selectedAnimation];} //If is a string, take it from the predesigned animations
    // }
    // else {
    //     if(property === 'visible' && !newValue) component.style.display = 'none';
    //     else if(property === 'visible' && newValue) component.style.display = 'flex';
    //     return;
    // }   
    //Execute animation
    // console.log('Property: ' + property);
    component.style.display = 'flex';//To always make sure the animation is displayed       
    console.log('is it here?')   
    try {
        component.animationController = component.animate(selectedAnimation.keyframes, selectedAnimation.options);
        component.animationController.onfinish = () => {
            if(selectedAnimation.style) Object.keys(selectedAnimation.style).forEach((key, value) => {
                component.style[key] = selectedAnimation.style[key];
            });
        };
    }
    catch(error) {console.error(error);} 
}

/*WEB ROUTING*/
//The reason why we call onVisibleChange and onActiveChange rather than directly setting the visible and active attributes of the component is to follow the
//functional pattern where it is the state that should be updated on this events changing the visbile and active attributes it is binded to
//Example:  View({visible: read('isVisible'), onVisibleChange: update('isVisible'), url: {visible: '/home1', link: 'home2'}})('hello world')

const urlSetup = (url, onVisibleChange, onActiveChange) => component => { //Setup animation on property changes
    //When the page url matches this url sets the attribute 'visible'
    if(url && typeof url === 'object' && url['visible']) {     
        if(!matchUrl(url['visible'])) onVisibleChange(false);
        window.addEventListener('urlChange',  (e) => { 
            if(matchUrl(url['visible'])) {onVisibleChange(true);}
            else {onVisibleChange(false);}
        }, false);
    }
    //If url is of type link. Redirects to the linked address
    //If a link does not start with '/', it gets appended to the last part of the url (relative). If starts with '/', it replaces from the root (absolute).
    if(url && typeof url === 'object' && url['link']) {
        if(!url['active']) url['active'] = url['link'];//In order to set the active attribute to be able to style links
        component.addEventListener('click', async (e) => {
            e.preventDefault(); 
            // if(component.getAttribute('active')) return; //this is a poor way to do it. compare it to the 
            if(matchUrl(url['active'])) return; //If the current url matches the active url do nothing (avoid changing url)
            window.history.pushState(null, null, url['link']); //data, title, url
            window.dispatchEvent(new CustomEvent('urlChange', { detail: url['link']}));
        });
        if(!window.onpopstate) { //Popstate gets activated when pressing next or back buttons on the browser or calling history.back() history.go()
            window.onpopstate = (e) => {
                window.dispatchEvent(new CustomEvent('urlChange', { detail: decodeURI(location.pathname + location.search)}));
            };
        }
    }

    //When the page url matches this url sets the attribute 'active'
    if(url && typeof url === 'object' && url['active']) {     
        if(!matchUrl(url['active'])) onActiveChange(false);
        window.addEventListener('urlChange',  (e) => { 
            if(matchUrl(url['active'])) onActiveChange(true);
            else onActiveChange(false);
        }, false);
    }      
}

export const View = ({visible=true, onVisibleChange=()=>{},  active=false, onActiveChange=()=>{}, selected=false, content="top-left", expand=0, wrap=true, animation, url, ...attributes}={}) => structure => {
// export const View = WrappedComponent(({visible=true, onVisibleChange=()=>{},  active=false, onActiveChange=()=>{}, selected=false, content="top-left", expand, animation, url}={}) => structure => {
    //urls can be a reflection of the current state, but could also be the input that the user entered and the app needs to know what to do with that state. It should therefore be a form of state.
    //I would do the following: add active as an attribute (maybe also selected). I would do in the state. selectedTag: {default:, source: url(index)} returning the url selected on path change
    // let mainDiv = React.useRef();
    // let previousVisible = React.useRef();
    // console.log('structure1')
    // console.log(structure);

    //animation = {visible: 'fade-in', 'not-visible': 'fade-out'};
    // console.log('when is view called?')

   
    // let hidden = (!visible && !animation)? 'hidden' : undefined;//If errors, uncomment
    // if(!visible && !animation) attributes['hidden'] = 'hidden';//If we do not do this, items appear on first render and then disappear quickly once the useEffect callback is set
    
    
    /*LIFECYCLE EVENTS: Important warning, this custom element cannot handle external lifecycle events (when calling View({onCreate: () => {...}}) ). This is due to them already being used by View itself internally
    There is a problem: We want to programatically setup onCreate externally for the component but at the same time we use onCreate inside the component. Both cannot be merged.
        There is also a problem in the concept, components are just functions that return structure they are not encapsulated in a component themselves. Wrapping every component in a div would solve this but would create innecessary additional indentation in most cases.
        This could mean that components would have an Div(external attributes)(Div(internal)(Internal logics))
    */
    // set animation for other properties
    let internalOnPropertyChange = {content: positionContent}
    if(animation && typeof animation === 'object') {
        Object.entries(animation).forEach(([property, value]) => { 
            if(value) internalOnPropertyChange[property] = animate(value, property);
        })
    }
    
    // let internalOnPropertyChange = {visible: animate(animation, 'visible'), selected: animate(animation, 'selected'), active: animate(animation, 'active'), content: positionContent};
    let exeternalOnPropertyChange = attributes['onPropertyChange'];
    
    let finalOnPropertyChange = exeternalOnPropertyChange ? {...internalOnPropertyChange, ...exeternalOnPropertyChange} : internalOnPropertyChange;//Compose internal and external onPropertyChange
    delete attributes['onPropertyChange'];

    // const onCreate = (url, visible, active, expand, onVisibleChange, onActiveChange) => (component) => {
    //     // console.log('component')
    //     // console.log(component)
    //     //uncomment
    //     // component.style['display'] = 'flex';                     //Flexbox is the positioning being used. CSS by default creates a container that doesn't wrap and adapt to width by shrinking the children.
    //     // component.style['flex-wrap'] = 'wrap';                   //We want items to fall into a different row once exhausted the space on the parent (nowrap CSS default)
    //     // component.style['flex-grow'] = '0';                      //Ability for a flex item to grow if there is too much space (0 CSS default). By default we don't want it to grow
    //     // component.style['flex-shrink'] = '0';                    //Ability for a flex item to shrink if there is not enough space (1 CSS default). By default we don't want it to shrink   
    //     // positionContent(content, component); //Position component

    //     urlSetup(url, component, onVisibleChange, onActiveChange);
        
    //     // if(!visible) component.style.display = "none"; //Necessary to avoid displaying hidden elements on page load
    //     // if(expand) component.style['flex-grow'] = expand; //Expand with the force indicated (e.g.: expand: 5)
    // }

    // let internalOnCreate = onCreate(url, visible, active, expand, onVisibleChange, onActiveChange);
    let internalOnCreate = urlSetup(url, onVisibleChange, onActiveChange);
    let externalOnCreate = attributes['onCreate'];
    let finalOnCreate = externalOnCreate ? (component) => {internalOnCreate(component);externalOnCreate(component);} : internalOnCreate;//Compose internal and external onCreate
    delete attributes['onCreate'];

    // let myobj = {style: {}};
    // let animation = {};
    // if(animation && animation['visible'])
    // let isVisibilityAnimated = !(animation && animation['visible'] && animation['visible'][0] !== 'none')
    // let internalStyle = {display: (isVisibilityAnimated && visible) ? 'flex' : 'none', flexWrap: 'wrap', flexGrow: expand, flexShrink: 0, ...positionContent(content)};
    let internalStyle = {display: visible ? 'flex' : 'none', flexWrap: wrap ? 'wrap' : 'nowrap', flexGrow: expand, flexShrink: 0, ...positionContent(content)};//Even if content is not defined we can do this to set the defaults provide by positionContent function
    if(animation && animation['visible']) internalStyle.display = 'none';//To avoid initial rendering and then happening the animation (blink) use this

   // console.log(attributes['id'])
    if(attributes['id'] === 'fadeout') {
        // console.log(internalStyle);
    // console.log(visible);
    // if(!visible) {internalStyle.display = 'none'; internalStyle.color = 'pink'}
    // internalStyle = {};
    }
    
    // if(expand) internalStyle.flexGrow = expand; //Expand with the force indicated (e.g.: expand: 5)
    let externalStyle = attributes['inlineStyle'];//This only works for inline styles
    let finalStyle = internalStyle;
    if(externalStyle) {
        finalStyle = {...internalStyle, ...externalStyle};
        delete attributes['inlineStyle'];
    }

    //React does not handle Boolean values for custom attributes, therefore visible, selected and active need to be transformed to numbers
    visible = visible ? 1 : undefined;
    active = active ? 1 : undefined;
    selected = selected ? 1 : undefined;

    /*RETURN FINAL STRUCTURE*/
    return Div({visible: visible, selected: selected, active: active, url: url, inlineStyle: finalStyle, onCreate: finalOnCreate, content: content, onPropertyChange: finalOnPropertyChange, ...attributes})(structure);

   // return WrappedComponent({ComponentFunctionOrTag:'div', visible: visible, selected: selected, active: active, onInit: () => {}, onCreate: onCreate, content: content, onPropertyChange: onPropertyChange, ...attributes})(structure);

   // return Component2('div')({visible: visible, selected: selected,  active: active, onCreate: onCreate, onPropertyChange: onPropertyChange, ...attributes})(structure);
};

 

/*TODO: Rewrite all my components to not use Component function as wrapper
Update: Even if it is nice that we managed to make it work without component wrapper I suspect it is still necessary as per the example below, probably everything needs to be wrapped in a createElement function
var e = React.createElement;

function TodoItem() {
  return e("li", null, "Todo Item");
}

function TodoApp() {
  return e("div", null, [
    e("h1", { key: "title" }, "To Do List"),
    e("ul", { key: "todos" }, [
      e(TodoItem, { key: "item1" }), //The todo items are wrapped with createElement during usage
      e(TodoItem, { key: "item2" })
    ])
  ]);
}

ReactDOM.render(e(TodoApp), document.getElementById("root"));

*/
//It is meant to be used with one icons.
//If we want to have the primary color on the icon we need to set the active property to true
//The best way to set the icon color is by changing the theme, in the documentation we should let know which are the variables being used.
export const Icon = Component('Icon', ({name = 'Icon', icon = 'iosClose', iconFont = oneIcons, color, custom, circled, size=32, ...attributes}={}) => {
    //add circled option. In that case reverse colors
    //TODO: We need to fix that the global (body level) styles are overriding the local ones, because they have the same level of priority.
    // const [greeting, setGreeting] = React.useState('Hello Function Component!');
    // console.log(size);
    // console.log(color)
    let selectedIcon = iconFont[icon];
    size = size === 'large'? 64 : size === 'small'? 16 : size;
    let padding = Math.floor(size / 4);
    // let mainStyle = {id: 'main', display: 'block !important', width: size, height: size};
    let mainStyle = {
        id: 'main' + size, 
        // display: 'block !important', 
        width: size, height: size,
        fill: themeVariable('primaryColor'), //our change to implement cool gradients for icons
        background: themeVariable('iconBackground'),
        border: themeVariable('border'),
        borderRadius: themeVariable('radius'),
        boxShadow: themeVariable('shadow'),
        transitionDuration: 0.4,
        // stroke: 'grey 2px',
        // stroke: 'red',
        // strokeWidth: 10,
        // '&[active]': {
        //     fill: themeVariable('primaryColor')
        // }
    }
    if(circled) {
        mainStyle = {...mainStyle, ...{
            id: 'circled' + size,
            backgroundColor: themeVariable('primaryColor'),
            fill: themeVariable('contrastColor'),
            padding: padding,
            borderRadius: '100px',
            // '&[active]': {
            //     backgroundColor: themeVariable('primaryColor'),
            //     fill: themeVariable('contrastColor'),
            // }
        }};
    }
    // Allow to create gradinet text
    // <svg height="150" width="400">
    // <defs>
    // <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
    //   <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
    //   <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
    // </linearGradient>
    // </defs>
    // <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad3)" />
    // <text fill="#ffffff" font-size="45" font-family="Verdana" x="150" y="86">
    // SVG</text>
    // </svg>
    if(attributes['style']) {mainStyle = {...mainStyle, ...attributes['style']}; delete attributes['style'];}
    // console.log(attributes);
    //return React.createElement('div', {});
    //The problem is now that without the component wrapper, now it is not easy to decide how to apply the styles. I still think it is better to wrap here with Div than the whole function, it is more complex to debug.
    //A
    // delete attributes['style'];
    // return Div({name: 'Icon', style: mainStyle, dangerouslySetInnerHTML:{__html: selectedIcon}, ...attributes})();

    //B
    // return Div(attributes)(Div({name: 'Icon', style: mainStyle, dangerouslySetInnerHTML:{__html: selectedIcon}})());

    //C (this requires component wrapping)
    // console.log('Icon!')
    // console.log(attributes['style'])
    // console.log({name: 'Icon', style: mainStyle, dangerouslySetInnerHTML:{__html: selectedIcon}, ...attributes})
    return View({name: 'Icon', style: mainStyle, dangerouslySetInnerHTML:{__html: selectedIcon}, ...attributes})();
    // return View({name: 'Icon', style: mainStyle, dangerouslySetInnerHTML:{__html: selectedIcon}, ...attributes})();

    //return component('Icon', attributes, {style: mainStyle})(unsafeHTML(icon));
});

//Closures work in the scope the function is defined, not called...

//Think how to highlight what variables are required as state. In this case backdrop. Without it being a state variable, this is not viable.
//closeModal shoud be update('backdrop'), takes the event and sets backdrop, but you could also do much more taking the event and updating as many variables as needed.
export const Modal = ({name='Modal', header, footer, backdrop=true, closeIcon=true, size='medium', onClose=()=>{}, ...attributes}={}) => (structure) => {
   // let icon = custom ? customIcons[name] : oneIcons[name];
   //think about theme, here we have a good chance at styling. Create a style object global using the theme variables, and if theme is define apply this to 
   //Solve how to inherit the theme for the rest of components. Should it be an attribute like the visibility?
    //let theme = 'Can I do something with this?'

    let contentStyle = { 
        id: 'content' + size, 
        borderRadius: themeVariable('radius'),  
        backgroundColor: 'rgba(255, 255, 255, .85)',
        backdropFilter: 'blur(10px)',        
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', 
        zIndex: 1000,
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '95vw',
        height: '95vh',
        maxWidth: size === 'large'? 1000 : size === 'small'? 300 : 500,
        maxHeight: size === 'large'? 600 : size === 'small'? 100 : 300,
        '#close': {position: 'absolute', top: 5, left: 5, fill: '#999', cursor: 'pointer'},
        '#close:hover': {opacity: '0.5'}, '#close:active': {opacity: '0.8'},
        '#header': {padding: '10px 0', width: '100%', borderBottom: '1px solid white', fontFamily: themeVariable('sectionFont'), fontSize: themeVariable('sectionSize'), color: themeVariable('sectionColor') },
        '#footer': {padding: '10px 0', width: '100%', borderTop: '1px solid white'},
    }
    let backdropStyle = {id: 'backdrop', zIndex: 500, position: 'fixed', top: 0, left: 0, height: '100vh', width: '100vw', background: 'rgba(0,0,0,0.5)'};
    console.log('visible' + attributes['visible']);
    return View({visible: false, style: {width: size, height: size}, ...attributes})([
        View({id: 'backdrop', style: backdropStyle, content: 'center-center', visible: backdrop, onClick: (e) => {e.target.value = false; onClose(e);}})(),//The quick workaround would be to modify the state variable based on the id.
        View({id: 'content', content: 'space-center column', style: contentStyle, onClick: (e)=>{console.log(e)}})([
            Icon({id: 'close', name: 'iosCloseCircleOutline', onClick: (e) => {e.target.value = true; onClose(e);}}),
            header ? View({id: 'header', content: 'center-center'})(header) : '',
            structure, 
            footer ? View({id: 'footer', content: 'center-distribute'})(footer) : '',
        ]),
        // We can also make read('stateId') to return {id: stateId, value: the value}. This would allow to modify the state from inside the functions. A lot of flexibility, quite anti-pattern, 0% functional programming.
        //We can use the close modal event to call update('backdrop') or even create a custom function that sends an alert when this happens.
    ]);
}



 


//Multiple views one on top of the other. This container gives flexibility to transition between one another with nice animations
export const Slider = Component('Slider', ({value = 0, onChange = ()=>{}, bullets = true, direction = 'row', scroll = true, ...attributes}={}) => structure => {
    //TIP: The slider can be customized or combined with the tabs element, if we add the href = id + 'Slide' + index. Then we can use the state variable assigned to value to style which tab is selected.
    //Other elements can use the href property to move the slider or the location.hash = newHash method. Setting the state property does not move to the element. Rather move the element to set the state property.
    //Works better setting height and width
    //Change behavior if row or column
    let mainStyle = {
        id: 'mainiac',
        position: 'relative',
        height: '100px',
        a: {backgroundColor: 'rgba(255, 255, 255, .85)',  textDecoration: 'none', backdropFilter: 'blur(10px)', borderRadius: '100%', margin: 5, height: 25, width: 25,
        color: themeVariable('textColor'), border: 'solid 1px ' + themeVariable('primaryColor'), display: 'flex', justifyContent: 'center', alignItems: 'center' },
        'a[selected]' : {backgroundColor: themeVariable('primaryColor'), color: themeVariable('contrastColor')},
        '.sliderContainer': {flexWrap: 'nowrap'}
    }
    let containerStyle = {
        id: 'container' + direction + scroll ? 'scroll' : 'noScroll',
        //id: 'container',
        width: '100%',
        height: '100%',
        scrollSnapType: direction === 'column' ? 'x mandatory' : 'y mandatory',
        scrollBehavior: 'smooth',
        overflowX: direction === 'column' ? (scroll ? 'scroll' : 'hidden') : 'none',
        overflowY: direction === 'column' ? 'none' :  (scroll ? 'scroll' : 'hidden'),        
        // WebkitOverflowScrolling: 'touch', //this is required to work on ios
    }    
    let contentStyle = {
        id: 'content',
        scrollSnapAlign: 'start',
        width: '100%',
        height: '100%'
    }
    let id = attributes['id'] || '';
    //Attach this method onConnect. This enables to update value based on user actions
    let visibleEvent = (myValue) => (element) => {
        console.log('my visible element!!!!')
        console.log(element);
        if(!element) return;
        let options = { // root: by defaut is the screen, rootMargin: by default is 0          
          threshold: 0.55 //55% on screen
        }
        let callback = (entries, observer) => {
            console.log('being called')
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
                    onChange(myValue);
                }
            });
        };
        let observer = new IntersectionObserver(callback, options); //https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
        observer.observe(element);  
    }
    mainStyle = [mainStyle, attributes['style']];
    delete attributes['style'];
    //Update the url with the right element. This enables other elements to modify the value property. Does not work, resets the hash on scroll
    // if(!scroll && location.hash !== '#' + id + 'Slide' + value) location.hash = '#' + id + 'Slide' + value;
    
    // console.log('direction: ' + direction)
    // return View({name: name, expand: 1, style: mainStyle, ...attributes})('cuchufrito');
    return View({name: name, expand: 1, style: mainStyle, ...attributes})([
        View({style: containerStyle, content: direction, class: 'sliderContainer'})(structure.map((view, index) => View({onCreate: visibleEvent(index), key: id + 'Slide' + index, id: id + 'Slide' + index, style: contentStyle})(view))), 
        bullets ? View({content: 'center-center', id: 'bullets', inlineStyle: {position: 'absolute', bottom: 0, width: '100%', zIndex: 3}})(structure.map((view, index) => A({key: index, selected: index === value ? true : false, href: '#' + id + 'Slide' + index})(index))) : '',
         // html`<a ?selected=${ifDefined(index === value ? true : false)} href=${'#' + id + 'Slide' + index}>${index}</a>`)) : '',
    ]);
});


const calendarStructure = (value = new Date()) => {
    console.log('calendar');
    let previousYear = (new Date().getFullYear()) - 1;
    let y = previousYear;                   //4 digits. Eg: 2015
    let m = 0;                              //0 - 11
    let d = 1;                              //1 - 31     
    let w = new Date(y, m, d).getDay();     //0(sun) - 6(sat)

    let todayYear = new Date().getFullYear();
    let todayMonth = new Date().getMonth();
    let todayDate = new Date().getDate();
    let dateObj = {};

    let monthTable = [];

    let selectedI, selectedJ, displayedMonth, displayedYear, displayedCalendarPage;                  

    for(let i = 0; i < 2; ++i) { //12 months * 5 year range
        let cells = [];   
        for(let j = 0; j < 42; ++j) { //7 weekdays * 6 rows
            let cell = new Object();
            d = j - w + 1;
            dateObj = new Date(y, m, d);

            cell.i = i;
            cell.j = j;
            cell.date = dateObj.getDate();
            cell.month = dateObj.getMonth();
            cell.year = dateObj.getFullYear();
            cell.dateObj = dateObj;
            cell.weekday = dateObj.getDay();
            cell.currentMonth = true;

            if(cell.month != m) {           //previous or next month
                cell.currentMonth = false;
            } 

            if(y == value.getFullYear() && m == value.getMonth() && d == value.getDate()) { //select today's date
                selectedI = i;
                selectedJ = j;
                displayedMonth = value.getMonth();
                displayedYear = value.getFullYear();  
                displayedCalendarPage = i;                  
            }
            cells[j] = cell;      
        }
        monthTable[i] = cells;
        m += 1;
        if(m > 11) {m = 0; y += 1;}
        d = 1;
        w = new Date(y, m, d).getDay();
    }

    //let cell_selected = {i:today_pos.i, j:today_pos.j};
    let weekdayString = ["Sunday", "Monday", "Tuesday", "Wednesday", 
                         "Thursday", "Friday", "Saturday"];
    let monthString = ["January", "February", "March", "April", 
                       "May", "June", "July", "August", 
                       "September", "October", "November", "December"];
    let yearString = [String(previousYear), String(previousYear+1), String(previousYear+2), 
                    String(previousYear+3), String(previousYear+4)];

    let calendarStyle = {
        id: 'calendar', 
        // position: 'relative', 
        boxShadow: '0px 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)', boxShadow: '0 2px 7px rgba(0, 0, 0, 0.25)',
        width: '100%', 
        overflowX: 'hidden',
        maxWidth: '500px',
        minWidth: '200px',
    } 
    let sliderStyle = {
        maxWidth: '100%', //Needs to be same size as the calendar style
        height: '300px',
    }   
    let calendarPage =  { 
        id: 'calendarPage',
        maxWidth: '100%',
        // minWidth: '100%', 
        // display: 'flex',                 
        zIndex: 0,
        flexWrap: 'wrap',
        // flexBasis: '14.28%',        
        justifyContent: 'center',
        alignItems: 'center'
    }

    let cellStyle = {
        id: 'cell',
        flex: '1 0 calc(100/7 * 1%)', 
        height: '8vh', 
        transition: 'background .5s ease', 
        borderRadius: '100%', 
        cursor: 'pointer',
        ':hover': {opacity: 0.5},
        ':active': {opacity: 1},
    };
    let dateStyle = {
        id: 'date',
        // width: '7vh',
        // height: '7vh',
        borderRadius: '100%',
        '&[selected=true], :hover': {
            backgroundColor: themeVariable('primaryColor'),
            color: themeVariable('contrastColor')
        },
        '&[currentMonth=false]': {
            color: '#bbb',
        }

    };       
    let attributes = {}; //remove
    window.cals = 
    View({name: 'Calendar', baseStyle: calendarStyle, ...attributes})([
        View({})('September 2021'),
        Slider({id: attributes['id'] || 'calendar', direction: 'column', value: displayedCalendarPage, bullets: true, style: sliderStyle})(//
            monthTable.map((cells, month) => View({key: month, style: calendarPage})(//Each calendar slide
                // "page: " + month
                //Each of the cells
                cells.map((cell, date) => View({key: date, content: 'center-center', style: cellStyle, onClick: () => {onChange(cell.dateObj); console.log('here')}})(
                    //Date within cell
                    // cell.date
                    View({style: dateStyle, selected: value === cell.dateObj ? true : false})(cell.date)
                ))
            ))
        )
    ]);
}






