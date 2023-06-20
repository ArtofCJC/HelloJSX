//1.
const JSX = <h1>Hello JSX!</h1>;
//2.
const JSX = <div>
<h1>gedfg gfs</h1>
<p>the list</p>
<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>
</div>
//3.
const JSX = (
    <div>
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
      {/*comment*/}
    </div>
  );
  //4.
  const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // Change code below this line
  ReactDOM.render(JSX, document.getElementById('challenge-node'));
//5.
const JSX = (
    <div className = 'myDiv'>
      <h1>Add a class to this div</h1>
    </div>
  );
  //6.
  const JSX = (
    <div>
      <h2>Welcome to React!</h2> <br />
      <p>Be sure to close all tags!</p>
      <hr />
    </div>
    );
    //7.
    const MyComponent = function() {
        // Change code below this line
        return (
          <div>
            Demo Solution
          </div>
        );
        // Change code above this line
      }
      //8.
      class MyComponent extends React.Component {
        constructor(props) {
          super(props);
        }
        render() {
          // Change code below this line
          return (
            <div>
              <h1>Hello React!</h1>
            </div>
          );
          // Change code above this line
        }
      };
      //9.
      const ChildComponent = () => {
        return (
          <div>
            <p>I am the child</p>
          </div>
        );
      };
      
      class ParentComponent extends React.Component {
        constructor(props) {
          super(props);
        }
        render() {
          return (
            <div>
              <h1>I am the parent</h1>
              { /* Change code below this line */ }
              <ChildComponent />
              { /* Change code above this line */ }
            </div>
          );
        }
      };
      //10.
      const TypesOfFruit = () => {
        return (
          <div>
            <h2>Fruits:</h2>
            <ul>
              <li>Apples</li>
              <li>Blueberries</li>
              <li>Strawberries</li>
              <li>Bananas</li>
            </ul>
          </div>
        );
      };
      
      const Fruits = () => {
        return (
          <div>
            { /* Change code below this line */ }
              <TypesOfFruit />
            { /* Change code above this line */ }
          </div>
        );
      };
      
      class TypesOfFood extends React.Component {
        constructor(props) {
          super(props);
        }
      
        render() {
          return (
            <div>
              <h1>Types of Food:</h1>
              { /* Change code below this line */ }
              <Fruits />
              { /* Change code above this line */ }
            </div>
          );
        }
      };
      //11.
      class Fruits extends React.Component {
        constructor(props) {
          super(props);
        }
        render() {
          return (
            <div>
              <h2>Fruits:</h2>
              { /* Change code below this line */ }
              <NonCitrus />
              <Citrus />
              { /* Change code above this line */ }
            </div>
          )
        }
      }
      
      class TypesOfFood extends React.Component {
        constructor(props) {
           super(props);
        }
          render() {
            return (
              <div>
              <h1>Types of Food:</h1>
                { /* Change code below this line */ }
                <Fruits />
                { /* Change code above this line */ }
                <Vegetables />
              </div>
            );
          }
      };
      //12.
      class TypesOfFood extends React.Component {
        constructor(props) {
          super(props);
        }
        render() {
          return (
            <div>
              <h1>Types of Food:</h1>
              {/* Change code below this line */}
                <Fruits />
                 <Vegetables />
               {/* Change code above this line */}
            </div>
          );
        }
      };
      
      // Change code below this line
      ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));
      //13.
      // Change code below this line
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>My First React Component!</h1>
        </div>
      );
    }
  };
  
  ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
  //14.
  const CurrentDate = (props) => {
    return (
      <div>
        { /* Change code below this line */ }
        <p>The current date is: {props.date}</p>
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          { /* Change code below this line */ }
          <CurrentDate date={Date()} />
          { /* Change code above this line */ }
        </div>
      );
    }
  };
  //15.
  const List= (props) => {
    return <p>{props.tasks.join(', ')}</p>
  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          <List tasks={['study', 'exercise']} />
          <h2>Tomorrow</h2>
          <List tasks={['call Sam', 'grocery shopping', 'order tickets']} />
        </div>
      );
    }
  };
  //16.
  const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
  };
  
  // Change code below this line
  ShoppingCart.defaultProps = {
    items: 0
  }
  //17.
  const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }
  
  Items.defaultProps = {
    quantity: 0
  }
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      { /* Change code below this line */ }
      return <Items quantity = {10} />
      { /* Change code above this line */ }
    }
  };
  //18.
  const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  
  // Change code below this line
  Items.propTypes = {
    quantity: PropTypes.number.isRequired
  };
  // Change code above this line
  
  Items.defaultProps = {
    quantity: 0
  };
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };
  //19.
  class Welcome extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
            { /* Change code below this line */ }
            <p>Hello, <strong>{this.props.name}</strong>!</p>
            { /* Change code above this line */ }
          </div>
      );
    }
  };
  
  class App extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
              { /* Change code below this line */ }
              <Welcome name="Quincy"/>
              { /* Change code above this line */ }
          </div>
      );
    }
  };
  //20.
  class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper/>
        </div>
      );
    }
  };
  // Change code below this line
  
  const Camper = (props) => {
     return (
       <div>
         <p>{props.name}</p>
       </div>
     );
  };
  
  Camper.propTypes = {
    name: PropTypes.string.isRequired
  };
  
  Camper.defaultProps = {
    name: 'CamperBot'
  };  

