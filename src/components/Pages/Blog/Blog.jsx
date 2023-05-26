import React from "react";
import bg from '../../../assets/blogBg.jpg'
import Pdf from "react-to-pdf";



const Blog = () => {
  
  const ref = React.createRef();

 

  return (
    <div className=" flex justify-start items-center" style={{backgroundImage: `url(${bg})`}}>
      <div className="mx-12 my-8 text-slate-400 text-left md:w-2/4 space-y-4">

        {/* pdf downloader button */}
      <div>
          {/* <button 
          className="px-4 text-white py-2 rounded-md bg-primary"
          
          >

          download


          </button> */}
          <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button  className="px-4 text-white py-2 rounded-md bg-primary" onClick={toPdf}>Download Pdf</button>}
      </Pdf>
         
        </div>
          {/* actual-receipt */}
        <div className="" ref={ref}>
        <div>
          <h2 className="font-bold text-2xl ">
            Tell us the differences between uncontrolled and controlled
            components ?
          </h2>
          <div>
            <p className="font-semibold text-xl">Controlled Components: </p>
            <p>{`form elements like <textarea>, </textarea><submit>, </submit><select> etc. maintains their own state and updates the states by itself as per user input. But we want that form element and form values should be controlled by React is known as controlled component.`}</p>
          </div>
          <div>
            {" "}
            <p className="text-xl font-semibold">Uncontrolled Component: </p>
            <p>Uncontrolled components are sometimes required to use in some
            application, where we don't need to add and hold the current values
            in the state. Simply, this type of forms are not in control of React
            because here we don't use any useState hook or Event handler to hold
            the value. Instead of that, we use ref element to get values
            directly from DOM.</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl">How to validate React props using PropTypes?</h2>
          <p>
            PropTypes is a built-in package in React that allows you to verify
            the props that a component gets. PropTypes makes ensuring the proper
            data types and shapes are supplied to the component, which can aid
            in identifying mistakes early in the development process.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-2xl">Tell us the difference between nodejs and express js ?</h2>
          <p>
            js web application framework that provides a robust set of features
            for web and mobile applications. In other words, NodeJS is the
            package, which provides the JavaScript run-time environment, whereas
            Express is a framework that sits on top of NodeJS and helps us to
            handle requests and responses.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-2xl">
            What is a custom hook, and why will you create a custom hook ?
          </h2>
          <p>
            Custom React JS hooks offer reusability as when a custom hook is
            created, it can be reused easily, which makes the code cleaner and
            reduces the time to write the code. It also enhances the rendering
            speed of the code as a custom hook does not need to be rendered
            again and again while rendering the whole code.
          </p>
        </div>
        </div>

      

      </div>
    </div>
  );
};

export default Blog;
