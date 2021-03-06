const Title = () => <h1>Moje ulubione roślinne przepisy</h1>;

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
const Post = props => {
  const [isAllContentShown, toggleContent] = React.useState(false);

  return (
    <div>
      <h2>{props.title}</h2>
      {isAllContentShown 
      ? <div><p>{props.content}</p><button onClick={() => toggleContent(!isAllContentShown)}>Pokaż mniej</button></div> 
      : <div><p>{props.shortContent}</p><button onClick={() => toggleContent(!isAllContentShown)}>Pokaż cały przepis</button></div>}
      <hr />
    </div>
  )
}

const Blog = function() {
    const posts = [
       {
        title: "Najprostszy makaron",
        shortContent: "...z tofu, pieczrkami i szpinakiem",
        content: 'Składniki: makaron, cebula, pieczarki, tofu, szpinak',
        id: 2,
       },
       {
        title: "Majonez od Jadłodnomii",
        shortContent: "samkuje lepiej niż jajeczny",
        content: 'Składniki: aquafaba, płatki drożdżowe, musztarda, olej, sól himalajska',
        id: 3,
       },
    ];

    const readyPosts = posts.map(post => (
        <Post
          key={post.id}
          {...post} />
    ))

  return (
  <div>
      <Title />
      {readyPosts}
  </div>);
}

ReactDOM.render(
  <Blog />, document.getElementById('root'));