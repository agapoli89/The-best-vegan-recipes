var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = function Title() {
  return React.createElement(
    "h1",
    null,
    "Moje ulubione ro\u015Blinne przepisy"
  );
};

var Post = function (_React$Component) {
  _inherits(Post, _React$Component);

  function Post(props) {
    _classCallCheck(this, Post);

    var _this = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props));

    _this.state = {
      isAllContentShown: false
    };
    return _this;
  }

  _createClass(Post, [{
    key: "toggleContent",
    value: function toggleContent() {
      this.setState({ isAllContentShown: !this.state.isAllContentShown });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          null,
          this.props.title
        ),
        this.state.isAllContentShown ? React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            null,
            this.props.content
          ),
          React.createElement(
            "button",
            { onClick: this.toggleContent.bind(this) },
            "Poka\u017C mniej"
          )
        ) : React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            null,
            this.props.shortContent
          ),
          React.createElement(
            "button",
            { onClick: this.toggleContent.bind(this) },
            "Poka\u017C ca\u0142y przepis"
          )
        ),
        React.createElement("hr", null)
      );
    }
  }]);

  return Post;
}(React.Component);

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