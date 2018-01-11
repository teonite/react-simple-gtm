

### usage
in your app entrypoint (e.x. `index.jsx`)
```
import TagProvider from 'react-simple-google-tag-manager';

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
import {injectTag, tagShape} from 'react-simple-google-tag-manager';

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