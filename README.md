# react-simple-gtm
Adding Google Tag and Google Tag Manager service to React App made easy

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
    <TagProvider gtagId="<your_gtag_tracking_id" gtmId="<yout_google_tag_manager_id>">
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