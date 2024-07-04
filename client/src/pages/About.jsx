export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Varenya's Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            At Varenya;s Blog , we're passionate about empowering developers to build innovative and efficient web applications using modern JavaScript frameworks and libraries. Our blog is dedicated to providing high-quality, in-depth content on JavaScript, ReactJS, and NextJS, tailored for both beginners and experienced developers alike.
            </p>

            <p>
            Our mission is to create a comprehensive resource that helps developers navigate the ever-evolving landscape of web development. We believe that by sharing our knowledge and experience, we can foster a community of learners who are as enthusiastic about coding as we are. Whether you're just starting out with JavaScript or looking to deepen your understanding of ReactJS and NextJS, you'll find valuable insights, tutorials, and best practices here.
            </p>

            <p>
            Our articles cover a variety of topics, including:<br />

JavaScript: From fundamental concepts to advanced techniques, we delve into the core language that powers the web. Learn about ES6 features, asynchronous programming, and more.<br />
ReactJS: Discover how to build dynamic, responsive user interfaces with one of the most popular JavaScript libraries. Our ReactJS tutorials and guides cover everything from basic components to state management and hooks.<br />
NextJS: Explore the world of server-side rendering and static site generation with NextJS. We'll guide you through building performant, SEO-friendly applications using this powerful framework.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}