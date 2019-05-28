# react-simple-gtm
Adding Google Tag Manager service to React App made easy

### Installation

```
npm install --save react-simple-gtm
```

### Usage
in your app entrypoint (e.x. `index.jsx`)
```
import TagProvider from 'react-simple-gtm';

//...

ReactDOM.render(
    // ... other providers
    <TagProvider gtmId="<your_tracking_id">
        // your application or router
    </TagProvider>
    // ...
    , 
    document.getElementById('root'),
);
```

then, in your components
```
import {injectTag, tagShape} from 'react-simple-gtm';

const MyAwesomeComponent = ({tag}) => (
    <button onClick={() => tag.push('event', 'click_me_btn_clicked')}>
        Click Me
    </button>
)

MyAwesomeComponent.propTypes = {
    tag: tagShape,
}

export default injectTag(MyAwesomeComponent);
```

### License
MIT