var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Title = function Title() {
  return React.createElement(
    "h1",
    null,
    "Moje ulubione ro\u015Blinne przepisy"
  );
};

// VERSION WITH CLASS COMPONENT - COMMENTED
/* class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAllContentShown: false,
    };
  }

  toggleContent() {
    this.setState({isAllContentShown: !this.state.isAllContentShown});
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        {this.state.isAllContentShown 
        ? <div><p>{this.props.content}</p><button onClick={this.toggleContent.bind(this)}>Pokaż mniej</button></div> 
        : <div><p>{this.props.shortContent}</p><button onClick={this.toggleContent.bind(this)}>Pokaż cały przepis</button></div>}
        <hr />
      </div>
  );
  }
} */

//VERSION WITH FUNCTION COMPONENT
var Post = function Post(props) {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isAllContentShown = _React$useState2[0],
      toggleContent = _React$useState2[1];

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      props.title
    ),
    isAllContentShown ? React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        props.content
      ),
      React.createElement(
        "button",
        { onClick: function onClick() {
            return toggleContent(!isAllContentShown);
          } },
        "Poka\u017C mniej"
      )
    ) : React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        props.shortContent
      ),
      React.createElement(
        "button",
        { onClick: function onClick() {
            return toggleContent(!isAllContentShown);
          } },
        "Poka\u017C ca\u0142y przepis"
      )
    ),
    React.createElement("hr", null)
  );
};

var Blog = function Blog() {
  var posts = [{
    title: "Najprostszy makaron",
    shortContent: "...z tofu, pieczrkami i szpinakiem",
    content: 'Składniki: makaron, cebula, pieczarki, tofu, szpinak',
    id: 2
  }, {
    title: "Majonez od Jadłodnomii",
    shortContent: "samkuje lepiej niż jajeczny",
    content: 'Składniki: aquafaba, płatki drożdżowe, musztarda, olej, sól himalajska',
    id: 3
  }];

  var readyPosts = posts.map(function (post) {
    return React.createElement(Post, Object.assign({
      key: post.id
    }, post));
  });

  return React.createElement(
    "div",
    null,
    React.createElement(Title, null),
    readyPosts
  );
};

ReactDOM.render(React.createElement(Blog, null), document.getElementById('root'));